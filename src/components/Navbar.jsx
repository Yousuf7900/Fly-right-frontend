
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const links = (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/visas">All Visas</Link></li>
            <li><Link to="/add-visa">Add Visa</Link></li>
            <li><Link to="/my-added-visas">My Added Visas</Link></li>
            <li><Link to="/my-applications">My Visa Applications</Link></li>
        </>
    );

    const handleLogOut = () => {
        logout();
        navigate('/login');
    }

    return (
        <header className="sticky top-0 z-40 bg-base-100/90 backdrop-blur border-b border-base-200">
            <nav className="navbar max-w-7xl mx-auto px-3 sm:px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <button
                            tabIndex={0}
                            className="btn btn-ghost lg:hidden"
                            aria-label="Open menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-56"
                        >
                            {links}
                        </ul>
                    </div>

                    <Link
                        to="/"
                        className="btn btn-ghost text-xl normal-case tracking-tight hover:opacity-90"
                    >
                        Fly Right
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-1">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end gap-2">
                    {
                        user && user?.email ? <button onClick={handleLogOut} className="btn btn-sm">Logout</button> : <div className="navbar-end gap-2">
                            <Link to="/login" className="btn btn-sm">Login</Link>
                            <Link to="/register" className="btn btn-sm">Register</Link>
                        </div>
                    }

                </div>
            </nav>
        </header>
    );
};

export default Navbar;
