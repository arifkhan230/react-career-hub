import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStarage";

const JobDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    const { job_description, job_responsibility, educational_requirements, experiences } = job
    // console.log(job, id)

    const handleApplyJob =()=>{
        saveJobApplication(idInt)
        toast('You have applied successfully')
    }

    return (
        <div>
            <h2>Job Details</h2>
            <div className="grid md:grid-cols-4 gap-4  h-[50vh] my-40">
                <div className="border md:col-span-3 p-4 rounded space-y-4">
                    <p
                        className="text-xl font-bold">Job Description: <span className="text-lg font-semibold text-[#757575]">{job_description}</span>
                    </p>

                    <p
                        className="text-xl font-bold">Job Responsibility:  <span className="text-lg font-semibold text-[#757575]">{job_responsibility}</span>
                    </p>
                    <h2
                        className="text-xl font-bold">Educational Requirements:
                    </h2>
                    <p>
                        {educational_requirements}
                    </p>
                    <h2 className="texT-xl font-bold">
                        Experiences:
                    </h2>
                    <p>
                        {experiences}
                    </p>
                </div>
                <div className="border rounded md:col-span-1 p-4 ">
                    <div>
                        <h2 className="text-xl font-bold bg-[#6273FF0D]">Job Details</h2>
                    </div >
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply now </button>
                    <ToastContainer/>

                </div>

            </div>
        </div>
    );
};

export default JobDetails;