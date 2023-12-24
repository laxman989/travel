import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const PackageCard = ({ data }) => { 
    return <>
        <div key={data.id} className="rounded-md shadow-md">
            <img className="w-[100%] aspect-video object-cover rounded-md" src={data.image} alt="package-img" />
            <div className="px-2 pb-5">
                <h3 className="text-2xl font-semibold">{data.title}</h3>
                <p className="text-md">{data.subTitle}</p>
                <p className="text-xl font-semibold">${data.price}</p>
                <div className="flex gap-1 my-2 mb-4">
                    <StarRating rating={data.rating} />
                </div>
                <Link to={"/package/"+data.id} className="bg-teal-900 text-base text-slate-100 px-2 py-2 rounded-md hover:bg-teal-800">View Detail</Link>
            </div>
        </div>
    </>
}

const StarRating = ({ rating }) => {
    const starCount = Math.round(rating); // Round the rating to the nearest whole number
    const stars = Array.from({ length: 5 }, (_, index) => (
      <FaStar className={index < starCount ? "text-yellow-500" : "text-slate-500"} key={index} />
    ));
  
    return <>{stars}</>;
};

export default PackageCard;
export { StarRating };