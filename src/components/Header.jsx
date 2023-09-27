import logo from '../assets/react.svg';
import toggle from '../assets/toggle.png';
import { Link } from 'react-router-dom'
import { Context } from './ThemeContext';
import { useContext } from 'react';

const Header = () => {
    const {theme,toggleTheme} = useContext(Context);
    return (
        <header className="header">
            <Link to="/"><img src={logo} className="header-logo" alt="logo" /></Link>
            <button onClick={toggleTheme}><img src={toggle} alt={theme} /></button>
            <a href='https://github.com/olegior/react-cheatsheet' target='_blank' rel="noreferrer">
                <img className='github' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" />
            </a>
        </header>
    )
}

export default Header;