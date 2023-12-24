import React, { useState } from "react";
import { CgClose } from "react-icons/cg";

const RegisterModal = ({ isModalOpen, closeModal}) => {
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        dob: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [formError, setFormError] = useState({
        fullName: "",
        phoneNumber: "",
        dob: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const currentDate = new Date().toISOString().split('T')[0];
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const newError = {};

        if(!formData.fullName) {
            newError.fullName = "Error: Full Name is required."
        } 
        if(!formData.phoneNumber) {
            newError.phoneNumber = "Error: Phone Number is required."  
        } 
        if(!formData.dob) {
            newError.dob = "Error: Date of Birth is required."  
        } 
        if(formData.dob > currentDate) {
            newError.dob = "Error: Date of Birth cannot be in the future."  
        } 
        if(!formData.email) {
            newError.email = "Error: Email is required."
        } 
        if(!emailRegex.test(formData.email)) {
            newError.email = "Error: Please enter valid email."
        }
        if(!formData.password) {
            newError.password = "Error: Password is required."
        } 
        if(!formData.confirmPassword) {
            newError.confirmPassword = "Error: Confirm Password is required."
        } 
        if(formData.password !== formData.confirmPassword) {
            newError.confirmPassword = "Error: Password and Confirm Password must be same."
        } 
        
        setFormError(newError);
        
        if(Object.keys(newError).length === 0) {
            closeModal();
            localStorage.setItem("travelAuthToken", JSON.stringify(formData));
            setFormData({
                fullName: "",
                phoneNumber: "",
                dob: "",
                email: "",
                password: "",
                confirmPassword: ""
            });
            alert("User registered successfully! Login to continue..");
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));

        setFormError((prevError) => ({
          ...prevError,
          [name]: "",
        }));
      };

    if (!isModalOpen) return null
    return <div className="fixed left-0 top-0 w-screen h-screen bg-slate-900 bg-opacity-50 flex items-center justify-center">
        <div className="w-[90%] md:w-[50%] bg-slate-100 text-teal-900 rounded-md p-4">
            
            <div className="flex items-center justify-between">
                <h2 className="font-bold text-2xl">Register</h2>
                <CgClose onClick={closeModal} className="text-2xl cursor-pointer" />
            </div>

            <div className="container mx-auto mt-8">
                <form onSubmit={handleSubmit} className="">

                    <div className="mb-4">
                        <label htmlFor="fullName" className="block text-gray-600">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            autoFocus
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-slate-900"
                        />
                        <span className="text-red-500 text-sm">{formError.fullName}</span>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block text-gray-600">Phone Number</label>
                        <input
                            type="number"
                            id="phoneNumber"
                            name="phoneNumber"
                            maxLength={10}
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-slate-900"
                        />
                        <span className="text-red-500 text-sm">{formError.phoneNumber}</span>
                    </div>

                    <div className="mb-4">
                            <label htmlFor="dob" className="block text-gray-600">Date of Birth</label>
                            <input
                                type="date"
                                id="dob"
                                name="dob"
                                value={formData.dob}
                                onChange={handleChange}
                                placeholder="DD/MM/YYYY"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-slate-900"
                            />
                            <span className="text-red-500 text-sm">{formError.dob}</span>
                        </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-slate-900"
                        />
                        <span className="text-red-500 text-sm">{formError.email}</span>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-slate-900"
                        />
                        <span className="text-red-500 text-sm">{formError.password}</span>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-gray-600">Confirm Password</label>
                        <input
                            type="confirmPassword"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-slate-900"
                        />
                        <span className="text-red-500 text-sm">{formError.confirmPassword}</span>
                    </div>

                    <button type="submit" className="px-4 py-2 bg-teal-900 text-slate-100 rounded-md hover:bg-teal-800">
                        Register
                    </button>
                </form>
            </div>
        </div>
    </div>
}

export default RegisterModal;