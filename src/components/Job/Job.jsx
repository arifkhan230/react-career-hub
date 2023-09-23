import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    // console.log(job)
    const { id,logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job
    return (
        <div className="card card-compact bg-base-100 shadow">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name} </p>
                <div>
                    <button className="mr-4 px-5 py-2 border border-[#7E90FE] text-lg font-extrabold text-[#7E90FE] rounded"> {remote_or_onsite}</button>
                    <button className="px-5 py-2 border border-[#7E90FE] text-lg font-extrabold text-[#7E90FE] rounded">{job_type}</button>
                </div>
                <div className="flex mt-4 gap-6">
                    <h2
                        className="flex gap-2 text-[#757575] items-center font-semibold"><MdOutlineLocationOn className="text-2xl"></MdOutlineLocationOn>{location}
                    </h2>
                    <h2
                        className="flex gap-2 text-[#757575] items-center font-semibold"><AiOutlineDollar className="text-2xl"></AiOutlineDollar> {salary}
                    </h2>
                </div>
                <div className="card-actions">
                    <Link to= {`/job/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;