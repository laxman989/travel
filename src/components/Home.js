import React from "react";

const Home = () => {
    return <section id="home" className="home w-full  h-[90vh]">
        <div className="home-content w-full h-[90vh] flex justify-center items-center">
            <div className="content flex flex-col justify-center items-center">
                <h2 className="text-slate-50 text-4xl font-bold text-center">Welcome to Travel Trips</h2>
                <h1 className=" text-slate-50 text-6xl font-bold text-center">Visit <span className="country-name text-yellow-500"></span></h1>
                <p className="w-[90%] md:w-[60%] m-3 text-center text-slate-50">
                    Embark on extraordinary adventures, where each destination becomes a chapter in your story. Explore the world with us and redefine the way you travel.
                </p>
                <a href="#booking" className="px-4 py-2 my-4 bg-teal-900 hover:bg-teal-800 text-slate-100 rounded-md shadow-md">Book Now</a>
            </div>
        </div>
    </section>
}

export default Home;