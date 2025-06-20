import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <header>
            <nav>
                <NavLink to='/'>Domů</NavLink>
                <NavLink to='/quotepage'>Citace</NavLink>
            </nav>
        </header>
    )
}

export default Navbar