import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <Link to="" className="logo">FoodnBeverageBlog</Link>
            <nav>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            </nav>
        </>
    )
}