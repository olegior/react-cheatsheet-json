import { Link } from "react-router-dom";
import { Context } from './ThemeContext';
import { useContext } from 'react';
import Header from './Header';

const Home = () => {
    const { theme } = useContext(Context);
    return (
        <div className={`home ${theme}`}>
            <Header />
            <div>
                <h1>Шпаргалка по React</h1>
                <div className="text-center text-lg">
                    <p>Официальная документация: <a className="text-activelink" target='_blank' href='https://react.dev/' rel='noreferrer'>React.dev</a></p>
                    <p>на русском: <a className="text-activelink" target='_blank' href='https://ru.legacy.reactjs.org/' rel='noreferrer'>Reactjs.org</a></p>
                </div>
                <Link to='topic/components'>к темам</Link>
            </div>
        </div>
    )
}

export default Home;