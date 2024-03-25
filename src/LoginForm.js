import { useRef } from "react";
import { store } from "./store/store";
import { logIn } from "./store/actions";

export function LoginForm() {
    const loginElem = useRef(null);
    const nameElem = useRef(null);

    return (
        <form onSubmit={(event) => {
            event.preventDefault();

            store.dispatch(logIn({
                isLoggedIn: true,
                login: loginElem.current.value,
                name: nameElem.current.value || null,
            }));
        }}>
            <input ref={loginElem} name="login" placeholder="username" required/>
            <input ref={nameElem} name="name" placeholder="real name" />
            <button>log in</button>
        </form>
    );
}
