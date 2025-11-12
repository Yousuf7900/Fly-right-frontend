import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import Loader from "../components/Loader";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <Loader></Loader>
    }
    if (user && user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;