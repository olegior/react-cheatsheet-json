import { Link } from "react-router-dom";
import {data} from '../main'

const NavigationButtons = ({ title }) => {
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
                {prev && <Link to={'/react-cheatsheet/topic/' + prev.path}>Предыдущая тема: {prev.title}</Link>}
                {next && <Link to={'/react-cheatsheet/topic/' + next.path}>Следующая тема: {next.title}</Link>}

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
