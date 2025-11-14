import { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";

const VisaDetails = () => {
    const navigate = useNavigate();
    const visa = useLoaderData();
    const {
        _id,
        country_image,
        country_name,
        visa_type,
        processing_time,
        required_documents = [],
        description,
        age_restriction,
        fee,
        validity,
        application_method,
    } = visa || {};
    const { user } = useContext(AuthContext);

    const handleApplyButton = () => {
        document.getElementById("my_modal_5").showModal();
    };

    const handleApplyVisa = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const first_name = form.first_name.value;
        const last_name = form.last_name.value;
        const date = form.date.value;
        const id = _id;

        const applicationInfo = {
            id,
            country_image,
            country_name,
            visa_type,
            processing_time,
            fee,
            validity,
            application_method,
            date,
            first_name,
            last_name,
            email,
        };

        fetch("http://localhost:5000/applied-visa", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(applicationInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: `Visa applied successfully`,
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
                navigate("/my-applications");
            });
    };

    return (
        <section className="min-h-screen bg-base-200 px-4 py-10">
            <div className="max-w-5xl mx-auto space-y-6">
                <div>
                    <Link
                        to="/visas"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-focus transition-colors"
                    >
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </span>
                        <span>Go back to all visas</span>
                    </Link>
                </div>

                <div className="w-full bg-base-100 rounded-2xl shadow-xl border border-base-300 overflow-hidden">
                    <figure className="relative w-full h-64 sm:h-80">
                        <img
                            src={country_image}
                            alt={country_name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-base-100/70 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2 text-base-100 drop-shadow-md">
                            <h1 className="text-2xl sm:text-3xl font-extrabold">
                                {country_name}
                            </h1>
                            <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                                <span className="badge badge-primary badge-outline">
                                    {visa_type}
                                </span>
                                <span className="badge badge-ghost">
                                    Processing: {processing_time}
                                </span>
                                <span className="badge badge-ghost">
                                    Fee: ${fee}
                                </span>
                                <span className="badge badge-ghost">
                                    Validity: {validity}
                                </span>
                            </div>
                        </div>
                    </figure>

                    <div className="p-6 sm:p-10 space-y-8">

                        <header className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 border-b border-base-300 pb-5">
                            <div className="space-y-1">
                                <p className="text-xs uppercase tracking-wide text-base-content/60">
                                    Visa Type
                                </p>
                                <p className="text-base font-semibold text-base-content">
                                    {visa_type}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs uppercase tracking-wide text-base-content/60">
                                    Processing Time
                                </p>
                                <p className="text-base font-semibold text-base-content">
                                    {processing_time}
                                </p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs uppercase tracking-wide text-base-content/60">
                                    Application Method
                                </p>
                                <p className="text-base font-semibold text-base-content">
                                    {application_method}
                                </p>
                            </div>
                        </header>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div>
                                <h2 className="text-lg font-semibold text-base-content mb-3">
                                    Required Documents
                                </h2>
                                <div className="bg-base-200/70 rounded-xl p-4">
                                    <ul className="list-disc list-inside text-sm text-base-content/80 space-y-1">
                                        {required_documents.length > 0 ? (
                                            required_documents.map((doc, idx) => (
                                                <li key={idx}>{doc}</li>
                                            ))
                                        ) : (
                                            <li>No documents listed.</li>
                                        )}
                                    </ul>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h2 className="text-lg font-semibold text-base-content mb-2">
                                    Visa Details
                                </h2>
                                <div className="bg-base-200/70 rounded-xl p-4 space-y-3 text-sm text-base-content/80">
                                    <p className="flex justify-between gap-4">
                                        <span className="font-medium">
                                            Age restriction:
                                        </span>
                                        <span>
                                            {age_restriction
                                                ? `${age_restriction}+`
                                                : "None"}
                                        </span>
                                    </p>
                                    <p className="flex justify-between gap-4">
                                        <span className="font-medium">
                                            Application method:
                                        </span>
                                        <span>{application_method}</span>
                                    </p>
                                    <p className="flex justify-between gap-4">
                                        <span className="font-medium">Fee:</span>
                                        <span>${fee}</span>
                                    </p>
                                    <p className="flex justify-between gap-4">
                                        <span className="font-medium">
                                            Validity:
                                        </span>
                                        <span>{validity}</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-lg font-semibold text-base-content">
                                Description
                            </h2>
                            <p className="text-sm text-base-content/80 leading-relaxed bg-base-200/60 rounded-xl p-4">
                                {description}
                            </p>
                        </div>

                        <dialog
                            id="my_modal_5"
                            className="modal modal-bottom sm:modal-middle"
                        >
                            <div className="modal-box rounded-2xl border border-base-300 shadow-xl">
                                <h3 className="text-2xl font-bold text-primary mb-4">
                                    Apply for Visa
                                </h3>

                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3">
                                        ✕
                                    </button>
                                </form>

                                <form
                                    onSubmit={handleApplyVisa}
                                    method="dialog"
                                    className="space-y-4 mt-2"
                                >
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-medium">
                                                Email
                                            </span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={user?.email}
                                            readOnly
                                            className="input input-bordered bg-base-200 cursor-not-allowed"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-medium">
                                                    First Name
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                name="first_name"
                                                placeholder="Enter first name"
                                                className="input input-bordered"
                                                required
                                            />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-medium">
                                                    Last Name
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                name="last_name"
                                                placeholder="Enter last name"
                                                className="input input-bordered"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-medium">
                                                    Applied Date
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                name="date"
                                                value={new Date().toLocaleDateString()}
                                                readOnly
                                                className="input input-bordered bg-base-200 cursor-not-allowed"
                                            />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-medium">
                                                    Fee
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                name="fee"
                                                value={`$${visa?.fee || 0}`}
                                                readOnly
                                                className="input input-bordered bg-base-200 cursor-not-allowed"
                                            />
                                        </div>
                                    </div>

                                    <div className="modal-action mt-6">
                                        <button className="btn btn-primary w-full font-semibold tracking-wide">
                                            Apply
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </dialog>
                        <div className="pt-2 text-center border-t border-base-300 mt-2">
                            <button
                                onClick={handleApplyButton}
                                className="btn btn-primary btn-wide text-base font-semibold mt-4"
                            >
                                Apply for the Visa
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisaDetails;
