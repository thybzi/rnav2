import { LOG_IN, LOG_OUT } from "./actions";

export function reducer(state, action) {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                authData: {
                    isLoggedIn: true,
                    login: action.login,
                    name: action.name || null,
                },
            };
        case LOG_OUT:
            return {
                ...state,
                authData: {
                    isLoggedIn: false,
                    login: null,
                    name: null,
                },
            };
        default:
            return state;
    }
}
