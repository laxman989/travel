import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return <>
    <div className="bg-teal-950 text-slate-50 flex flex-col items-center justify-center px-5 py-10">
      <h1 className="text-2xl font-bold">
        <span className="text-3xl text-yellow-500">T</span>ravel Trips
      </h1>
      <p className="text-center">Curated Travel Experiences for the Modern Explorer.</p>
      <div className="flex justify-center items-center py-3">
        <FaInstagram className="text-xl text-slate-300 m-2 cursor-pointer hover:scale-110 hover:text-slate-50 transition-all" />
        <FaFacebook className="text-xl text-slate-300 m-2 cursor-pointer hover:scale-110 hover:text-slate-50 transition-all" />
        <FaWhatsapp className="text-xl text-slate-300 m-2 cursor-pointer hover:scale-110 hover:text-slate-50 transition-all" />
        <FaTwitter className="text-xl text-slate-300 m-2 cursor-pointer hover:scale-110 hover:text-slate-50 transition-all" />
      </div>
      <p className="text-gray-400 text-center">Copyright &copy; 2023 Travel - All rights reserved.</p>
    </div>
    </>
}

export default Footer;