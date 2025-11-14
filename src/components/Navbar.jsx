import { useContext } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const linkStyle = ({ isActive }) =>
        isActive
            ? "text-blue-600 font-semibold underline"
            : "hover:text-blue-500";

    const publicLinks = (
        <>
            <li><NavLink to="/" className={linkStyle}>Home</NavLink></li>
            <li><NavLink to="/visas" className={linkStyle}>All Visas</NavLink></li>
            <li><NavLink to="/about" className={linkStyle}>About</NavLink></li>
        </>
    );

    const privateLinks = (
        <>
            <li><NavLink to="/" className={linkStyle}>Home</NavLink></li>
            <li><NavLink to="/visas" className={linkStyle}>All Visas</NavLink></li>
            <li><NavLink to="/add-visa" className={linkStyle}>Add Visa</NavLink></li>
            <li><NavLink to="/my-added-visas" className={linkStyle}>My Added Visas</NavLink></li>
            <li><NavLink to="/my-applications" className={linkStyle}>My Visa Applications</NavLink></li>
            <li><NavLink to="/about" className={linkStyle}>About</NavLink></li>
        </>
    );

    const handleLogOut = () => {
        logout();

        Swal.fire({
            position: "top",
            icon: "success",
            title: `Successfully logged out`,
            showConfirmButton: false,
            timer: 2500,
            timerProgressBar: true,
            background: "#f8fafc",
            color: "#0f172a",
            iconColor: "#3b82f6",
            width: "340px",
            customClass: {
                popup: "rounded-xl shadow-xl border border-gray-200",
                title: "text-base font-semibold"
            }
        });

        navigate('/login');
    };

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
                            {user?.email ? privateLinks : publicLinks}
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
                        {user?.email ? privateLinks : publicLinks}
                    </ul>
                </div>

                <div className="navbar-end gap-2">
                    {user?.email ? (
                        <button onClick={handleLogOut} className="btn btn-sm">Logout</button>
                    ) : (
                        <div className="navbar-end gap-2">
                            <Link to="/login" className="btn btn-sm">Login</Link>
                            <Link to="/register" className="btn btn-sm">Register</Link>
                        </div>
                    )}
                </div>

            </nav>
        </header>
    );
};

export default Navbar;
