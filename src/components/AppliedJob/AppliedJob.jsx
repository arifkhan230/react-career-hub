import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";

const AppliedJob = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job
    return (
        <div>
            <div className="card card-side bg-base-100 shadow p-7 ">
                <figure className="bg-amber-50 w-[240px] h-[240px] " ><img className="px-12 py-20" src={logo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <button className="mr-4 px-5 py-2 border border-[#7E90FE] text-lg font-extrabold text-[#7E90FE] rounded"> {remote_or_onsite}</button>
                        <button className="px-5 py-2 border border-[#7E90FE] text-lg font-extrabold text-[#7E90FE] rounded">{job_type}</button>
                    </div>
                    <div className="flex gap-6">
                        <h2
                            className="flex gap-2 text-[#757575] items-center font-semibold"><MdOutlineLocationOn className="text-2xl"></MdOutlineLocationOn>{location}
                        </h2>
                        <h2
                            className="flex gap-2 text-[#757575] items-center font-semibold"><AiOutlineDollar className="text-2xl"></AiOutlineDollar> {salary}
                        </h2>
                    </div>
                    
                </div>
                <div className="card-actions justify-end items-center ">
                        <button className="btn btn-primary">View Details</button>
                    </div>
            </div>
        </div>
    );
};

export default AppliedJob;