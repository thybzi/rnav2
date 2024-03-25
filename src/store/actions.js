export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export function logIn(login, name) {
    return {
        type: LOG_IN,
        login,
        name,
    };
}

export function logOut() {
    return {
        type: LOG_OUT,
    };
}
