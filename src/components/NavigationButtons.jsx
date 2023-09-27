import { useContext } from "react";
import { Context } from "./ThemeContext";
import { Link } from "react-router-dom";

const NavigationButtons = ({ title }) => {
    const {data} = useContext(Context);
    const topics = data.map(e => {
        const { title, path } = e;
        return { title, path };
    })
    const getCurrentPage = (title) => {
        return topics.findIndex(topic => topic.title === title);
    }

    const getPrevNextPages = (title) => {
        const current = getCurrentPage(title);
        const prev = current > 0 ? topics[current - 1] : null;
        const next = current < topics.length - 1 ? topics[current + 1] : null;
        return (
            <>
                {prev && <Link to={'/topic/' + prev.path}>Предыдущая тема: {prev.title}</Link>}
                {next && <Link to={'/topic/' + next.path}>Следующая тема: {next.title}</Link>}

            </>
        )
    }

    return (
        <div className="navigation--buttons">
            {getPrevNextPages(title)}
        </div>
    )
}

export default NavigationButtons;
