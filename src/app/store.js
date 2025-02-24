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

        case "ADD_TOKEN": {
            // return { ...currentState, token: action.payload };   // à tester car token enregistré dans un array
            const stateWithToken = [...currentState.token, action.payload];
            return { ...currentState, token: stateWithToken };
        }
        case "SET_ISLOGGED_FALSE": {
            return { ...currentState, isLogged: false };
        }
        case "SET_ISLOGGED_TRUE": {
            return { ...currentState, isLogged: true };
        }
        case "UPDATE_FIRSTNAME": {
            return { ...currentState, firstName: action.payload };
        }
        case "UPDATE_LASTNAME": {
            return { ...currentState, lastName: action.payload };
        }
        case "UPDATE_EMAIL": {
            return { ...currentState, email: action.payload };
        }



        //   case "REMOVE_PRODUCT": {
        //     const list = currentState.list.filter(
        //       (item, index) => index !== action.payload
        //     );
        //     return { ...currentState, list: list };
        //   }

        //   case "APPLY_VOUCHER": {
        //     const withVoucherList = currentState.list.map((item) =>
        //       item.title === "Super Crémeux"
        //         ? { ...item, price: action.payload.price }
        //         : item
        //     );
        //     return { ...currentState, list: withVoucherList };
        //   }

        //   case "UPDATE_FIRSTNAME": {
        //     const owner = { ...currentState.owner, firstName: action.payload };
        //     return { ...currentState, owner };
        //   }

        default:
            return currentState;
    }
};

export const store = configureStore({
    preloadedState: state,
    reducer,
});
