import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return <div className="h-[90vh] flex items-center justify-center text-teal-900 px-5 md:px-20">
        <div className="w-[100%] md:w-[50%] flex flex-col justify-center items-center">
            <h1 className="font-bold text-8xl text-center">404</h1>
            <h2 className="font-semibold text-3xl text-center">Page Not Found</h2>
            <p className="font-normal text-md text-center">The page you are looking for might have been removed had its name changed or temporarily unavailable.</p>
            <Link to="/" className="bg-teal-900 text-slate-100 px-3 py-2 my-4 rounded-md hover:bg-teal-800">Go to Home</Link>
        </div>
    </div>
}

export default ErrorPage;