import { NavLink } from "react-router-dom";
import { useContext } from 'react'
import { Context } from "./ThemeContext";
import {data} from '../main'

const NavigationLinks = () => {
    const { theme } = useContext(Context);
    return (
        <nav className={`navigation ${theme}`}>
            {data.map(topic => {
                const { path, title } = topic;
                return <NavLink key={path} to={path}>{title}</NavLink>
            })}
        </nav>
    )
}

export default NavigationLinks;