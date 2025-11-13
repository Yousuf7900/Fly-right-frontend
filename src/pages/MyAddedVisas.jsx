import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router";

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

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/visas/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        const remainingVisas = myVisa.filter(
                            (visa) => visa._id !== id
                        );
                        setMyVisa(remainingVisas);

                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Visa has been deleted.",
                            icon: "success",
                        });
                    })
                    .catch((err) => {
                        console.error(err);
                        Swal.fire({
                            title: "Error",
                            text: "Something went wrong while deleting.",
                            icon: "error",
                        });
                    });
            }
        });
    };


    const handleUpdate = (id) => {
        const modal = document.getElementById(`my_modal_${id}`);
        if (modal) {
            modal.showModal();
        }
    };


    const handleUpdateForm = (e, id) => {
        e.preventDefault();
        const form = e.target;

        const updatedVisa = {
            country_image: form.country_image.value,
            country_name: form.country_name.value,
            visa_type: form.visa_type.value,
            processing_time: form.processing_time.value,
            age_restriction: Number(form.age_restriction.value),
            fee: Number(form.fee.value),
            validity: form.validity.value,
            application_method: form.application_method.value,
            description: form.description.value,
            required_documents: Array.from(
                form.querySelectorAll(
                    'input[name="required_documents"]:checked'
                )
            ).map((input) => input.value),
        };

        fetch(`http://localhost:5000/visas/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedVisa),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMyVisa((prev) =>
                    prev.map((visa) =>
                        visa._id === id ? { ...visa, ...updatedVisa } : visa
                    )
                );

                const modal = document.getElementById(`my_modal_${id}`);
                if (modal) {
                    modal.close();
                }

                Swal.fire({
                    title: "Updated!",
                    text: "Visa updated successfully.",
                    icon: "success",
                });
            })
            .catch((err) => {
                console.error(err);
                Swal.fire({
                    title: "Error",
                    text: "Something went wrong while updating.",
                    icon: "error",
                });
            });
    };

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-10">
                <h1 className="text-3xl font-extrabold text-primary mb-2">
                    My Added Visas
                </h1>
                <p className="text-base-content/70">
                    Total visas added:{" "}
                    <span className="font-semibold">{myVisa.length}</span>
                </p>
            </div>

            {myVisa.length === 0 ? (
                <p className="text-center text-base-content/70">
                    No visas found.
                </p>
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
                                        <span>Processing time</span>
                                        <span className="font-medium text-base-content">
                                            {visa.processing_time} days
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

                                <div className="card-actions justify-between mt-5">
                                    <dialog
                                        id={`my_modal_${visa._id}`}
                                        className="modal modal-bottom sm:modal-middle"
                                    >
                                        <div className="modal-box rounded-2xl border border-base-300 shadow-xl relative">

                                            <form method="dialog">
                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4">
                                                    ✕
                                                </button>
                                            </form>

                                            <h3 className="text-2xl font-bold text-primary mb-6">
                                                Update Visa
                                            </h3>

                                            <form
                                                onSubmit={(e) =>
                                                    handleUpdateForm(e, visa._id)
                                                }
                                                className="space-y-8"
                                            >
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div className="form-control">
                                                        <label
                                                            htmlFor="country_image"
                                                            className="label"
                                                        >
                                                            <span className="label-text font-medium">
                                                                Country image
                                                                URL
                                                            </span>
                                                        </label>
                                                        <input
                                                            id="country_image"
                                                            name="country_image"
                                                            type="url"
                                                            placeholder="https://i.ibb.co/your-image.jpg"
                                                            defaultValue={
                                                                visa.country_image
                                                            }
                                                            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                                                            required
                                                        />
                                                        <label className="label">
                                                            <span className="label-text-alt text-base-content/60">
                                                                Upload to imgbb
                                                                and paste the
                                                                link here.
                                                            </span>
                                                        </label>
                                                    </div>

                                                    <div className="form-control">
                                                        <label
                                                            htmlFor="country_name"
                                                            className="label"
                                                        >
                                                            <span className="label-text font-medium">
                                                                Country name
                                                            </span>
                                                        </label>
                                                        <input
                                                            id="country_name"
                                                            name="country_name"
                                                            type="text"
                                                            placeholder="Japan, Ireland, USA"
                                                            defaultValue={
                                                                visa.country_name
                                                            }
                                                            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                                                            required
                                                        />
                                                    </div>

                                                    <div className="form-control">
                                                        <label
                                                            htmlFor="visa_type"
                                                            className="label"
                                                        >
                                                            <span className="label-text font-medium">
                                                                Visa type
                                                            </span>
                                                        </label>
                                                        <select
                                                            id="visa_type"
                                                            name="visa_type"
                                                            className="select select-bordered w-full focus:outline-none"
                                                            defaultValue={
                                                                visa.visa_type ||
                                                                ""
                                                            }
                                                            required
                                                        >
                                                            <option
                                                                value=""
                                                                disabled
                                                            >
                                                                Select a visa
                                                                type
                                                            </option>
                                                            <option value="Tourist visa">
                                                                Tourist visa
                                                            </option>
                                                            <option value="Student visa">
                                                                Student visa
                                                            </option>
                                                            <option value="Official visa">
                                                                Official visa
                                                            </option>
                                                            <option value="Work visa">
                                                                Work visa
                                                            </option>
                                                        </select>
                                                    </div>

                                                    <div className="form-control">
                                                        <label
                                                            htmlFor="processing_time"
                                                            className="label"
                                                        >
                                                            <span className="label-text font-medium">
                                                                Processing time
                                                            </span>
                                                        </label>
                                                        <input
                                                            id="processing_time"
                                                            name="processing_time"
                                                            type="text"
                                                            placeholder="5–7 business days"
                                                            defaultValue={
                                                                visa.processing_time
                                                            }
                                                            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                                                            required
                                                        />
                                                    </div>

                                                    <div className="form-control">
                                                        <label
                                                            htmlFor="age_restriction"
                                                            className="label"
                                                        >
                                                            <span className="label-text font-medium">
                                                                Age restriction
                                                            </span>
                                                        </label>
                                                        <input
                                                            id="age_restriction"
                                                            name="age_restriction"
                                                            type="number"
                                                            placeholder="18"
                                                            defaultValue={
                                                                visa.age_restriction
                                                            }
                                                            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                                                            required
                                                        />
                                                    </div>

                                                    <div className="form-control">
                                                        <label
                                                            htmlFor="fee"
                                                            className="label"
                                                        >
                                                            <span className="label-text font-medium">
                                                                Fee (USD)
                                                            </span>
                                                        </label>
                                                        <input
                                                            id="fee"
                                                            name="fee"
                                                            type="number"
                                                            placeholder="40"
                                                            defaultValue={
                                                                visa.fee
                                                            }
                                                            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                                                            required
                                                        />
                                                    </div>

                                                    <div className="form-control">
                                                        <label
                                                            htmlFor="validity"
                                                            className="label"
                                                        >
                                                            <span className="label-text font-medium">
                                                                Validity
                                                            </span>
                                                        </label>
                                                        <input
                                                            id="validity"
                                                            name="validity"
                                                            type="text"
                                                            placeholder="90 days from issue"
                                                            defaultValue={
                                                                visa.validity
                                                            }
                                                            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                                                            required
                                                        />
                                                    </div>

                                                    <div className="form-control">
                                                        <label
                                                            htmlFor="application_method"
                                                            className="label"
                                                        >
                                                            <span className="label-text font-medium">
                                                                Application
                                                                method
                                                            </span>
                                                        </label>
                                                        <select
                                                            id="application_method"
                                                            name="application_method"
                                                            className="select select-bordered w-full focus:outline-none"
                                                            defaultValue={
                                                                visa.application_method ||
                                                                ""
                                                            }
                                                            required
                                                        >
                                                            <option
                                                                value=""
                                                                disabled
                                                            >
                                                                Select a method
                                                            </option>
                                                            <option value="Online portal">
                                                                Online portal
                                                            </option>
                                                            <option value="In-person at consulate">
                                                                In-person at
                                                                consulate
                                                            </option>
                                                            <option value="By email">
                                                                By email
                                                            </option>
                                                            <option value="Authorized agency">
                                                                Authorized
                                                                agency
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="form-control">
                                                    <span className="label font-medium">
                                                        Required documents
                                                    </span>
                                                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                        <label className="flex items-center gap-2">
                                                            <input
                                                                type="checkbox"
                                                                name="required_documents"
                                                                value="Valid passport"
                                                                className="checkbox checkbox-sm"
                                                                defaultChecked={
                                                                    Array.isArray(
                                                                        visa.required_documents
                                                                    ) &&
                                                                    visa.required_documents.includes(
                                                                        "Valid passport"
                                                                    )
                                                                }
                                                            />
                                                            <span className="text-sm">
                                                                Valid passport
                                                            </span>
                                                        </label>

                                                        <label className="flex items-center gap-2">
                                                            <input
                                                                type="checkbox"
                                                                name="required_documents"
                                                                value="Visa application form"
                                                                className="checkbox checkbox-sm"
                                                                defaultChecked={
                                                                    Array.isArray(
                                                                        visa.required_documents
                                                                    ) &&
                                                                    visa.required_documents.includes(
                                                                        "Visa application form"
                                                                    )
                                                                }
                                                            />
                                                            <span className="text-sm">
                                                                Visa
                                                                application form
                                                            </span>
                                                        </label>

                                                        <label className="flex items-center gap-2">
                                                            <input
                                                                type="checkbox"
                                                                name="required_documents"
                                                                value="Recent passport-sized photograph"
                                                                className="checkbox checkbox-sm"
                                                                defaultChecked={
                                                                    Array.isArray(
                                                                        visa.required_documents
                                                                    ) &&
                                                                    visa.required_documents.includes(
                                                                        "Recent passport-sized photograph"
                                                                    )
                                                                }
                                                            />
                                                            <span className="text-sm">
                                                                Recent
                                                                passport-sized
                                                                photograph
                                                            </span>
                                                        </label>

                                                        <label className="flex items-center gap-2">
                                                            <input
                                                                type="checkbox"
                                                                name="required_documents"
                                                                value="Proof of funds"
                                                                className="checkbox checkbox-sm"
                                                                defaultChecked={
                                                                    Array.isArray(
                                                                        visa.required_documents
                                                                    ) &&
                                                                    visa.required_documents.includes(
                                                                        "Proof of funds"
                                                                    )
                                                                }
                                                            />
                                                            <span className="text-sm">
                                                                Proof of funds
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <label className="label">
                                                        <span className="label-text-alt text-base-content/60">
                                                            Select all that
                                                            apply.
                                                        </span>
                                                    </label>
                                                </div>

                                                <div className="form-control">
                                                    <label
                                                        htmlFor="description"
                                                        className="label"
                                                    >
                                                        <span className="label-text font-medium">
                                                            Description
                                                        </span>
                                                    </label>
                                                    <textarea
                                                        id="description"
                                                        name="description"
                                                        rows={4}
                                                        placeholder="Explain who this visa is for and notable conditions..."
                                                        defaultValue={
                                                            visa.description
                                                        }
                                                        className="textarea textarea-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                                                        required
                                                    />
                                                </div>

                                                <div className="pt-2 flex justify-center">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary px-8"
                                                    >
                                                        Update visa
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </dialog>

                                    <button
                                        onClick={() => handleUpdate(visa._id)}
                                        className="btn btn-sm btn-outline btn-primary"
                                    >
                                        Update
                                    </button>

                                    <button
                                        onClick={() => handleDelete(visa._id)}
                                        className="btn btn-sm btn-error text-white"
                                    >
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
