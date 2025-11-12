import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const MyAddedVisas = () => {
    const { user } = useContext(AuthContext);
    const [myVisa, setMyVisa] = useState([]);

    useEffect(() => {
        if (!user?.email) return;

        fetch("http://localhost:5000/visas/my-visas", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: user.email }),
        })
            .then((res) => res.json())
            .then((data) => setMyVisa(data))
            .catch((err) => console.log(err));
    }, [user?.email]);

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-extrabold text-primary mb-2">
                    My Added Visas
                </h1>
                <p className="text-base-content/70">
                    Total visas added: <span className="font-semibold">{myVisa.length}</span>
                </p>
            </div>

            {myVisa.length === 0 ? (
                <p className="text-center text-base-content/70">No visas found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {myVisa.map((visa) => (
                        <div
                            key={visa._id}
                            className="card bg-base-100 border border-base-300 shadow hover:shadow-lg transition"
                        >
                            <figure className="h-40 overflow-hidden">
                                <img
                                    src={visa.country_image}
                                    alt={visa.country_name}
                                    className="w-full h-full object-cover"
                                />
                            </figure>

                            <div className="card-body p-5">
                                <h3 className="card-title text-lg leading-tight">
                                    {visa.country_name}
                                </h3>
                                <p className="badge badge-primary badge-outline mb-3">
                                    {visa.visa_type}
                                </p>

                                <ul className="space-y-1 text-sm text-base-content/70">
                                    <li className="flex justify-between">
                                        <span>Processing</span>
                                        <span className="font-medium text-base-content">
                                            {visa.processing_time}
                                        </span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Fee</span>
                                        <span className="font-medium text-base-content">
                                            ${visa.fee}
                                        </span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Validity</span>
                                        <span className="font-medium text-base-content">
                                            {visa.validity}
                                        </span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span>Method</span>
                                        <span className="font-medium text-base-content">
                                            {visa.application_method}
                                        </span>
                                    </li>
                                </ul>

                                <div className="card-actions justify-between mt-5">
                                    <button className="btn btn-sm btn-outline btn-primary">
                                        Update
                                    </button>
                                    <button className="btn btn-sm btn-error text-white">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default MyAddedVisas;
