// import React  from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import { HiArrowLongRight } from "react-icons/hi2";
import Image1 from "./1.3-Holly-Sigafoos-Photo.jpg";
import Image2 from "./1.2-Holly-Sigafoos-Photo.jpg";
import Image3 from "./1.1-Lorely-Meza-1.jpg";
import Image4 from "./1.4-Lorely-Meza.jpg";
import MarkGif from './MarkCircle.gif'
import DownloadGif from './download.gif'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image5 from "./427760675_306262479105244_5451396845808876908_n.jpg"
import Image6 from "./427914344_2116368565380368_6109296846542119328_n.jpg"

const Section = () => {
    return (
        <div className='Section_2 w-full flex gap-5 justify-center items-center pt-20 flex-wrap overflow-hidden bg-white' id="Section_2">
            <div className='w-full flex justify-center items-center flex-col mb-32 bg-white'>
                <h1 className="text-8xl leading-[5rem] text-green-900 text-center">Great Food & A </h1>
                <h1 className="text-8xl leading-[5rem] text-green-900 text-center">Whole Lot More</h1>
                <p className="w-1/2 text-green-900 text-xl mt-5 leading-8 text-center">
                    Catering is just the beginning. Sure, we love astonishing your guests with attentive service, thoughtful food, and an inviting environment. But what really matters most is helping you create memories that will last for a lifetime. Our industry experts think of all the little things that turn an ordinary event into an unforgettable experience.
                </p>
                <button className="flex items-center gap-5 mt-8 text-xl bg-amber-700 p-3 px-10 rounded-full hover:bg-amber-600 transition ">
                    EXPLORE SERVICES <HiArrowLongRight /></button>
            </div>
            <div className='Services w-full flex justify-center items-center gap-5 mb-24 bg-white' id="Services">
                <div className='ServicesDetails bg-white w-[20%] h-full gap-5 flex flex-col justify-evenly items-baseline'>
                    <div className='w-full flex flex-col gap-5 HoverItem relative' >
                        <div className='w-[120%] absolute -top-6 -left-10 Circle'>
                            <img src={MarkGif} alt="" />
                        </div>
                        <h5 className='text-3xl text-green-900'>Gourment Catering</h5>
                        <p className='text-xl text-green-900' >Our professionally-trained culinary team is passionate and proud of our diverse and thoughtful menu, always cooking up something that aligns with your great taste.</p>
                        <button className='w-[70%] py-2 m-auto bg-white border rounded-full border-orange-600 flex justify-center items-center gap-3 hover:bg-orange-600 hover:text-white'>Learn More <HiArrowLongRight /></button>
                    </div>
                    <div className='w-full flex flex-col gap-5 HoverItem relative' >
                        <div className='w-[120%] absolute -top-6 -left-10 Circle'>
                            <img src={MarkGif} alt="" />
                        </div>
                        <h5 className='text-3xl text-green-900'>Bar Service</h5>
                        <p className='text-xl text-green-900' >Our sophisticated flavor expertise enables us to create inventive concoctions that generate buzz in more ways than one!
                        </p>
                        <button className='w-[70%] py-2 m-auto bg-white border rounded-full border-orange-600 flex justify-center items-center gap-3  hover:bg-orange-600 hover:text-white'>Learn More <HiArrowLongRight /></button>
                    </div>
                </div>
                <div className='ServicesImages bg-white w-[40%] h-[80vh] '>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay:2500,
                            disableOnInteraction:false
                        }}
                        modules={[Autoplay]}
                        className="mySwiper rounded-full"
                    >
                        <SwiperSlide >
                            <img src={Image1} className='ServicesImage' alt="images" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src={Image2} className='ServicesImage' alt="images" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src={Image3} className='ServicesImage' alt="images" />
                        </SwiperSlide>
                        <SwiperSlide >
                            <img src={Image4} className='ServicesImage' alt="images" />
                        </SwiperSlide>
                    </Swiper>

                </div>
                <div className='ServicesDetails bg-white w-[20%] h-full  gap-5 flex flex-col justify-evenly items-center'>
                    <div className='w-full flex flex-col gap-5 HoverItem relative' >
                        <div className='w-[120%] absolute -top-6 -left-10 Circle'>
                            <img src={MarkGif} alt="" />
                        </div>
                        <h5 className='text-3xl text-green-900'>Staff Member</h5>
                        <p className='text-xl text-green-900' >The hand-selected team at Catering & Events are just as important to our reputation as our gourmet food. Our staff is certainly the best at what they do, and you’ll work with professionals who genuinely care about the success of your event!

                        </p>
                        <button className='w-[70%] py-2 m-auto bg-white border rounded-full border-orange-600 flex justify-center items-center gap-3  hover:bg-orange-600 hover:text-white'>Learn More <HiArrowLongRight /></button>
                    </div>
                    <div className='w-full flex flex-col gap-5 HoverItem relative' >
                        <div className='w-[120%] absolute -top-6 -left-10 Circle'>
                            <img src={MarkGif} alt="" />
                        </div>
                        <h5 className='text-3xl text-green-900'>Event Production</h5>
                        <p className='text-xl text-green-900' >If mind-blowing spectacles and immersive guest experiences are what you’re after, the specialists at Catering & Events can pull it off on an epic scale!</p>
                        <button className='w-[70%] py-2 m-auto bg-white border rounded-full border-orange-600 flex justify-center items-center gap-3  hover:bg-orange-600 hover:text-white'>Learn More <HiArrowLongRight /></button>
                    </div>
                </div>
            </div>

            <div className='Experience w-full bg-green-900 text-white flex flex-col justify-between items-center p-20' id="Experience">
                <div className='w-full flex justify-center items-center'>
                    <img src={DownloadGif} alt="" className=' w-1/4 rotate-12 invert'/>
                </div>
                <div className='ExperBox w-full h-[80vh] flex justify-between items-center'>
                    <div className='ExperHeadingBox w-2/3 flex flex-col gap-10'>
                        <h1 className="text-8xl leading-[3rem] text-start">Experiences</h1>
                        <h1 className="text-8xl leading-[3rem] text-start">Designed To Be</h1>
                        <h1 className="text-8xl leading-[3rem] text-start">Shared</h1>
                        <p className="w-1/2 text-xl mt-5 leading-8 text-start">
                            Follow us for more from Catering & Events.
                        </p>
                        <div className='ExperIcon w-full flex justify-start gap-5 flex-wrap items-center'>
                            <a href="" target='_blank' className='flex gap-3 items-center text-2xl '><FaFacebook /> Facebook </a>
                            <a href="" target='_blank' className='flex gap-3 items-center text-2xl '><FaInstagram /> Instagram </a>
                            <a href="" target='_blank' className='flex gap-3 items-center text-2xl '><FaPinterest /> Pinterest </a>
                            <a href="" target='_blank' className='flex gap-3 items-center text-2xl '><FaLinkedin /> Linkedin </a>
                        </div>
                    </div>
                    <div className='ExperImage w-1/3 h-full relative'>
                        <img src={Image5} alt="Image-5" className="w-[15rem] h-[20rem] object-cover rounded-lg absolute border-[10px] border-white top-1/2 -rotate-12 -translate-x-1/2 -translate-y-1/2 z-30" />
                        <img src={Image6} alt="Image-6" className='w-[15rem] h-[15rem] object-cover rounded-lg absolute border-[10px] border-white top-1/4 -right-8 rotate-[30deg] -translate-x-1/2 -translate-y-1/2 z-0' />
                        <img src={Image1} alt="Image-1" className='w-[15rem] h-[15rem] object-cover rounded-lg absolute border-[10px] border-white -bottom-32 -right-10 -rotate-[10deg] -translate-x-1/2 -translate-y-1/2 z-40' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section;
