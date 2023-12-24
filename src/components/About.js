import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return <>
        <section id="about" className="py-10 px-5 md:px-20 bg-slate-0 text-teal-900">
            <h1 className="text-3xl text-center font-bold uppercase pb-5">About</h1>
            <div className="block md:flex items-center justify-center">
                <img className="w-full md:w-[50%] p-2 sm:p-10" src="https://img.freepik.com/free-vector/gradient-world-tourism-day-illustration_52683-129641.jpg?w=1060&t=st=1700992467~exp=1700993067~hmac=729e12f8c3ee2667acd3ba5ff83b8220e03eb8ab6c8d5b790772e32623ab5159" alt="about-img" />
                <div className="w-full md:w-[50%]">
                    <p className="my-4">Welcome to Travel Trips, your gateway to unforgettable travel experiences and seamless hotel bookings. We understand that every journey is a story waiting to be told, and we are here to make yours extraordinary. Whether you're a seasoned traveler or embarking on your first adventure, Travel Trips is your trusted companion in crafting the perfect getaway.</p>

                    <p className="my-4">At Travel Trips, excellence is not just a goal; it's a standard. We continuously strive to exceed your expectations by staying ahead of industry trends, partnering with reputable establishments, and leveraging technology to enhance your booking experience.</p>

                    <Link to="/about" className="bg-teal-900 text-slate-50 px-3 py-2 rounded-md hover:bg-teal-800">View more</Link>
                </div>
            </div>
        </section>
    </>
}

export default About;