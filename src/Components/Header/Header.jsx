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

const Header = () => {
    return (
        <div className='w-full h-screen bg-white'>
            <div className='w-full h-32 flex justify-center items-center bg-white'>
                <ul className='w-1/3 flex justify-center text-black gap-x-8'>
                    <li className='text-xl uppercase hover:text-amber-600 '><a href="#">about</a></li>
                    <li className='text-xl uppercase hover:text-amber-600 '><a href="#">services</a></li>
                    <li className='text-xl uppercase hover:text-amber-600 '><a href="#">event</a></li>
                </ul>
                <div className='w-1/3 flex flex-col justify-center items-center'>
                    <h1 className='text-3xl uppercase  text-black'>
                        24 Carrorts
                    </h1>
                    <p className='uppercase text-black/50'>
                        <a href="#">
                            catering & events
                        </a>
                    </p>
                </div>
                <ul className='w-1/3 flex justify-center text-black gap-x-8'>
                    <li className='text-xl uppercase hover:text-amber-600 '><a href="#">venue</a></li>
                    <li className='text-xl uppercase hover:text-amber-600 '><a href="#">cereer</a></li>
                    <button className="text-xl bg-amber-700 px-10 rounded-full hover:bg-amber-900 hover:text-white  transition ">
                        GET IN TOUCH
                    </button>
                </ul>
            </div>
            <div className='w-full h-[47rem] overflow-hidden relative'>
                <video className="w-full" src={BackVideo} autoPlay muted loop></video>
                <span className=" w-max text-8xl text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Simply the Finest</span>
            </div>
            <div className="w-full h-screen flex justify-between items-center">
                <div className="w-[45%] h-full pt-10 flex flex-col justify-center items-center bg-white">
                    <h5 className="text-2xl mb-5 text-green-900">WELCOME TO 24 CARROTS</h5>
                    <h1 className="text-8xl leading-[5rem] text-green-900">Remarkable</h1>
                    <h1 className="text-8xl leading-[5rem] text-green-900">Catering & </h1>
                    <h1 className="text-8xl leading-[5rem] text-green-900 mb-10">Events</h1>
                    <p className="mb-5 px-5 text-[20px] text-wrap text-center text-green-900 *:">
                        24 Carrots is the premier catering and events company of choice in Southern California. We create remarkable experiences by offering the finest quality foods and providing unsurpassed personalized service, driven by our passion for life’s special occasions.
                    </p>
                    <button className="mb-5 bg-amber-700 p-3 px-10 rounded-full hover:bg-amber-600 transition ">
                        GET IN TOUCH
                    </button>
                </div>
                <div className="w-[50%] h-[80vh] flex flex-col justify-center items-center bg-green-300 rounded-ss-[20rem] overflow-hidden ">
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