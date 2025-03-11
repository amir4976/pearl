import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

// تعریف نوع داده کاربر
interface User {
    _id: number;
    userName: string;
    name: string;
    email: string;
}

interface UserState {
    user: User | null;
    status: "idle" | "loading" | "succeeded" | "failed";
    isLogin: boolean;
    error: string | null;
}

// تعریف thunk برای دریافت اطلاعات کاربر
export const fetchUser = createAsyncThunk<User, void, { rejectValue: string }>(
    "user/fetchUser",
    async (_, thunkAPI) => {
        try {
            const response = await fetch("http://localhost:3000/api/me");
            if (!response.ok) {
                throw new Error("Failed to fetch user data");
            }
            const data: User = await response.json();
            return data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message ?? "مشکلی پیش آمد");
        }
    }
);

const initialState: UserState = {
    user: null,
    status: "idle",
    isLogin: false,
    error: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchUser.fulfilled, (state, action: PayloadAction<User>) => {
                state.status = "succeeded";
                state.user = action.payload;
                state.isLogin = true;
            })
            .addCase(fetchUser.rejected, (state, action: PayloadAction<string>) => {
                state.status = "failed"
                state.isLogin = false;
                state.error = action.payload;
            });
    },
});

export default userSlice.reducer;
