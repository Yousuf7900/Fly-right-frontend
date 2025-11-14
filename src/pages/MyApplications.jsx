import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";
const MyApplications = () => {
    const { user } = useContext(AuthContext);
    const [appliedVisas, setAppliedVisas] = useState([]);

    useEffect(() => {
        if (!user?.email) return;

        fetch("https://fly-right-server-side.vercel.app/applied-visa/my-visa", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ email: user.email }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setAppliedVisas(data);
            })
            .catch((err) => console.log(err));
    }, [user?.email]);

    const handleCancelApplication = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://fly-right-server-side.vercel.app/applied-visa/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        const remainingVisas = appliedVisas.filter(visa => visa._id !== id);
                        setAppliedVisas(remainingVisas);
                    })
                Swal.fire({
                    title: "Cancelled!",
                    text: "Your Visa application has been cancelled.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <section className="min-h-screen bg-base-200 px-4 py-10">
            <div className="max-w-7xl mx-auto">
                <header className="mb-8">
                    <h1 className="text-3xl font-extrabold text-primary">
                        My Applications
                    </h1>
                    <p className="text-base-content/70">
                        Total applications: <span className="font-semibold">{appliedVisas.length}</span>
                    </p>
                </header>

                {appliedVisas.length === 0 ? (
                    <p className="text-base-content/70">You haven&apos;t applied for any visas yet.</p>
                ) : (
                    <div className="space-y-5">
                        {
                            appliedVisas.map((application) => (
                                <div
                                    key={application._id}
                                    className="bg-base-100 border border-base-300 rounded-2xl shadow-sm hover:shadow-md transition p-4 sm:p-5 flex flex-col sm:flex-row gap-4"
                                >
                                    <div className="w-full sm:w-40 h-32 sm:h-28 rounded-xl overflow-hidden">
                                        <img
                                            src={application.country_image}
                                            alt={application.country_name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="flex-1 flex flex-col justify-between gap-3">
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                            <div>
                                                <h2 className="text-xl font-bold text-base-content">
                                                    {application.country_name}
                                                </h2>
                                                <p className="badge badge-primary badge-outline mt-1">
                                                    {application.visa_type}
                                                </p>

                                                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-base-content/70">
                                                    <p>
                                                        <span className="font-medium text-base-content">
                                                            Processing:
                                                        </span>{" "}
                                                        {application.processing_time}
                                                    </p>
                                                    <p>
                                                        <span className="font-medium text-base-content">
                                                            Fee:
                                                        </span>{" "}
                                                        ${application.fee}
                                                    </p>
                                                    <p>
                                                        <span className="font-medium text-base-content">
                                                            Validity:
                                                        </span>{" "}
                                                        {application.validity}
                                                    </p>
                                                    <p>
                                                        <span className="font-medium text-base-content">
                                                            Method:
                                                        </span>{" "}
                                                        {application.application_method}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="text-sm text-base-content/70">
                                                <p className="font-semibold text-base-content">
                                                    Applicant
                                                </p>
                                                <p>
                                                    {application.first_name} {application.last_name}
                                                </p>
                                                <p>{application.email}</p>
                                                <p className="mt-1">
                                                    <span className="font-medium text-base-content">
                                                        Applied:
                                                    </span>{" "}
                                                    {application.date}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex justify-end">
                                            <button onClick={() => handleCancelApplication(application._id)} className="btn btn-sm btn-error text-white px-5">
                                                Cancel Application
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default MyApplications;
