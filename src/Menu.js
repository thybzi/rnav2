import { NavLink } from "react-router-dom";
import classes from './Menu.module.css';

export function Menu() {
    return  (
        <ul className={classes.Menu}>
            <li className={classes.MenuItem}><NavLink to="/">Главная</NavLink></li>
            <li className={classes.MenuItem}><NavLink to="/about">О нас</NavLink></li>
            <li className={classes.MenuItem}><NavLink to="/contact">Контакты</NavLink></li>
        </ul>
    );
}
