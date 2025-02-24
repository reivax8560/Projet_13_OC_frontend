import { createSlice } from "@reduxjs/toolkit";

export const signInSlice = createSlice({
    name: 'signIn',
    initialState: {},
    reducers: {
        addToken: (currentState, action) => {
            const stateWithToken = { ...currentState, token: action.payload }
            return stateWithToken
        }
    }
});