import { useContext, useRef } from "react";
import { AppContext } from "./App";

export function LoginForm() {
    const {setAuthData} = useContext(AppContext);
    const loginElem = useRef(null);
    const nameElem = useRef(null);

    return (
        <form onSubmit={(event) => {
            event.preventDefault();

            setAuthData({
                isLoggedIn: true,
                login: loginElem.current.value,
                name: nameElem.current.value || null,
            });
        }}>
            <input ref={loginElem} name="login" placeholder="username" required/>
            <input ref={nameElem} name="name" placeholder="real name" />
            <button>log in</button>
        </form>
    );
}
