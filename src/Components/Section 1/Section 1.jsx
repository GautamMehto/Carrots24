// import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Mainimg1 from "./MAIN.jpg"
import Mainimg2 from "./9-7.jpg"
import Mainimg3 from "./1.-MAIN-3.jpg"
import Mainimg4 from "./1.-MAIN-4.jpg"
import Mainimg5 from "./7-31-5.png"
import Mainimg6 from "./the-richland-tanveer-badal-13.jpg"
import Mainimg7 from "./1.-MAIN.jpg"
import { HiArrowLongRight } from "react-icons/hi2";


// import required modules
import { Pagination} from 'swiper/modules';
import WeddingIamge from "./wedding-scroll-cropped.jpg"

const Section = () => {
    return (
        <div className='Section_1 w-full bg-white ' id="Section_1">
            <div className="WeddingBox bg-white w-full flex justify-evenly items-end p-20 pt-40 pb-52 gap-16">
                <img src={WeddingIamge} alt="" className="bg-white WeddingImage w-[35vw] h-[110vh] rounded-s-[15rem] rounded-t-full" />
                <div className='flex flex-col'>
                    <h1 className="bg-white WeddingText text-8xl leading-[5rem] text-green-900">Making Every</h1>
                    <h1 className="bg-white WeddingText text-8xl leading-[5rem] text-green-900">Experience</h1>
                    <h1 className="bg-white WeddingText text-8xl leading-[5rem] text-green-900 mb-10">Magical</h1>

                    <div className="w-full flex bg-white  items-start">
                        <div className="w-2/6 flex gap-5 flex-col">
                            <h3 className="text-green-900 text-3xl">Wedding</h3>
                            <h3 className="text-green-900 opacity-80 text-3xl hover:text-amber-700 cursor-pointer">Social</h3>
                            <h3 className="text-green-900 opacity-80 text-3xl hover:text-amber-700 cursor-pointer">Corporate</h3>
                            <h3 className="text-green-900 opacity-80 text-3xl hover:text-amber-700 cursor-pointer">Venues</h3>
                        </div>
                        <div className="w-4/6">
                            <h3 className="text-green-900 text-3xl">EXCEPTIONAL WEDDINGS</h3>
                            <p className="text-green-900 text-xl mt-5 leading-8">
                                The most important day of your life, is ours too. Your wedding should be the ultimate celebration of your relationship, and our team of experts guide you through the process, offering peace of mind and a remarkable experience.
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center mt-10 bg-white">
                        <button className="flex items-center gap-5 mb-5  text-xl bg-amber-700 p-3 px-10 rounded-full hover:bg-amber-600 transition ">
                            Learn More <HiArrowLongRight/>
                        </button>
                    </div>

                </div>
            </div>
            <div className="banner w-full h-56 bg-white relative">
            </div>
            <div className="Venue w-full bg-white flex flex-col items-center relative z-10" id="Venue">
                <h3 className="text-green-900 text-3xl uppercase text-center">
                    Venues
                </h3>
                <h1 className="text-8xl leading-[5rem] text-green-900 text-center">Unforgetable</h1>
                <h1 className="text-8xl leading-[5rem] text-green-900 text-center">Venues</h1>
                <p className="w-1/2 text-green-900 text-xl mt-5 leading-8 text-center">
                Catering & Events is the exclusive or preferred caterer at Southern California’s most spectacular properties. From intimate understated spaces to large and luxurious, we’ll help you find the event venue that makes your heart skip a beat.
                </p>
                <button className="flex items-center gap-5 mt-8  text-xl bg-amber-700 p-3 px-10 rounded-full hover:bg-amber-600 transition ">
                    EXPLORE VENUES<HiArrowLongRight/></button>
            </div>
            <div className='SwiperBox bg-white W-full mt-32 mb-10'>
                <Swiper
                    slidesPerView={2.1}
                    spaceBetween={30}
                    modules={[Pagination]}
                    className="mySwiper"
                    scrollbar={{
                        el: ".swiper-scrollbar",
                        draggable: true,
                        dragClass:'swiper-scrollbar-drag',
                        dragSize:'auto',
                        horizontalClass:'swiper-scrollbar-horizontal'
                    }}
                >
                    <SwiperSlide className='relative Slider-Img '>
                        <img src={Mainimg1} alt="" className='z-10'/>
                        <div className='More-Details flex flex-col justify-between  w-full h-full bg-amber-500/50 absolute p-10 z-0 opacity-0'>
                            <button className='flex items-center justify-center gap-5 w-[60%] m-auto bg-transparent text-white p-3 px-8 border border-white rounded-full hover:bg-amber-600 transition '>
                                Explore Venue<HiArrowLongRight/>
                            </button>
                            <div>
                                <h1 className='border-b border-white text-5xl text-left text-white'>The Richland</h1>
                                <h3 className='text-white text-start text-xl'>Orange</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative Slider-Img '>
                        <img src={Mainimg2} alt="" className='z-10' />
                        <div className='More-Details flex flex-col justify-between  w-full h-full bg-amber-500/50 absolute p-10 z-0 opacity-0'>
                            <button className='flex items-center justify-center gap-5 w-[60%] m-auto bg-transparent text-white p-3 px-8 border border-white rounded-full hover:bg-amber-600 transition '>
                                Explore Venue <HiArrowLongRight/>
                            </button>
                            <div>
                                <h1 className='border-b border-white text-5xl text-left text-white'>The Richland</h1>
                                <h3 className='text-white text-start text-xl'>Orange</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative Slider-Img '>
                        <img src={Mainimg3} alt="" className='z-10' />
                        <div className='More-Details flex flex-col justify-between  w-full h-full bg-amber-500/50 absolute p-10 z-0 opacity-0'>
                            <button className='flex items-center justify-center gap-5 w-[60%] m-auto bg-transparent text-white p-3 px-8 border border-white rounded-full hover:bg-amber-600 transition '>
                                Explore Venue <HiArrowLongRight/>
                            </button>
                            <div>
                                <h1 className='border-b border-white text-5xl text-left text-white'>The Richland</h1>
                                <h3 className='text-white text-start text-xl'>Orange</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative Slider-Img '>
                        <img src={Mainimg4} alt="" className='z-10' />
                        <div className='More-Details flex flex-col justify-between  w-full h-full bg-amber-500/50 absolute p-10 z-0 opacity-0'>
                            <button className='flex items-center justify-center gap-5 w-[60%] m-auto bg-transparent text-white p-3 px-8 border border-white rounded-full hover:bg-amber-600 transition '>
                                Explore Venue <HiArrowLongRight/>
                            </button>
                            <div>
                                <h1 className='border-b border-white text-5xl text-left text-white'>The Richland</h1>
                                <h3 className='text-white text-start text-xl'>Orange</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative Slider-Img '>
                        <img src={Mainimg5} alt="" className='z-10' />
                        <div className='More-Details flex flex-col justify-between  w-full h-full bg-amber-500/50 absolute p-10 z-0 opacity-0'>
                            <button className='flex items-center justify-center gap-5 w-[60%] m-auto bg-transparent text-white p-3 px-8 border border-white rounded-full hover:bg-amber-600 transition '>
                                Explore Venue <HiArrowLongRight/>
                            </button>
                            <div>
                                <h1 className='border-b border-white text-5xl text-left text-white'>The Richland</h1>
                                <h3 className='text-white text-start text-xl'>Orange</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative Slider-Img '>
                        <img src={Mainimg6} alt="" className='z-10' />
                        <div className='More-Details flex flex-col justify-between  w-full h-full bg-amber-500/50 absolute p-10 z-0 opacity-0'>
                            <button className='flex items-center justify-center gap-5 w-[60%] m-auto bg-transparent text-white p-3 px-8 border border-white rounded-full hover:bg-amber-600 transition '>
                                Explore Venue <HiArrowLongRight/>
                            </button>
                            <div>
                                <h1 className='border-b border-white text-5xl text-left text-white'>The Richland</h1>
                                <h3 className='text-white text-start text-xl'>Orange</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='relative Slider-Img '>
                        <img src={Mainimg7} alt="" className='z-10' />
                        <div className='More-Details flex flex-col justify-between  w-full h-full bg-amber-500/50 absolute p-10 z-0 opacity-0'>
                            <button className='flex items-center justify-center gap-5 w-[60%] m-auto bg-transparent text-white p-3 px-8 border border-white rounded-full hover:bg-amber-600 transition '>
                                Explore Venue <HiArrowLongRight/>
                            </button>
                            <div>
                                <h1 className='border-b border-white text-5xl text-left text-white'>The Richland</h1>
                                <h3 className='text-white text-start text-xl'>Orange</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >

    )
}

export default Section