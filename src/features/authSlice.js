import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'authentication',
    initialState: {
        token: "",
        isLogged: false
    },
    reducers: {
        setUserAuthentication: (state, action) => {
            state.token = action.payload.token;
            state.isLogged = action.payload.isLogged;
        },
    }
});


export const { setIsLogged, setUserAuthentication } = authSlice.actions;

