import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const AddVisa = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddVisaForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const country_image = form.country_image.value;
        const country_name = form.country_name.value;
        const visa_type = form.visa_type.value;
        const processing_time = form.processing_time.value;
        const age_restriction = form.age_restriction.value;
        const fee = form.fee.value;
        const validity = form.validity.value;
        const description = form.description.value;
        const application_method = form.application_method.value;
        const required_documents = [];
        form.querySelectorAll('input[name="required_documents"]:checked').forEach(box => required_documents.push(box.value));
        const userEmail = user.email;

        const newVisaInfo =
        {
            userEmail,
            country_image,
            country_name,
            visa_type,
            processing_time,
            age_restriction,
            fee,
            validity,
            application_method,
            required_documents,
            description
        }
        fetch('http://localhost:5000/visas', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newVisaInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: `Visa added successfully`,
                    showConfirmButton: false,
                    timer: 2500,
                    timerProgressBar: true,
                    background: "#f8fafc",
                    color: "#0f172a",
                    iconColor: "#3b82f6",
                    width: "340px",
                    customClass: {
                        popup: "rounded-xl shadow-xl border border-gray-200",
                        title: "text-base font-semibold"
                    }
                });
                navigate('/my-added-visas');
            })
    }
    return (
        <section className="min-h-screen bg-linear-to-br from-base-200 via-base-100 to-base-200 flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-3xl bg-base-100 rounded-2xl shadow-xl border border-base-300">
                <div className="px-6 md:px-8 py-6 border-b border-base-300">
                    <h1 className="text-2xl md:text-3xl font-extrabold text-primary tracking-tight">Add Visa</h1>
                    <p className="text-sm text-base-content/70 mt-1">Provide accurate details to publish a new visa entry.</p>
                </div>

                <form onSubmit={handleAddVisaForm} className="px-6 md:px-8 py-8 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label htmlFor="country_image" className="label">
                                <span className="label-text font-medium">Country image URL</span>
                            </label>
                            <input
                                id="country_image"
                                name="country_image"
                                type="url"
                                placeholder="https://i.ibb.co/your-image.jpg"
                                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                                required
                            />
                            <label className="label">
                                <span className="label-text-alt text-base-content/60">Upload to imgbb and paste the link here.</span>
                            </label>
                        </div>

                        <div className="form-control">
                            <label htmlFor="country_name" className="label">
                                <span className="label-text font-medium">Country name</span>
                            </label>
                            <input
                                id="country_name"
                                name="country_name"
                                type="text"
                                placeholder="Japan, Ireland, USA"
                                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label htmlFor="visa_type" className="label">
                                <span className="label-text font-medium">Visa type</span>
                            </label>
                            <select
                                id="visa_type"
                                name="visa_type"
                                className="select select-bordered w-full focus:outline-none"
                                defaultValue=""
                                required
                            >
                                <option value="" disabled>Select a visa type</option>
                                <option>Tourist visa</option>
                                <option>Student visa</option>
                                <option>Official visa</option>
                                <option>Work visa</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label htmlFor="processing_time" className="label">
                                <span className="label-text font-medium">Processing time</span>
                            </label>
                            <input
                                id="processing_time"
                                name="processing_time"
                                type="text"
                                placeholder="5–7 business days"
                                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label htmlFor="age_restriction" className="label">
                                <span className="label-text font-medium">Age restriction</span>
                            </label>
                            <input
                                id="age_restriction"
                                name="age_restriction"
                                type="number"
                                min="0"
                                step="1"
                                placeholder="18"
                                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label htmlFor="fee" className="label">
                                <span className="label-text font-medium">Fee (USD)</span>
                            </label>
                            <input
                                id="fee"
                                name="fee"
                                type="number"
                                min="0"
                                step="1"
                                placeholder="40"
                                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label htmlFor="validity" className="label">
                                <span className="label-text font-medium">Validity</span>
                            </label>
                            <input
                                id="validity"
                                name="validity"
                                type="text"
                                placeholder="90 days from issue"
                                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label htmlFor="application_method" className="label">
                                <span className="label-text font-medium">Application method</span>
                            </label>
                            <select
                                id="application_method"
                                name="application_method"
                                className="select select-bordered w-full focus:outline-none"
                                defaultValue=""
                                required
                            >
                                <option value="" disabled>Select a method</option>
                                <option>Online portal</option>
                                <option>In-person at consulate</option>
                                <option>By email</option>
                                <option>Authorized agency</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-control">
                        <span className="label font-medium">Required documents</span>
                        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" name="required_documents" value="Valid passport" className="checkbox checkbox-sm" />
                                <span className="text-sm">Valid passport</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" name="required_documents" value="Visa application form" className="checkbox checkbox-sm" />
                                <span className="text-sm">Visa application form</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" name="required_documents" value="Recent passport-sized photograph" className="checkbox checkbox-sm" />
                                <span className="text-sm">Recent passport-sized photograph</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" name="required_documents" value="Proof of funds" className="checkbox checkbox-sm" />
                                <span className="text-sm">Proof of funds</span>
                            </label>
                        </div>
                        <label className="label">
                            <span className="label-text-alt text-base-content/60">Select all that apply.</span>
                        </label>
                    </div>

                    <div className="form-control">
                        <label htmlFor="description" className="label">
                            <span className="label-text font-medium">Description</span>
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            rows={4}
                            placeholder="Explain who this visa is for and notable conditions..."
                            className="textarea textarea-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                            required
                        />
                    </div>

                    <div className="pt-2">
                        <button type="submit" className="btn btn-primary btn-wide">Add visa</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddVisa;
