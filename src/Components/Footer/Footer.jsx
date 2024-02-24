// import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='Footer w-full flex justify-between items-start py-20 px-10 pb-3 bg-slate-300 flex-wrap'id="Footer">
            <div className=" flex flex-col w-full">
                <div className='w-full flex flex-col justify-center items-center mb-5'>
                    <h1 className='text-3xl uppercase text-black'>
                        <a href="#Header">
                            catering & events
                        </a>
                    </h1>
                </div>
                <p className="text-center text-2xl border-green-900 opacity-50 border-b pb-5">The event specialists at our Southern California headquarters are available to help with every aspect of your event.
                </p>
            </div>
            <div className="ContactUs flex justify-evenly items-start w-full  border-green-900 border-b py-10 ">
                <div className="flex flex-col  ">
                    <h1 className=' flex gap-3 text-[23px] cursor-pointer font-medium uppercase text-black'>About Us <HiArrowLongRight /></h1>
                    <span className="flex gap-3 text-[15px] opacity-85 cursor-pointer mt-3 font-light uppercase">about us Catering & Events </span>
                    <span className="flex gap-3 text-[15px] opacity-85 cursor-pointer mt-3 font-light uppercase">meet the team </span>
                    <span className="flex gap-3 text-[15px] opacity-85 cursor-pointer mt-3 font-light uppercase">awards & press </span>
                    <span className="flex gap-3 text-[15px] opacity-85 cursor-pointer mt-3 font-light uppercase">blog </span>
                </div>
                <div className="flex flex-col ">
                    <h1 className=' flex gap-3 text-[23px] cursor-pointer font-medium uppercase text-black'>Services <HiArrowLongRight /></h1>
                    <span className="flex gap-3 text-[15px] opacity-85 cursor-pointer mt-3 font-light uppercase">Gourmet Catering </span>
                    <span className="flex gap-3 text-[15px] opacity-85 cursor-pointer mt-3 font-light uppercase">Bar Service </span>
                    <span className="flex gap-3 text-[15px] opacity-85 cursor-pointer mt-3 font-light uppercase">Staffing </span>
                    <span className="flex gap-3 text-[15px] opacity-85 cursor-pointer mt-3 font-light uppercase">Production </span>
                </div>

                <div className=" flex flex-col ">
                    <h1 className=' flex gap-3 text-[23px] cursor-pointer font-medium uppercase text-black'>Events <HiArrowLongRight /></h1>
                    <span className="flex gap-3 text-[15px] opacity-85 cursor-pointer mt-3 font-light uppercase">Weddings </span>
                    <span className="flex gap-3 text-[15px] opacity-85 cursor-pointer mt-3 font-light uppercase">Corporate </span>
                    <span className="flex gap-3 text-[15px] opacity-85 cursor-pointer mt-3 font-light uppercase">Social </span>
                    <span className="flex gap-3 text-[15px] opacity-85 cursor-pointer mt-3 font-light uppercase">Gallery </span>
                </div>

                <div className="flex flex-col ">
                    <h1 className=' flex gap-3 text-[23px] cursor-pointer font-medium uppercase text-black'>Venues <HiArrowLongRight /></h1>
                    <h1 className=' flex gap-3 text-[23px] cursor-pointer mt-3 font-mediumibold uppercase text-black'>Careers <HiArrowLongRight /></h1>
                    <h1 className=' flex gap-3 text-[23px] cursor-pointer mt-3 font-mediumibold uppercase text-black'>Contact <HiArrowLongRight /></h1>
                </div>

                <div className=" flex flex-col ">
                    <h1 className=' flex gap-3 text-[23px] cursor-pointer font-medium uppercase text-black'>Follow Us <HiArrowLongRight /></h1>
                    <span className="flex gap-3 text-[15px] opacity-85 cursor-pointer mt-3 font-light uppercase"> <FaFacebook /> facebook </span>
                    <span className="flex gap-3 text-[15px] opacity-85 cursor-pointer mt-3 font-light uppercase"><FaInstagram /> instagram </span>
                    <span className="flex gap-3 text-[15px] opacity-85 cursor-pointer mt-3 font-light uppercase"><FaPinterest /> pinterest </span>
                    <span className="flex gap-3 text-[15px] opacity-85 cursor-pointer mt-3 font-light uppercase"><FaLinkedin /> LinkedIn </span>
                </div>
            </div>
            <div className=" w-full flex justify-between items-end py-5 border-green-900 border-b">
                <p className="text-start text-xl py-5">
                    CALL US : 123-456-7890 • 800-700-6000
                    <br />
                    EMAIL US : CarteringAndEvents@gmail.com
                    <br />
                    FIND US : Apt. 780 73218 Tammi Ranch, Loweshire, IN 98628
                </p>
            </div>
            <div className="w-full flex justify-between items-end mt-5">
                <p>
                    © 2023 Catering & Events. All rights reserved.
                </p>
                <p>
                    Policy Privacy Policy
                </p>
            </div>
        </div>
    )
}

export default Footer