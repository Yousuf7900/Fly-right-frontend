import { useLoaderData } from "react-router-dom";

const VisaDetails = () => {
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

                    <div className="pt-6 text-center">
                        <button className="btn btn-primary btn-wide text-lg font-semibold">
                            Apply for the Visa
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisaDetails;
