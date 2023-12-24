import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";
import { Link } from "react-router-dom";

const Header = () => {
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [userData, setUserData] = useState(null);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        JSON.parse(localStorage.getItem('travelAuthToken')) && setUserData(JSON.parse(localStorage.getItem('travelAuthToken')))
    }, [])

    return <>
        <nav className="w-full h-[10vh] bg-slate-100 text-teal-900 font-medium text-md shadow-md md:px-20">
            <div className="h-full flex justify-between items-center px-6 py-3">
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold mr-4">
                        <span className="text-3xl text-yellow-500">T</span>ravel Trips
                    </h1>

                    <div className={`hidden md:flex ${isMobileMenuOpen ? 'hidden' : ''}`}>
                        <Link to="/" className="px-2" onClick={toggleMobileMenu}>
                            Home
                        </Link>
                        <a href="#booking" className="px-2" onClick={toggleMobileMenu}>
                            Book
                        </a>
                        <a href="#packages" className="px-2" onClick={toggleMobileMenu}>
                            Packages
                        </a>
                        <a href="#services" className="px-2" onClick={toggleMobileMenu}>
                            Services
                        </a>
                        <a href="#gallery" className="px-2" onClick={toggleMobileMenu}>
                            Gallery
                        </a>
                        <a href="#about" className="px-2" onClick={toggleMobileMenu}>
                            About
                        </a>
                    </div>
                </div>
                {!userData && <div className="hidden md:block">
                    <button onClick={() => setIsLoginModalOpen(true)} className="text-teal-900 border-2 border-teal-900 hover:bg-slate-200 px-4 py-2 rounded-md mx-2">Login</button>
                    <button onClick={() => setIsRegisterModalOpen(true)} className="text-slate-100 border-2 border-teal-900 bg-teal-900 hover:bg-teal-800 px-4 py-2 rounded-md">Register</button>
                </div>}  
                {userData && <div className="hidden md:flex items-center gap-3">
                    <div className="text-right">
                        <h1>{userData.fullName}</h1>
                        <button onClick={() => {setUserData(null); localStorage.removeItem("travelAuthToken")}} className="underline text-teal-900 hover:text-teal-800">Log Out</button>
                    </div>
                    <div className="bg-teal-900 text-slate-100 font-bold text-2xl w-10 aspect-square rounded-full flex items-center justify-center">{userData.fullName?.charAt(0).toUpperCase()}</div>
                    </div>}

                <RegisterModal isModalOpen={isRegisterModalOpen} closeModal={() => {setIsRegisterModalOpen(false)}} />
                <LoginModal isModalOpen={isLoginModalOpen} closeModal={() => {setIsLoginModalOpen(false)}} userData={setUserData} />

                <div className="md:hidden">
                    <button className="text-teal-900" onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? (
                            <CgClose className="text-2xl" />
                        ) : (
                            <FiMenu className="text-2xl" />
                        )}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden absolute bg-slate-100 w-full p-3">
                    {/* Mobile Menu */}
                    <div className="flex flex-col space-y-4">
                        <Link to="/" className="py-2" onClick={toggleMobileMenu}>
                            Home
                        </Link>
                        <a href="#booking" className="py-2" onClick={toggleMobileMenu}>
                            Book
                        </a>
                        <a href="#packages" className="py-2" onClick={toggleMobileMenu}>
                            Packages
                        </a>
                        <a href="#services" className="py-2" onClick={toggleMobileMenu}>
                            Services
                        </a>
                        <a href="#gallery" className="py-2" onClick={toggleMobileMenu}>
                            Gallery
                        </a>
                        <a href="#about" className="py-2" onClick={toggleMobileMenu}>
                            About
                        </a>
                    </div>
                    {!userData && <div className="my-2">
                        <button onClick={() => {setIsLoginModalOpen(true); toggleMobileMenu()}} className="border-2 border-teal-900 text-teal-900 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-md">Login</button>
                        <button onClick={() => {setIsRegisterModalOpen(true); toggleMobileMenu()}} className="border-2 border-teal-900 text-slate-100 bg-teal-900 hover:bg-teal-800 px-4 py-2 rounded-md mx-2">Register</button>
                    </div>}
                    {userData && <div className="flex items-center gap-3 my-4">
                    <div className="bg-teal-900 text-slate-100 font-semibold text-2xl w-10 aspect-square rounded-full flex items-center justify-center">{userData.fullName?.charAt(0)}</div>
                    <div className="text-left">
                        <h1>{userData.fullName}</h1>
                        <button onClick={() => {setUserData(null); localStorage.removeItem("travelAuthToken")}} className="underline text-teal-900 hover:text-teal-800">Log Out</button>
                    </div>
                    </div>}
                </div>
            )}

        </nav>
    </>
}

export default Header;