import { useState, useEffect, createContext } from 'react'

const Context = createContext();

const ThemeContext = (props) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
    useEffect(()=>{
        localStorage.setItem('theme',theme);
    },[theme])
    const toggleTheme = () => {
        setTheme((theme)=>theme === 'dark' ? 'light' : 'dark');
    }
    const ctx = {
        theme,
        toggleTheme
    }
    return (
        <Context.Provider value={ctx}>{props.children}</Context.Provider>
    )
}

export {ThemeContext, Context};
