
import Lottie from "lottie-react";
import notfound from "../assets/404 network.json";

const NotFound = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center bg-base-100 text-base-content px-6">
            <div className="flex flex-col items-center text-center space-y-6 max-w-lg w-full">

                <div className="w-64 sm:w-80 md:w-96">
                    <Lottie animationData={notfound} loop={true} />
                </div>

                <h1 className="text-5xl font-extrabold text-primary tracking-tight">
                    404
                </h1>
                <p className="text-lg text-base-content/70 leading-relaxed max-w-md">
                    Oops! The page you’re looking for couldn’t be found or might have been
                    moved.
                </p>

                <a
                    href="/"
                    className="btn btn-primary btn-wide mt-2 shadow-md hover:shadow-lg transition-all duration-200"
                >
                    Back to Home
                </a>
            </div>
        </section>
    );
};

export default NotFound;
