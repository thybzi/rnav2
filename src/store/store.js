import { createStore } from "redux";
import { reducer } from "./reducer";

export const store = createStore(reducer, {
    authData: {
        isLoggedIn: false,
        login: null,
        name: null,
    },
});
