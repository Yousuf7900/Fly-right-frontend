// Footer.jsx
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content mt-10 border-t border-base-300">
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Left side — logo + text */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847z" />
                        </svg>
                    </div>
                    <p className="text-sm sm:text-base">
                        © {new Date().getFullYear()} <span className="font-semibold">Fly Right</span> — All rights reserved
                    </p>
                </div>

                {/* Right side — social icons */}
                <div className="flex gap-4 text-base-content/70">
                    <a href="#" className="hover:text-primary transition-colors">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.39 4.482A13.978 13.978 0 011.671 3.149 4.902 4.902 0 003.18 9.723a4.9 4.9 0 01-2.228-.616v.061a4.92 4.92 0 003.946 4.827 4.996 4.996 0 01-2.224.084 4.936 4.936 0 004.604 3.417A9.868 9.868 0 010 21.543a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A9.935 9.935 0 0024 4.557z" />
                        </svg>
                    </a>
                    <a href="#" className="hover:text-primary transition-colors">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 4-8 4z" />
                        </svg>
                    </a>
                    <a href="#" className="hover:text-primary transition-colors">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M9 8H6v4h3v12h5V12h3.642l.358-4h-4V6.333c0-.955.192-1.333 1.115-1.333H17V0h-3.808C9.596 0 8 1.583 8 4.615V8z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
