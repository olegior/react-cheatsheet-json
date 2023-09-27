import { NavLink } from "react-router-dom";
import { useContext, useState, useEffect } from 'react'
import { Context } from "./ThemeContext";
import { getData } from "../utils/getData";

const NavigationLinks = () => {
    const { theme } = useContext(Context);
    const [data, setData] = useState([]);

    useEffect(() => {
        const asyncSetData = async () => {
            setData(await getData());
        }
        asyncSetData()
    }, [])

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