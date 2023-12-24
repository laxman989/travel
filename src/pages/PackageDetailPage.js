import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { packages } from "../data.js";
import ErrorPage from "./ErrorPage.js";
import { StarRating } from "../components/PackageCard.js";

const PackageDetailPage = ({ data }) => {
    const { id } = useParams();
    const [packageData, setPackageData] = useState({});

    useEffect(() => {
        const foundPackage = packages.find(packageItem => packageItem.id === Number(id));

        if (foundPackage) {
            setPackageData(foundPackage);
        }
    }, [id]);

    return <>
        {packageData ? (
            <div className="px-5 md:px-20 block md:flex items-start justify-center text-teal-900">
                <img className="w-full md:w-[50%] p-2 sm:p-10 rounded-md aspect-[3/2] object-cover" src={packageData.image} alt={packageData.title} />
                <div className="w-full md:w-[50%] p-2 sm:p-10">
                    <h1 className="text-2xl font-bold mb-1">{packageData.title}</h1>
                    <p>{packageData.subTitle}</p>
                    <p className="text-4xl font-semibold">${packageData.price}</p>
                    <div className="flex gap-1 my-2">
                        <StarRating rating={packageData.rating} />
                    </div>
                    <p className="text-md mb-8">{packageData.description}</p>
                    <Link to="/#booking" className="bg-teal-900 text-slate-100 px-3 py-2 rounded-md hover:bg-teal-800">Book Now</Link>
                </div>
            </div>
        ) : (
            <ErrorPage />
        )}
    </>
}

export default PackageDetailPage;