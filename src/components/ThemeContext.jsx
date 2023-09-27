import { useState, useEffect, createContext } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './Home'
import App from '../App.jsx'
import Topic from "./Topic";
import ErrorPage from './ErrorPage';
import { getData } from '../utils/getData.js';

const Context = createContext();

const ThemeContext = (props) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme])
    const toggleTheme = () => {
        setTheme((theme) => theme === 'dark' ? 'light' : 'dark');
    }

    const [data, setData] = useState([]);

    useEffect(() => {
        const asyncSetData = async () => {
            setData(await getData());
        }
        asyncSetData()
    }, [])

    const router = createBrowserRouter([
        {
            path: '*',
            element: <ErrorPage />,
        },
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/topic',
            element: <App />,
            children: data.map(topic => {
                const { path, title, content } = topic;
                return {
                    path: path,
                    element: <Topic title={title} content={content} />,
                }
            })
        },
    ]);

    const ctx = {
        theme,
        toggleTheme,
        data
    }
    return (
        <Context.Provider value={ctx}>
            <RouterProvider router={router}>
                {props.children}
            </RouterProvider>
        </Context.Provider>
    )
}

export { ThemeContext, Context };
