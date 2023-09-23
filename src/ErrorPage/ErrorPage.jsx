import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-5xl font-bold">Opps bul jaygay cole aslam</h2>
            <Link to='/'><button className="bg-gray-200 p-2 text-2xl font-bold rounded mt-4">Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;