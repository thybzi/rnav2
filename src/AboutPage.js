import { useContext } from "react";
import { Header } from "./Header";
import { AppContext } from "./App";

export function AboutPage() {
    const {authData: {name}} = useContext(AppContext);

    return <>
        <Header/>
        <h1>О нас</h1>
        <p>Мы классные ребята</p>
        <p>Прямо как ты{name && `, ${name}`}!</p>
    </>
}
