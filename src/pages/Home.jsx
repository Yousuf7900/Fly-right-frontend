
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import CountUp from "react-countup";
import { useEffect, useState } from "react";


const Home = () => {
    const [latestVisas, setLatestVisas] = useState([]);
    useEffect(() => {
        fetch("https://fly-right-server-side.vercel.app/visas", {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                setLatestVisas(data);
            })
    }, [])
    return (
        <main className="bg-base-100 text-base-content">

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    <div>
                        <span className="inline-block text-xs tracking-widest uppercase text-primary/80 font-semibold mb-3">
                            Fly Right • Your Abroad Partner
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                            Hassle-free{" "}
                            <span className="text-primary">
                                <Typewriter
                                    words={[
                                        "Visa Guidance",
                                        "Application Tracking",
                                        "Global Mobility",
                                        "Fast Processing",
                                    ]}
                                    loop={0}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={40}
                                    delaySpeed={1400}
                                />
                            </span>
                        </h1>
                        <p className="mt-4 text-base sm:text-lg text-base-content/70">
                            Discover visa requirements, apply in minutes, and manage your
                            journey—everything in one place.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <Link to="/visas" className="btn btn-primary btn-wide">
                                Explore Visas
                            </Link>
                        </div>

                        <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">

                            <div className="stat bg-base-200 rounded-xl py-3">
                                <div className="stat-title text-xs">Countries</div>
                                <div className="stat-value text-2xl font-bold text-primary">
                                    <CountUp end={150} duration={2} suffix="+" />
                                </div>
                            </div>

                            <div className="stat bg-base-200 rounded-xl py-3">
                                <div className="stat-title text-xs">Avg. Process</div>
                                <div className="stat-value text-2xl font-bold text-primary">
                                    <CountUp end={10} duration={2.5} suffix="d" />
                                </div>
                            </div>

                            <div className="stat bg-base-200 rounded-xl py-3">
                                <div className="stat-title text-xs">Users</div>
                                <div className="stat-value text-2xl font-bold text-primary">
                                    <CountUp end={12000} duration={3} suffix="+" separator="," />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="carousel w-full rounded-2xl shadow-xl border border-base-300 overflow-hidden">
                            <div id="slide1" className="carousel-item relative w-full">
                                <img
                                    src="https://i.ibb.co.com/chNcBMDH/front-view-travel-agent-her-working-place-holding-little-globe-toy-plane-map-assistant-agency-indoor.jpg"
                                    alt="Travel agent with globe"
                                    className="w-full h-[340px] sm:h-[420px] object-cover"
                                />
                                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#slide5" className="btn btn-circle bg-transparent border-none text-white hover:bg-black/20">❮</a>
                                    <a href="#slide2" className="btn btn-circle bg-transparent border-none text-white hover:bg-black/20">❯</a>
                                </div>
                            </div>

                            <div id="slide2" className="carousel-item relative w-full">
                                <img
                                    src="https://i.ibb.co.com/xtFtRzg5/high-angle-people-working-travel-agency.jpg"
                                    alt="People working in travel agency"
                                    className="w-full h-[340px] sm:h-[420px] object-cover"
                                />
                                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#slide1" className="btn btn-circle bg-transparent border-none text-white hover:bg-black/20">❮</a>
                                    <a href="#slide3" className="btn btn-circle bg-transparent border-none text-white hover:bg-black/20">❯</a>
                                </div>
                            </div>

                            <div id="slide3" className="carousel-item relative w-full">
                                <img
                                    src="https://i.ibb.co.com/kgDprvwd/side-view-woman-working-as-travel-agent.jpg"
                                    alt="Woman working as travel agent"
                                    className="w-full h-[340px] sm:h-[420px] object-cover"
                                />
                                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#slide2" className="btn btn-circle bg-transparent border-none text-white hover:bg-black/20">❮</a>
                                    <a href="#slide4" className="btn btn-circle bg-transparent border-none text-white hover:bg-black/20">❯</a>
                                </div>
                            </div>

                            <div id="slide4" className="carousel-item relative w-full">
                                <img
                                    src="https://i.ibb.co.com/bg9JmP1Y/visa-application-composition-with-europe-america-flag.jpg"
                                    alt="Visa application composition"
                                    className="w-full h-[340px] sm:h-[420px] object-cover"
                                />
                                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#slide3" className="btn btn-circle bg-transparent border-none text-white hover:bg-black/20">❮</a>
                                    <a href="#slide5" className="btn btn-circle bg-transparent border-none text-white hover:bg-black/20">❯</a>
                                </div>
                            </div>

                            <div id="slide5" className="carousel-item relative w-full">
                                <img
                                    src="https://i.ibb.co.com/9kL29xtp/workers-it-company-working-computer.jpg"
                                    alt="People working on computers"
                                    className="w-full h-[340px] sm:h-[420px] object-cover"
                                />
                                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                    <a href="#slide4" className="btn btn-circle bg-transparent border-none text-white hover:bg-black/20">❮</a>
                                    <a href="#slide1" className="btn btn-circle bg-transparent border-none text-white hover:bg-black/20">❯</a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>


            <section className="bg-base-200 border-y border-base-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <header className="flex items-end justify-between mb-6 gap-4">
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                                Latest visas
                            </h2>
                            <p className="text-base-content/70">
                                Recently added opportunities across the globe.
                            </p>
                        </div>
                        <Link to="/visas" className="btn btn-outline btn-sm">
                            See all
                        </Link>
                    </header>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {latestVisas.slice(0, 6).map((visa) => (
                            <article
                                key={visa._id}
                                className="card bg-base-100 border border-base-300 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
                            >
                                <figure className="h-40 overflow-hidden rounded-t-2xl">
                                    <img
                                        src={visa.country_image}
                                        alt={visa.country_name}
                                        className="w-full h-full object-cover"
                                    />
                                </figure>

                                <div className="card-body p-5">
                                    <div className="flex items-start justify-between gap-2 mb-2">
                                        <h3 className="text-lg font-semibold leading-tight">
                                            {visa.country_name}
                                        </h3>
                                        <span className="badge badge-primary badge-outline text-xs">
                                            {visa.visa_type}
                                        </span>
                                    </div>

                                    <ul className="text-sm text-base-content/70 space-y-1 mb-4">
                                        <li className="flex justify-between">
                                            <span>Processing</span>
                                            <span className="font-medium text-base-content">
                                                {visa.processing_time} days
                                            </span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Fee</span>
                                            <span className="font-medium text-primary">
                                                ${visa.fee}
                                            </span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Validity</span>
                                            <span className="font-medium text-base-content">
                                                {visa.validity} days
                                            </span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>Method</span>
                                            <span className="font-medium text-base-content">
                                                {visa.application_method}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>


            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <header className="mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                        Why choose <span className="text-primary">Fly Right</span>?
                    </h2>
                    <p className="text-base-content/70">
                        Built for speed, clarity, and confidence.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-2xl border border-base-300 bg-base-100 shadow-sm hover:shadow-md transition">
                        <h3 className="font-semibold text-lg">Clear Requirements</h3>
                        <p className="text-base-content/70 mt-1">
                            Everything you need in one place for stress-free applications.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl border border-base-300 bg-base-100 shadow-sm hover:shadow-md transition">
                        <h3 className="font-semibold text-lg">Fast Applications</h3>
                        <p className="text-base-content/70 mt-1">
                            Apply in minutes and track progress in real-time.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl border border-base-300 bg-base-100 shadow-sm hover:shadow-md transition">
                        <h3 className="font-semibold text-lg">Secure & Private</h3>
                        <p className="text-base-content/70 mt-1">
                            Your information stays protected with top-tier security.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-base-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <header className="mb-8">
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                            How it works
                        </h2>
                        <p className="text-base-content/70">
                            Three simple steps to get moving.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-2xl border border-base-300 bg-base-100 shadow-sm">
                            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold mb-3">
                                1
                            </div>
                            <h3 className="font-semibold text-lg">Explore visas</h3>
                            <p className="text-base-content/70 mt-1">
                                Browse by country and visa type. Filter by your goals.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl border border-base-300 bg-base-100 shadow-sm">
                            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold mb-3">
                                2
                            </div>
                            <h3 className="font-semibold text-lg">Apply securely</h3>
                            <p className="text-base-content/70 mt-1">
                                Fill out details, upload documents, and submit—no hassle.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl border border-base-300 bg-base-100 shadow-sm">
                            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold mb-3">
                                3
                            </div>
                            <h3 className="font-semibold text-lg">Track & manage</h3>
                            <p className="text-base-content/70 mt-1">
                                View status updates and keep your applications organized.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <Link to="/visas" className="btn btn-primary btn-wide">
                            Get started
                        </Link>
                    </div>
                </div>
            </section>


        </main>
    );
};


const SliderNav = ({ prev, next }) => (
    <div className="absolute flex justify-between transform -translate-y-1/2 left-3 right-3 top-1/2">
        <a href={prev} className="btn btn-circle btn-sm">
            ❮
        </a>
        <a href={next} className="btn btn-circle btn-sm">
            ❯
        </a>
    </div>
);

export default Home;
