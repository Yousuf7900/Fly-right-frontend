const Loader = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-base-content">
            <div className="flex flex-col items-center gap-4">
                <span className="loading loading-dots loading-xl"></span>
                <p className="text-sm sm:text-base text-base-content/70 tracking-wide">
                    Loading, please wait...
                </p>
            </div>
        </div>
    );
};

export default Loader;
