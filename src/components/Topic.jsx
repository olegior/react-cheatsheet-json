import React, { Fragment, useEffect, useContext } from "react";
import Prism from 'prismjs';
import NavigationButtons from "./NavigationButtons";
import { Context } from './ThemeContext';
import 'prismjs/themes/prism-tomorrow.css';

const Topic = ({ title, content = [] }) => {
    const { theme } = useContext(Context);
    console.log(title);
    const parseContent = (content) => {
        return content.map(item => {
            const [[tag, text]] = Object.entries(item);
            switch (tag) {
                case 'p': { return <p>{text}</p>; }
                case 'h': { return <h3>{text}</h3>; }
                case 'c': { return <pre><code className="language-javascript">{text}</code></pre>; }
                case 'l': { return <ul>{text.map(i => <li key={i}>{i}</li>)}</ul> }
                case 'w': { return <div className="alert"><span>!</span>{text}</div>; }
                default: { return JSON.stringify(text); }
            }
        })
    }

    useEffect(() => {
        document.querySelector('h1').scrollIntoView(false);
        Prism.highlightAll();
    }, [title]);

    return (
        <div className={`topic ${theme}`}>
            <h1>{title}</h1>
            {parseContent(content).map((c, i) => <Fragment key={i}>{c}</Fragment>)}
            <NavigationButtons title={title} />
        </div>
    )
}

export default Topic;