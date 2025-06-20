import { Link } from "react-router-dom";

const Error = () => {
    return <section className="error-section">
        <h2>404</h2>
        <p>Stránka nenalezena</p>
        <Link to='/'>Zpět domů</Link>
    </section>
}

export default Error