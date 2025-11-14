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
import VisaDetails from "../pages/VisaDetails";
import About from "../pages/About";

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
                loader: () => fetch('https://fly-right-server-side.vercel.app/visas')
            },
            {
                path: '/add-visa',
                element: <PrivateRoute><AddVisa></AddVisa></PrivateRoute>
            },
            {
                path: '/my-added-visas',
                element: <PrivateRoute><MyAddedVisas></MyAddedVisas></PrivateRoute>,
            },
            {
                path: '/my-applications',
                element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
            },
            {
                path: '/visa/:id',
                element: <PrivateRoute><VisaDetails></VisaDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://fly-right-server-side.vercel.app/visas/${params.id}`)
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    },
]);

export default Router;