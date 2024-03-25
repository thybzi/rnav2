import { memo } from "react";
import { Menu } from "./Menu";
import { UserBlock } from "./UserBlock";
import { LoginForm } from "./LoginForm";
import { store } from "./store/store";

export const Header = memo(function() {
    const {authData: {isLoggedIn, login, name}} = store.getState();

    console.log(isLoggedIn, login, name)

    return (
        <header style={{display: 'flex', justifyContent: 'space-between'}}>
            <Menu/>
            {isLoggedIn ? <UserBlock/> : <LoginForm/>}
        </header>
    );
})
