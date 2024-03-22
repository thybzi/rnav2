import { useCallback, useContext, useMemo, useState } from "react";
import { Header } from "./Header";
import { AppContext } from "./App";
import { Input } from "./Input";
import { ArrayBlock } from "./ArrayBlock";

export function AboutPage() {
    const {authData: {name}} = useContext(AppContext);
    const [firstName, setFirstName] = useState('John');
    const [lastName, setLastName] = useState('Smith');

    const handleFirstNameChange = useCallback(function(event) {
        setFirstName(event.target.value);
    }, [setFirstName]);

    const handleLastNameChange = useCallback(function(event) {
        setLastName(event.target.value);
    }, [setLastName]);

    const foo = 42;

    const myArray = useMemo(() => ([foo, 12]), [foo]);

    return <>
        <Header/>
        <h1>О нас</h1>
        <p>Мы классные ребята</p>
        <p>Прямо как ты{name && `, ${name}`}!</p>

        <ArrayBlock values={myArray}/>

        <Input value={firstName} onChange={handleFirstNameChange} />
        <Input value={lastName} onChange={handleLastNameChange} />
        <div>Good morning, {firstName} {lastName}!</div>
    </>
}
