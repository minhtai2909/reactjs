import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoryAPI from "api/categoryAPI";

export const getListCategory = createAsyncThunk(
    'product/category', async () => {
        const lst = localStorage.getItem("STORAGE_CATEGORIS");
        debugger
        if (Array.isArray(lst) == false || lst.length == 0) {
            lst = await categoryAPI.getAll();
            
            localStorage.setItem("STORAGE_CATEGORIS", lst);
        }
        console.log("lstdfdsfsdf",lst)
        return lst;
    }
)

const productSlice = createSlice({
    name: "product",
    initialState: {
        LstCategory: []
    },
    reducers: {

    },
    extraReducers: {
        [getListCategory.fulfilled]: (state, action) => {
            state.LstCategory = action.payload
        }
    }
});

const { reducer, actions } = productSlice;
export default reducer;
