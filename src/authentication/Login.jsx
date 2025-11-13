
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { LogInWithEmailAndPassword, setUser, googleSignIn, setLoading } = useContext(AuthContext);

    const handleSignInWithPassword = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        LogInWithEmailAndPassword(email, password)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: `Welcome back, ${result.user.email}`,
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

                navigate(location?.state ? location.state : '/');
            })
            .catch(err => {
                console.log(err.message);
                setLoading(false);
                navigate(location?.state ? location.state : '/login');
                Swal.fire({
                    icon: "error",
                    title: "Login Failed",
                    text: err.message || "Something went wrong. Please try again.",
                    showConfirmButton: true,
                    confirmButtonColor: "#dc2626",
                    background: "#fef2f2",
                    color: "#7f1d1d",
                    width: "360px",
                    customClass: {
                        popup: "rounded-xl border border-red-300 shadow-md",
                        title: "text-lg font-semibold",
                        htmlContainer: "text-sm",
                    }
                });
            })
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                console.log(res.user);
                setUser(res.user);
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: `Welcome back, ${res.user.email}`,
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
                navigate(location?.state ? location.state : '/');
            })
            .catch(err => {
                console.log(err.message);
                setLoading(false);
                navigate(location?.state ? location.state : '/login');
            })
    }
    return (
        <main className="min-h-screen flex items-center justify-center bg-linear-to-br from-base-200 via-base-100 to-base-200 px-4">
            <div className="w-full max-w-md bg-base-100 rounded-2xl shadow-xl border border-base-300 p-8 md:p-10">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-primary tracking-tight mb-2 font-heading">
                        Welcome back
                    </h1>
                    <p className="text-base text-base-content/70">
                        Log in to manage your visa applications and explore new opportunities.
                    </p>
                </div>

                <form onSubmit={handleSignInWithPassword} className="space-y-5">

                    <div className="form-control">
                        <label htmlFor="email" className="label">
                            <span className="label-text font-medium text-base-content/80">
                                Email address
                            </span>
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            required
                            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/60 transition-all"
                        />
                    </div>

                    <div className="form-control">
                        <label htmlFor="password" className="label">
                            <span className="label-text font-medium text-base-content/80">
                                Password
                            </span>
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="••••••••"
                            required
                            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/60 transition-all"
                        />
                        <div className="text-right mt-2">
                            <a
                                href="#"
                                className="link link-hover text-sm text-primary/80 hover:text-primary font-medium"
                            >
                                Forgot password?
                            </a>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-full font-semibold tracking-wide"
                    >
                        Sign in
                    </button>

                    <div className="divider text-sm text-base-content/60">OR</div>

                    <button onClick={handleGoogleSignIn}
                        type="button"
                        className="btn w-full btn-outline gap-2 font-medium hover:bg-base-200 transition-all"
                    >
                        <FcGoogle className="text-xl" />
                        Sign in with Google
                    </button>
                </form>

                <p className="text-center mt-8 text-sm text-base-content/70">
                    Don’t have an account?{" "}
                    <Link
                        to="/register"
                        className="link text-primary font-semibold hover:underline"
                    >
                        Create one
                    </Link>
                </p>
            </div>
        </main>
    );
};

export default Login;
