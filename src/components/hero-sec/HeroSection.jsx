import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegBuilding } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiFoldedPaper } from "react-icons/gi";
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa6";
import img1 from "../../assets/MainBanner.jpeg"

const images = [
    img1,
    // "https://agriworldexpo.in/wp-content/uploads/2024/09/AgriWorldExpo-Slide-5-Opt.jpg",
    // "https://agriworldexpo.in/wp-content/uploads/2024/09/AgriWorldExpo-Slide-1-Opt.jpg",
];

const HeroSection = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    // Auto Slide
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 4000);

        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <div className="max-w-[1440px] font-khand mx-auto pt-20">
                <div className="relative w-full h-[200px] md:h-[400px] lg:h-[637px] overflow-hidden ">

                    {/* Images */}
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className={`absolute w-full h-full transition-opacity duration-700 ${index === current ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            <img
                                src={img}
                                alt="slider"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    ))}

                    {/* Previous Button */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-5 -translate-y-1/2 bg-white/70 hover:bg-white text-black px-3 py-2 rounded-full"
                    >
                        ❮
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-5 -translate-y-1/2 bg-white/70 hover:bg-white text-black px-3 py-2 rounded-full"
                    >
                        ❯
                    </button>
                </div>

                <div className="max-w-2xl mx-auto grid grid-cols-1 px-3 md:grid-cols-2 py-5 gap-5">
                    <div className="bg-green-700 rounded-full ">
                        <div className="flex items-center px-10 text-xl justify-center">
                            <Link to="/contact" className="font-bold text-white px-2 py-5">BOOK YOUR SPACE </Link>
                            <span className="text-white"><FaRegBuilding /></span>
                        </div>
                    </div>

                    <div className="bg-green-700 rounded-full">
                        <div className="flex items-center px-10 text-xl justify-center">
                            <Link to="/visitor-registration" className="font-bold text-white px-2 py-5">VISITOR REGISTRATIONS </Link>
                            <span className="text-white"><FaPeopleArrows /></span>
                        </div>
                    </div>
                </div>
                {/* [linear-gradient(180deg,#bbfcc0_0%,#ffffff_100%)] */}


            </div>

            <div>
                <div className="bg-[#DFFFEF] max-w-[1400px] mx-auto">
                    <h1 className="font-khand font-bold text-4xl text-green-700 text-center py-10">AMRELI, THE HEART OF SAURASHTRA IS THE RIGHT PLACE</h1>
                </div>
                <div className="max-w-[1350px] mx-auto py-10 px-4 mt-5 font-khand">
                    <div className="flex font-semibold text-[#54595F] py-4 text-[22px]">
                        <span className="text-green-700 text-4xl pr-4"><FaLocationDot /></span>Amreli's central position in Gujarat and excellent connectivity make it easily accessible for exhibitors and attendees
                    </div>
                    {/* <div className="flex font-semibold text-[#54595F] py-4 text-[22px]">
                        <span className="text-green-700 text-4xl pr-4"><FaRegBuilding /></span>Rajkot is home to several manufacturers, making it a hub of agriculture manufacturing
                    </div> */}
                    <div className="flex font-semibold text-[#54595F] py-4 text-[22px]">
                        <span className="text-green-700 text-4xl pr-4"><GiFoldedPaper /></span>Saurashtra contributes over 50% of Gujarat's cultivated land
                    </div>
                    <div className="flex font-semibold text-[#54595F] py-4 text-[22px]">
                        <span className="text-green-700 text-4xl pr-4"><FaHandshakeSimple /></span>The region's robust cooperative movement has empowered farmers and created a supportive ecosystem for agricultural growth
                    </div>
                    <div className="flex font-semibold text-[#54595F] py-4 text-[22px]">
                        <span className="text-green-700 text-4xl pr-4"><FaRegLightbulb /></span>The entrepreneurial culture has given rise to numerous agricultural startups and businesses, driving growth and job creation
                    </div>
                </div>
            </div>
            {/* <div>
                <div className="bg-[#DFFFEF] max-w-[1400px] mx-auto">
                    <h1 className="font-khand font-bold text-4xl text-green-700 text-center py-10">FARMERS’ GROWTH MEANS NATION’S GROWTH</h1>
                </div>
            </div> */}
        </>
    )
}

export default HeroSection