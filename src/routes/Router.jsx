import { createBrowserRouter } from "react-router";
import Login from "../authentication/Login";
import Register from "../authentication/Register";
import HomeLayout from "../Layout/HomeLayout";
import NotFound from "../pages/NotFound";
import AllVisas from "../pages/AllVisas";
import AddVisa from "../pages/AddVisa";
import PrivateRoute from "./PrivateRoute";
import MyAddedVisas from "../pages/MyAddedVisas";
import MyApplications from "../pages/MyApplications";
import Home from "../pages/Home";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/visas',
                element: <AllVisas></AllVisas>,
                loader: () => fetch('http://localhost:5000/visas')
            },
            {
                path: '/add-visa',
                element: <PrivateRoute><AddVisa></AddVisa></PrivateRoute>
            },
            {
                path: '/my-added-visas',
                element: <PrivateRoute><MyAddedVisas></MyAddedVisas></PrivateRoute>,
                // loader: () => fetch("http://localhost:5000/visas")
            },
            {
                path: '/my-applications',
                element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
            }
        ]
    },
]);

export default Router;