import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const VisaDetails = () => {
    const navigate = useNavigate();
    const visa = useLoaderData();
    const {
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
        document.getElementById('my_modal_5').showModal();
    };

    const handleApplyVisa = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const first_name = form.first_name.value;
        const last_name = form.last_name.value;
        const date = form.date.value;
        const fee = form.fee.value;
        const applicationInfo = { email, first_name, last_name, date, fee };

        fetch('http://localhost:5000/applied-visa', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(applicationInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate('/my-applications');
            })
    }

    return (
        <section className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-4xl bg-base-100 rounded-2xl shadow-xl border border-base-300 overflow-hidden">
                <figure className="w-full h-64 sm:h-80 overflow-hidden">
                    <img
                        src={country_image}
                        alt={country_name}
                        className="w-full h-full object-cover"
                    />
                </figure>

                <div className="p-6 sm:p-10 space-y-6">
                    <header className="border-b border-base-300 pb-4">
                        <h1 className="text-3xl font-extrabold text-primary mb-2">
                            {country_name}
                        </h1>
                        <div className="flex flex-wrap gap-3 text-sm text-base-content/70">
                            <span className="badge badge-primary badge-outline">
                                {visa_type}
                            </span>
                            <span>Processing time: {processing_time}</span>
                            <span>Fee: ${fee}</span>
                            <span>Validity: {validity}</span>
                        </div>
                    </header>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <h2 className="text-lg font-semibold text-base-content/90 mb-2">
                                Required Documents
                            </h2>
                            <ul className="list-disc list-inside text-sm text-base-content/70 space-y-1">
                                {required_documents.length > 0 ? (
                                    required_documents.map((doc, idx) => <li key={idx}>{doc}</li>)
                                ) : (
                                    <li>No documents listed.</li>
                                )}
                            </ul>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-lg font-semibold text-base-content/90 mb-1">
                                Visa Details
                            </h2>
                            <div className="text-sm text-base-content/70 space-y-2">
                                <p>
                                    <span className="font-medium text-base-content">Age restriction:</span>{" "}
                                    {age_restriction ? `${age_restriction}+` : "None"}
                                </p>
                                <p>
                                    <span className="font-medium text-base-content">Application method:</span>{" "}
                                    {application_method}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold text-base-content/90 mb-2">
                            Description
                        </h2>
                        <p className="text-sm text-base-content/70 leading-relaxed">
                            {description}
                        </p>
                    </div>


                    {/* modal data */}
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box rounded-xl border border-base-300 shadow-lg">
                            <h3 className="text-2xl font-bold text-primary mb-4">Apply for Visa</h3>

                            <form onSubmit={handleApplyVisa} method="dialog" className="space-y-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={user?.email}
                                        readOnly
                                        className="input input-bordered bg-base-200 cursor-not-allowed"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium">First Name</span>
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
                                        <span className="label-text font-medium">Last Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="last_name"
                                        placeholder="Enter last name"
                                        className="input input-bordered"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-medium">Applied Date</span>
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
                                        <span className="label-text font-medium">Fee</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="fee"
                                        value={`$${visa?.fee || 0}`}
                                        readOnly
                                        className="input input-bordered bg-base-200 cursor-not-allowed"
                                    />
                                </div>
                                <div className="modal-action">
                                    <button className="btn btn-primary w-full font-semibold tracking-wide">
                                        Apply
                                    </button>
                                </div>
                            </form>
                        </div>
                    </dialog>


                    <div className="pt-6 text-center">
                        <button onClick={handleApplyButton} className="btn btn-primary btn-wide text-lg font-semibold">
                            Apply for the Visa
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisaDetails;
