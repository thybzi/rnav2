import { memo, useContext } from "react";
import { Menu } from "./Menu";
import { UserBlock } from "./UserBlock";
import { LoginForm } from "./LoginForm";
import { AppContext } from "./App";

export const Header = memo(function() {
    const {authData: {isLoggedIn, login, name}} = useContext(AppContext);

    console.log(isLoggedIn, login, name)

    return (
        <header style={{display: 'flex', justifyContent: 'space-between'}}>
            <Menu/>
            {isLoggedIn ? <UserBlock/> : <LoginForm/>}
        </header>
    );
})
