import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name: 'userProfile',
    initialState: {
        firstName: "",
        lastName: "",
        email: ""
    },
    reducers: {
        setUserDatas: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
        },
    }
});

export const { setUserDatas } = profileSlice.actions;

