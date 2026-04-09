import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

const AboutSparkMedia = () => {
    const TreeSymbol = () => (
        <span className="inline-block font-bold text-green-700 leading-none">↑</span>
    );
    return (
        <>
            <div className='min-h-screen mt-30 py-28 font-khand px-10'>
                <div className="text-center mb-12 font-khand">
                    <h1 className="text-[40px] font-bold text-[#007038] mb-6 tracking-tight">
                        About Spark Media
                    </h1>
                    <div className="w-96 h-[1px] bg-[#2F3840] mx-auto mb-2"></div>
                </div>

                <div>
                    <div className='grid md:grid-cols-2 grid-cols-1'>
                        <div className='py-2 mb-5'>
                            <img src="https://agriworldexpo.in/wp-content/uploads/2024/09/Spark-Media-Logo-About.jpg" alt="" className='mx-auto max-w-[615px] max-h-[698px] object-cover' />
                        </div>

                        <div>
                            <div className="w-full bg-white py-8 px-4 overflow-hidden">
                                <div className="flex items-center justify-center gap-1 md:gap-2 flex-wrap md:flex-nowrap">
                                    {/* Left Trees Pattern */}
                                    <div className="flex gap-1 md:gap-2 text-[#007038] text-lg md:text-2xl">
                                        {[...Array(16)].map((_, i) => (
                                            <TreeSymbol key={`left-${i}`} />
                                        ))}
                                    </div>

                                    {/* Main Text */}
                                    <h1 className="text-center font-bold text-xl md:text-3xl lg:text-[38.7px] text-[#007038] mx-4 whitespace-nowrap">
                                        Who Are We?
                                    </h1>

                                    {/* Right Trees Pattern */}
                                    <div className="flex gap-1 md:gap-2 text-[#007038] text-lg md:text-2xl">
                                        {[...Array(16)].map((_, i) => (
                                            <TreeSymbol key={`right-${i}`} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className='text-[19px] text-black font-medium'>We are a dynamic group of experienced and talented people. We work in a creative, innovative, and unique way. We believe in creating win-win situations with clients, suppliers, and service providers. Spark Media has the core competencies of:</p>

                                <div>
                                    <div className="flex font-medium py-1 text-[19px] items-center">
                                        <span className="text-[#007038] text-2xl pr-4"><FaCheckCircle /></span>
                                        Organizing the theme-based exhibition
                                    </div>
                                    <div className="flex font-medium py-1 text-[19px] items-center">
                                        <span className="text-[#007038] text-2xl pr-4"><FaCheckCircle /></span>
                                        Theme-Based Pavilion and Stall Design
                                    </div>
                                    <div className="flex font-medium py-1 text-[19px] items-center">
                                        <span className="text-[#007038] text-2xl pr-4"><FaCheckCircle /></span>
                                        Event Management
                                    </div>
                                    <div className="flex font-medium py-1 text-[19px] items-center">
                                        <span className="text-[#007038] text-2xl pr-4"><FaCheckCircle /></span>
                                        Corporate Branding
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSparkMedia