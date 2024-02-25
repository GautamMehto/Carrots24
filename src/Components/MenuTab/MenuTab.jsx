// import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";
import { FaXmark } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const MenuTab = ({ togglebtn, displayName }) => {
    return (
        <div className={`MenuTab w-full bg-green-900 h-screen text-white flex flex-col items-center fixed top-0 z-50 ${togglebtn ? "left-[0%]" : "left-[100%]"}`}>
            <div className="flex w-full h-16 px-5 items-center justify-end">
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
            <div className="w-full flex  flex-wrap justify-evenly items-center mt-5 gap-5">
                <span className="flex items-center gap-1 text-[20px] opacity-85 cursor-pointer mt-3 font-light uppercase"> <FaFacebook /> facebook </span>
                <span className="flex items-center gap-1 text-[20px] opacity-85 cursor-pointer mt-3 font-light uppercase"><FaInstagram /> instagram </span>
                <span className="flex items-center gap-1 text-[20px] opacity-85 cursor-pointer mt-3 font-light uppercase"><FaPinterest /> pinterest </span>
                <span className="flex items-center gap-1 text-[20px] opacity-85 cursor-pointer mt-3 font-light uppercase"><FaLinkedin /> LinkedIn </span>
            </div>
        </div>
    )
}

export default MenuTab