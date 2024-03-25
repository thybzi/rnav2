import { store } from "./store/store";
import { logOut } from "./store/actions";

export function UserBlock() {
    const {authData: {login}} = store.getState();

    return (
        <div>
            {login}
            <button onClick={() => {
                store.dispatch(logOut);
            }}>Выйти</button>
        </div>
    );
}
