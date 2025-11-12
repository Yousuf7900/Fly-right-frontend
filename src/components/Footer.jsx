
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-base-100 border-t border-base-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div className="space-y-3">
                        <Link to="/" className="inline-flex items-center gap-2">
                            <span className="inline-grid place-items-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M2 12c6-8 14-8 20 0-6 8-14 8-20 0Z" />
                                </svg>
                            </span>
                            <span className="text-xl font-extrabold tracking-tight">Fly Right</span>
                        </Link>
                        <p className="text-sm text-base-content/70 leading-relaxed">
                            Streamlined visa discovery and applications. Built for speed, clarity, and trust.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-base-content/80 mb-4">
                            Company
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
                            <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-base-content/80 mb-4">
                            Resources
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/visas" className="hover:text-primary transition-colors">All Visas</Link></li>
                            <li><Link to="/guides" className="hover:text-primary transition-colors">Guides</Link></li>
                            <li><Link to="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-base-content/80 mb-4">
                            Legal
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/terms" className="hover:text-primary transition-colors">Terms</Link></li>
                            <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link></li>
                            <li><Link to="/cookies" className="hover:text-primary transition-colors">Cookies</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-base-300 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-base-content/70">
                        © {new Date().getFullYear()} <span className="font-semibold">Fly Right</span>. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4">
                        <a href="#" aria-label="Twitter" className="text-base-content/70 hover:text-primary transition-colors">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 4.6c-.9.4-1.8.6-2.8.8 1-.6 1.8-1.6 2.1-2.7-1 .6-2 .9-3.1 1.2A4.9 4.9 0 0 0 8.4 7.5C5.6 7.3 3.1 5.9 1.3 3.9c-.9 1.6-.4 3.7 1.1 4.8-.8 0-1.5-.2-2.1-.6 0 2.3 1.6 4.4 3.9 4.9-.7.2-1.5.2-2.2.1.6 2 2.4 3.4 4.6 3.4A9.9 9.9 0 0 1 0 21.5a14 14 0 0 0 7.5 2.2c9.1 0 14.3-7.7 14-14.7.9-.6 1.7-1.4 2.5-2.4Z" />
                            </svg>
                        </a>
                        <a href="#" aria-label="YouTube" className="text-base-content/70 hover:text-primary transition-colors">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.6 3.2c-3.6-.2-11.6-.2-15.2 0C.5 3.5 0 5.9 0 12s.5 8.5 4.4 8.8c3.6.2 11.6.2 15.2 0 3.9-.3 4.4-2.7 4.4-8.8s-.5-8.5-4.4-8.8ZM8 16V8l8 4-8 4Z" />
                            </svg>
                        </a>
                        <a href="#" aria-label="Facebook" className="text-base-content/70 hover:text-primary transition-colors">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M9 8H6v4h3v12h5V12h3.6l.4-4h-4V6.3c0-1 .2-1.3 1.1-1.3H17V0h-3.8C9.6 0 8 1.6 8 4.6V8Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
