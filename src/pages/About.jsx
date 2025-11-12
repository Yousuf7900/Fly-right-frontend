
const About = () => {
    return (
        <section className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-12">
            <div className="max-w-4xl bg-base-100 rounded-2xl shadow-xl border border-base-300 p-8 sm:p-12">
                <header className="mb-8 text-center">
                    <h1 className="text-4xl font-extrabold text-primary mb-3">
                        About <span className="text-base-content">Fly Right</span>
                    </h1>
                    <p className="text-base text-base-content/70 max-w-2xl mx-auto">
                        Simplifying global travel through modern visa management.
                    </p>
                </header>

                <div className="space-y-6 text-base text-base-content/80 leading-relaxed">
                    <p>
                        <strong>Fly Right</strong> is a modern platform designed to make visa
                        exploration and application management effortless. We help travelers,
                        students, and professionals find visa requirements, apply quickly, and
                        track their progress—all in one convenient dashboard.
                    </p>

                    <p>
                        Our mission is to bring clarity and transparency to international travel.
                        No more confusion over requirements, processing times, or missing
                        documents. With Fly Right, users can easily access trusted visa
                        information and stay updated throughout their journey.
                    </p>

                    <p>
                        Whether you’re applying for a <span className="font-semibold text-primary">Tourist Visa</span>,{" "}
                        <span className="font-semibold text-primary">Student Visa</span>, or{" "}
                        <span className="font-semibold text-primary">Work Permit</span>, Fly Right is
                        built to streamline your process and connect you to verified, up-to-date
                        resources from around the world.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    <div className="p-5 rounded-xl bg-base-200 border border-base-300">
                        <h3 className="text-xl font-semibold text-primary mb-1">150+</h3>
                        <p className="text-sm text-base-content/70">Countries Covered</p>
                    </div>
                    <div className="p-5 rounded-xl bg-base-200 border border-base-300">
                        <h3 className="text-xl font-semibold text-primary mb-1">10K+</h3>
                        <p className="text-sm text-base-content/70">Active Users</p>
                    </div>
                    <div className="p-5 rounded-xl bg-base-200 border border-base-300">
                        <h3 className="text-xl font-semibold text-primary mb-1">24/7</h3>
                        <p className="text-sm text-base-content/70">Support Availability</p>
                    </div>
                </div>

                <div className="mt-10 text-center">
                    <h2 className="text-2xl font-bold text-base-content mb-3">
                        Our Vision
                    </h2>
                    <p className="text-base text-base-content/70 max-w-2xl mx-auto leading-relaxed">
                        To become the world’s most trusted digital gateway for visa applications,
                        empowering travelers everywhere with simple, fast, and reliable access to
                        international opportunities.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
