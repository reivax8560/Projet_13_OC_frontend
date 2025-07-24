import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { authSlice } from "../features/authSlice";
import { profileSlice } from "../features/profileSlice";


export const store = configureStore({
    reducer: combineReducers({
        authentication: authSlice.reducer,
        userProfile: profileSlice.reducer,
    })
})
