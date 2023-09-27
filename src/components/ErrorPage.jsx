import { Link, useRouteError, useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    return (
        <div className="errorPage">
            <h1>Cтраница не найдена! </h1>
            <p>{(error && (error.status || error.message)) || 404}</p>
            <button onClick={() => navigate(-1)}>Вернуться назад</button>
            <Link to="/">Вернуться на главную</Link>
        </div>
    )
}

export default ErrorPage;