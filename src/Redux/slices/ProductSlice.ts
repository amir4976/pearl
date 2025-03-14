import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";


const initialState = {
  products: [],
};

export const getAllUsers = createAsyncThunk(
    "product/getAllUsers",
    async (url, { rejectWithValue }) => {
        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error("Failed to fetch data");
            }
            return await res.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


const product = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(getAllUsers.fulfilled,(state,action)=>{
            state.products = action.payload
        })
        .addCase(getAllUsers.pending,(state,action)=>{
            state.products = []
        })
        .addCase(getAllUsers.rejected,(state,action)=>{
            state.products = []
            console.log('fetch filed')
        })
    }
})


export default product.reducer;
