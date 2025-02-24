import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            // firstName: "",
            // lastName: ""
        }
    },
    reducers: {
        updateName: (currentState, action) => {
            const user = { ...currentState.user, firstName: action.payload.firstName, lastName: action.payload.lastName }
            return { ...currentState, user }
        }
    }
});