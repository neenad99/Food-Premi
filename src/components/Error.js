import { Link, useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <h1 className="text-6xl font-bold text-red-600 mb-4">Ooops!...</h1>
            <h2 className="text-2xl text-gray-800 mb-2">Something Went Wrong!!</h2>
            <h3 className="text-lg text-gray-600">
                {err.status} : {err.statusText}
            </h3>
            <Link to="/">
                <button className="mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                    Go to Home Page
                </button>
            </Link>
        </div>
    );
};

export default Error;