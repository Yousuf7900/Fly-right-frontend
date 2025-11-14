import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { createUser, setUser, googleSignIn, setLoading } = useContext(AuthContext);
    const [passwordError, setPasswordError] = useState("");

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photoURL.value;
        const password = form.password.value;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passwordRegex.test(password)) {
            setPasswordError(
                "Password must be at least 6 characters and include both uppercase and lowercase letters."
            );
            return;
        } else {
            setPasswordError("");
        }

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: `Welcome Mr/Mrs. ${result.user.email}`,
                    showConfirmButton: false,
                    timer: 2500,
                    timerProgressBar: true,
                    background: "#f8fafc",
                    color: "#0f172a",
                    iconColor: "#3b82f6",
                    width: "340px",
                    customClass: {
                        popup: "rounded-xl shadow-xl border border-gray-200",
                        title: "text-base font-semibold",
                    },
                });

                const createdAt = user?.metadata?.createdAt;
                const newUserInfo = {
                    name,
                    email,
                    photo,
                    createdAt,
                };

                fetch("https://fly-right-server-side.vercel.app/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(newUserInfo),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                    });

                navigate(location?.state ? location.state : "/");
            })
            .catch((err) => {
                console.log(err.message);
                setLoading(false);
                navigate(location?.state ? location.state : "/login");
                Swal.fire({
                    icon: "error",
                    title: "Register Failed",
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
                    },
                });
            });
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((res) => {
                setUser(res.user);
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: `Welcome Mr/Mrs. ${res.user.email}`,
                    showConfirmButton: false,
                    timer: 2500,
                    timerProgressBar: true,
                    background: "#f8fafc",
                    color: "#0f172a",
                    iconColor: "#3b82f6",
                    width: "340px",
                    customClass: {
                        popup: "rounded-xl shadow-xl border border-gray-200",
                        title: "text-base font-semibold",
                    },
                });
                navigate(location?.state ? location.state : "/");
            })
            .catch((err) => {
                console.log(err.message);
                setLoading(false);
                navigate(location?.state ? location.state : "/login");
            });
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-linear-to-br from-base-200 via-base-100 to-base-200 px-4">
            <div className="w-full max-w-md bg-base-100 rounded-2xl shadow-xl border border-base-300 p-8 md:p-10">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-primary tracking-tight mb-2 font-heading">
                        Create an Account
                    </h1>
                    <p className="text-base text-base-content/70">
                        Join <span className="font-semibold">Fly Right</span> and start managing your visa journey effortlessly.
                    </p>
                </div>

                <form onSubmit={handleRegisterSubmit} className="space-y-5">
                    <div className="form-control">
                        <label htmlFor="name" className="label">
                            <span className="label-text font-medium text-base-content/80">
                                Full Name
                            </span>
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            required
                            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/60 transition-all"
                        />
                    </div>

                    <div className="form-control">
                        <label htmlFor="email" className="label">
                            <span className="label-text font-medium text-base-content/80">
                                Email Address
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
                        <label htmlFor="photoURL" className="label">
                            <span className="label-text font-medium text-base-content/80">
                                Photo URL
                            </span>
                        </label>
                        <input
                            id="photoURL"
                            name="photoURL"
                            type="url"
                            placeholder="https://example.com/photo.jpg"
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
                        {
                            passwordError && passwordError ? (
                                <p className="text-xs mt-1 text-error">
                                    {passwordError}
                                </p>
                            ) : <p className="text-xs mt-2 text-base-content/60">
                                Must contain at least 6 characters, 1 uppercase and 1 lowercase letter.
                            </p>
                        }
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-full font-semibold tracking-wide mt-2"
                    >
                        Register
                    </button>

                    <div className="divider text-sm text-base-content/60">OR</div>

                    <button
                        onClick={handleGoogleSignIn}
                        type="button"
                        className="btn w-full btn-outline gap-2 font-medium hover:bg-base-200 transition-all"
                    >
                        <FcGoogle className="text-xl" />
                        Sign Up with Google
                    </button>
                </form>

                <p className="text-center mt-8 text-sm text-base-content/70">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="link text-primary font-semibold hover:underline"
                    >
                        Login here
                    </Link>
                </p>
            </div>
        </main>
    );
};

export default Register;
