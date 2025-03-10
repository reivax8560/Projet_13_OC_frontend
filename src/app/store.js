import { configureStore } from "@reduxjs/toolkit"


let state = {
    token: "",
    isLogged: false,
    firstName: "",
    lastName: "",
    email: "",
};


const reducer = (currentState, action) => {
    switch (action.type) {
        case "SET_TOKEN": {
            return { ...currentState, token: action.payload };
        }
        case "SET_ISLOGGED": {
            return { ...currentState, isLogged: action.payload };
        }
        case "SET_FIRSTNAME": {
            return { ...currentState, firstName: action.payload };
        }
        case "SET_LASTNAME": {
            return { ...currentState, lastName: action.payload };
        }
        case "SET_EMAIL": {
            return { ...currentState, email: action.payload };
        }
        default:
            return currentState;
    }
};

export const store = configureStore({
    preloadedState: state,
    reducer,
});
