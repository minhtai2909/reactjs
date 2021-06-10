import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userAPI from "api/userAPI";

export const register = createAsyncThunk(
    'user/register', async (payload) => {
        // Call API to register
        const data = await userAPI.register(payload);

        // Save data to localStore
        localStorage.setItem('access_token', data.jwt);
        localStorage.setItem('user', JSON.stringify(data.user));

        // return user data
        return data.user;
    }
)

export const login = createAsyncThunk(
    'user/login', async (payload) => {
        const data = await userAPI.login(payload);
        // Save data to localStore
        localStorage.setItem('access_token', data.jwt);
        localStorage.setItem('user', JSON.stringify(data.user));
        // return user data
        return data.user;
    }
)

const userSlice = createSlice({
    name: "user",
    initialState: {
        current: {},
        settings: {},

    },
    reducers: {},
    extraReducers: {
        [register.fulfilled]: (state, action) => {
            state.current = action.payload
        },

        [login.fulfilled]: (state, action) => {
            state.current = action.payload
        },
    }
});

const { reducer } = userSlice;
export default reducer;