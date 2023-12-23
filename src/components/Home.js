import React from "react";

const Home = () => {
    return <section id="home" className="home w-full  h-[90vh]">
        <div className="home-content w-full h-[90vh] flex justify-center items-center">
            <div className="content flex flex-col justify-center items-center">
                <h2 className="text-slate-50 text-4xl font-bold text-center">Welcome to World</h2>
                <h1 className=" text-slate-50 text-6xl font-bold text-center">Visit <span class="country-name text-yellow-500"></span></h1>
                <p className="w-[90%] md:w-[60%] m-3 text-center text-slate-50">
                    Embark on extraordinary adventures, where each destination becomes a chapter in your story. Explore the world with us and redefine the way you travel.
                </p>
                <button class="px-4 py-2 my-4 bg-yellow-500 text-slate-900 rounded-md">Book Now</button>
            </div>
        </div>
    </section>
}

export default Home;