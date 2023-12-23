import React from "react";
import { CgClose } from "react-icons/cg";

const ConfirmationModal = ({ isModalOpen, closeModal, data }) => {

    if (!isModalOpen) return null
    return <div className="fixed left-0 top-0 w-screen h-screen bg-slate-900 bg-opacity-50 flex items-center justify-center">
        <div className="w-[90%] md:w-[50%] bg-slate-50 text-slate-900 rounded-md p-4">
            
            <div className="flex items-center justify-between">
                <h2 className="font-bold text-2xl">Confirmation</h2>
                <CgClose onClick={closeModal} className="text-2xl cursor-pointer" />
            </div>

            <div className="container mx-auto mt-4">
                <p className="">Thank you for your booking! Your package for India has been confirmed. Here are the details:</p>
                <div className="mt-2">
                    <p className="my-1 font-semibold">Name : <span className="font-normal">{data?.fullName}</span></p>
                    <p className="my-1 font-semibold">Phone : <span className="font-normal">{data?.phoneNumber}</span></p>
                    <p className="my-1 font-semibold">Place : <span className="font-normal">{data.place}</span></p>
                    <p className="my-1 font-semibold">Persons : <span className="font-normal">{data.persons}</span></p>
                    <p className="my-1 font-semibold">Start Date : <span className="font-normal">{data.startDate}</span></p>
                    <p className="my-1 font-semibold">End Date : <span className="font-normal">{data.endDate}</span></p>
                    <p className="my-1 font-semibold">Description : <p className="font-normal">{data.description}</p></p>
                </div>
                <p className="text-orange-700 mt-4">We are always happy to help you. For queries contact us on 1008-342-232 / 1008-454-464</p>
            </div>
        </div>
    </div>
}

export default ConfirmationModal;