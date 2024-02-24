// import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";
import { FaXmark } from "react-icons/fa6";

const MenuTab = ({ togglebtn, displayName }) => {
    return (
        <div className={`w-full bg-green-900 h-screen text-white flex flex-col items-center  fixed top-0 left-0 ${togglebtn ? "z-50" : "-z-10"}`}>
            <div className="flex w-full h-20 px-10 items-center  justify-end">
                <FaXmark size={30} id="CancelBtn" onClick={(e) => {
                    e.preventDefault();
                    displayName(false)
                }} />
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-5">
                <div><a className="text-4xl uppercase hover:text-amber-600" href="#Header" onClick={(e) => {
                    e.preventDefault();
                    displayName(false)
                }}>Home</a></div>
                <div><a className="text-4xl uppercase hover:text-amber-600" href="#AboutUs" onClick={(e) => {
                    e.preventDefault();
                    displayName(false)
                }}>about us</a></div>
                <div><a className="text-4xl uppercase hover:text-amber-600" href="#Services" onClick={(e) => {
                    e.preventDefault();
                    displayName(false)
                }}>Services</a></div>
                <div><a className="text-4xl uppercase hover:text-amber-600" href="#Experience" onClick={(e) => {
                    e.preventDefault();
                    displayName(false)
                }}>Experience</a></div>
                <div><a className="text-4xl uppercase hover:text-amber-600" href="#Venue" onClick={(e) => {
                    e.preventDefault();
                    displayName(false)
                }}>Venue</a></div>
                <div><a className="text-4xl uppercase hover:text-amber-600" href="#Footer" onClick={(e) => {
                    e.preventDefault();
                    displayName(false)
                }}>Contact Us</a></div>
                <div><button className="flex items-center gap-5 mb-5 bg-amber-700 p-3 px-10 rounded-full hover:bg-amber-600 transition">
                    GET IN TOUCH <HiArrowLongRight />
                </button></div>
            </div>
        </div>
    )
}

export default MenuTab