import { useContext } from "react";
import { AppContext } from "./App";

export function UserBlock() {
    const {authData: {login}, setAuthData} = useContext(AppContext);

    return (
        <div>
            {login}
            <button onClick={() => {
                setAuthData({
                    isLoggedIn: false,
                    login: null,
                    name: null,
                });
            }}>Выйти</button>
        </div>
    );
}
