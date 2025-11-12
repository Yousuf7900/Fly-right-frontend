import { useState } from "react";
import { useLoaderData } from "react-router";
import AllVisaCard from "./AllVisaCard";

const AllVisas = () => {
    const AllVisasCollection = useLoaderData();
    const [allVisa, setAllVisa] = useState(AllVisasCollection);

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-extrabold text-primary mb-2">
                    All Available Visas
                </h1>
                <p className="text-base-content/70">
                    Browse and explore all visa options available on Fly Right.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {allVisa?.map((visa) => (
                    <AllVisaCard key={visa._id} visa={visa} />
                ))}
            </div>
        </section>
    );
};

export default AllVisas;
