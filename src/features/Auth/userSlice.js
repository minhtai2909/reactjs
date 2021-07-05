import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userAPI from "api/userAPI";
import StorageKeys from "constants/storage-keys";

export const register = createAsyncThunk(
    'user/register', async (payload) => {
        // Call API to register
        const data = await userAPI.register(payload);

        // Save data to localStore
        localStorage.setItem(StorageKeys.TOKEN, data.jwt);
        localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

        // return user data
        return data.user;
    }
)

export const login = createAsyncThunk(
    'user/login', async (payload) => {
        const data = await userAPI.login(payload);
        // Save data to localStore
        localStorage.setItem(StorageKeys.TOKEN, data.jwt);
        localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
        // return user data
        return data.user;
    }
)

const userSlice = createSlice({
    name: "user",
    initialState: {
        current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
        settings: {},

    },
    reducers: {
        logout(state) {
            // clear local storage
            localStorage.removeItem(StorageKeys.USER);
            localStorage.removeItem(StorageKeys.TOKEN);
            state.current = {};
        }
    },
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.current = action.payload
        },

        [login.fulfilled]: (state, action) => {
            state.current = action.payload
        },
    }
});

const { reducer, actions } = userSlice;
export const { logout } = actions;
export default reducer;