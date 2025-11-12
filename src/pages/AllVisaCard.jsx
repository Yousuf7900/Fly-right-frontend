
import { Link } from "react-router-dom";

const AllVisaCard = ({ visa }) => {
    const {
        _id,
        country_image,
        country_name,
        visa_type,
        processing_time,
        fee,
        validity,
        application_method,
    } = visa || {};

    return (
        <article className="card bg-base-100 shadow hover:shadow-lg transition border border-base-300">
            <figure className="h-40 overflow-hidden">
                <img
                    src={country_image}
                    alt={country_name}
                    className="w-full h-full object-cover"
                />
            </figure>
            <div className="card-body p-5">
                <h3 className="card-title text-lg leading-tight">
                    {country_name}
                    <span className="badge badge-primary badge-outline">{visa_type}</span>
                </h3>

                <ul className="mt-2 space-y-1 text-sm text-base-content/70">
                    <li className="flex justify-between">
                        <span>Processing</span>
                        <span className="font-medium text-base-content">{processing_time} days</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Fee</span>
                        <span className="font-medium text-base-content">${fee}</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Validity</span>
                        <span className="font-medium text-base-content">{validity} days</span>
                    </li>
                    <li className="flex justify-between">
                        <span>Application-Method</span>
                        <span className="font-medium text-base-content">{application_method}</span>
                    </li>
                </ul>

                <div className="card-actions justify-end mt-4">
                    <Link to={`/visa/${_id}`} className="btn btn-primary btn-sm">
                        See details
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default AllVisaCard;
