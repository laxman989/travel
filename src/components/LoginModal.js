import React, { useState } from "react";
import { CgClose } from "react-icons/cg";

const LoginModal = ({ isModalOpen, closeModal, userData}) => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(!email) {
            setEmailError('Error: Email is required.');
        } 
        if(!emailRegex.test(email)) {
            setEmailError('Error: Please enter valid email.')
        }
        if(!password) {
            setPasswordError('Error: Password is required.');
        } 

        if(email && password) {
            const data = JSON.parse(localStorage.getItem("travelAuthToken"));
            if(data?.email === email && data?.password === password) {
                closeModal();
                setEmail('');
                setPassword('');
                alert("User logged in successfully.");
                localStorage.getItem("travelAuthToken") ? userData(JSON.parse(localStorage.getItem("travelAuthToken"))) : userData(null);
            }
            else {
                alert("Invalid email or password.")
            }
        }
    }
      

    if (!isModalOpen) return null
    return <div className="fixed left-0 top-0 w-screen h-screen bg-slate-900 bg-opacity-50 flex items-center justify-center">
        <div className="w-[90%] md:w-[50%] bg-slate-50 text-slate-900 rounded-md p-4">
            
            <div className="flex items-center justify-between">
                <h2 className="font-bold text-2xl">Login</h2>
                <CgClose onClick={closeModal} className="text-2xl cursor-pointer" />
            </div>

            <div className="container mx-auto mt-8">
                <form onSubmit={handleSubmit} className="">

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600">Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            autoFocus
                            value={email}
                            onChange={(e) => {setEmail(e.target.value); setEmailError('')}}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-slate-900"
                        />
                        <span className="text-red-500">{emailError}</span>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => {setPassword(e.target.value); setPasswordError('')}}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-slate-900"
                        />
                        <span className="text-red-500">{passwordError}</span>
                    </div>

                    <button type="submit" className="px-4 py-2 bg-slate-900 text-white rounded-md hover:bg-indigo-900">
                        Login
                    </button>
                </form>
            </div>
        </div>
    </div>
}

export default LoginModal;