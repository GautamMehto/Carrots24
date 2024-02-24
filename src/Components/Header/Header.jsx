// import React from 'react'
import BackVideo from "./24carrtos-home-banner.mp4"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image1 from "./1.3-Holly-Sigafoos-Photo.jpg";
import Image2 from "./1.2-Holly-Sigafoos-Photo.jpg";
import Image3 from "./1.1-Lorely-Meza-1.jpg";
import Image4 from "./1.4-Lorely-Meza.jpg";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { HiArrowLongRight } from "react-icons/hi2";
import { FaBarsStaggered } from "react-icons/fa6";


const Header = ({displayName}) => {
    return (
        <div className='w-full bg-white relative z-[46]' id="Header">
            <div className='HeaderTab w-full h-32 flex justify-center flex-wrap items-center bg-white'>
                <ul className='w-1/3 flex justify-center items-center text-black gap-x-8'>
                    <li className='text-xl uppercase hover:text-amber-600 '><a href="#AboutUs">about</a></li>
                    <li className='text-xl uppercase hover:text-amber-600 '><a href="#Services">services</a></li>
                    <li className='text-xl uppercase hover:text-amber-600 '><a href="#Experience">experience</a></li>
                </ul>
                <div className='w-1/3 flex flex-col justify-center items-center'>
                    <h1 className='text-2xl uppercase font-bold text-black'>
                        catering & events
                    </h1>
                </div>
                <ul className='w-1/3 flex justify-center items-center flex-wrap text-black gap-x-8'>
                    <li className='w-max text-xl uppercase hover:text-amber-600 '><a href="#Venue">venue</a></li>
                    <li className='w-max text-xl uppercase hover:text-amber-600 '><a href="#Footer">cereer</a></li>
                    <button className="flex items-center gap-5 w-max text-xl bg-amber-600 px-5 rounded-full hover:text-white hover:px-0 transition ">
                        GET IN TOUCH <HiArrowLongRight />
                    </button>
                </ul>
                <FaBarsStaggered  className="Bar" id="MenuBtn" onClick={e=>{
                    displayName(true)
                }}/>
            </div>
            <div className='VideoTab w-full overflow-hidden relative'>
                <video className=" w-full" src={BackVideo} autoPlay muted loop></video>
                <span className=" w-max text-[8vw] text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Simply the Finest</span>
            </div>
            <div className="AboutUs w-full h-screen flex justify-between items-center" id="AboutUs">
                <div className="w-[45%] h-full pt-10 flex flex-col justify-center items-center bg-white">
                    <h5 className="text-2xl mb-5 uppercase text-green-900">WELCOME TO catering & events</h5>
                    <h1 className="text-8xl leading-[5rem] text-green-900">Remarkable</h1>
                    <h1 className="text-8xl leading-[5rem] text-green-900">Catering & </h1>
                    <h1 className="text-8xl leading-[5rem] text-green-900 mb-10">Events</h1>
                    <h6 className="mb-5 px-5 text-xl text-wrap text-center text-green-900 *:">
                        Catering & Events is the premier catering and events company of choice in Southern California. We create remarkable experiences by offering the finest quality foods and providing unsurpassed personalized service, driven by our passion for life’s special occasions.
                    </h6>
                    <button className="flex items-center gap-5 mb-5 bg-amber-700 p-3 px-10 rounded-full hover:bg-amber-600 transition ">
                        GET IN TOUCH <HiArrowLongRight />
                    </button>
                </div>
                <div className="SwiperTab w-[50%] h-[80vh] flex flex-col justify-center items-center bg-white rounded-ss-[20rem] overflow-hidden ">
                    <Swiper
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper">
                        <SwiperSlide >
                            <img src={Image1} alt="images" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src={Image2} alt="images" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src={Image3} alt="images" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src={Image4} alt="images" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Header