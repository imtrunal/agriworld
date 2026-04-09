import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FaMailBulk } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className='max-w-full bg-[#0F1419] text-white font-khand px-5'>
                <div className="max-w-[1400px] mx-auto">
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-5 py-16'>
                        <div>
                            <div>
                                <h1 className='text-[25px] font-medium md:text-start text-center py-4'>About Khedutputra Krushi Melo</h1>
                            </div>
                            <div className="text-sm">
                                {/* <p className='font-medium '>Agri World Expo is an annual international event showcasing cutting-edge agricultural technologies. Held in Gujarat, India, it attracts a diverse group of attendees including policymakers, investors, exporters, decision-makers, experts, practitioners, and trainers in agriculture. The expo draws thousands of visitors from around the world, making it a significant event in the agricultural sector.</p>
                                 */}
                                 
                                 <p className="mb-8">
                            Agriculture is the heartbeat of India's economy, and our nation is home to some of the most
                            fertile and productive lands in the world. With a population exceeding 1.4 billion, India
                            stands as one of the largest global markets for agricultural technology and services.

                        </p>

                        <p className="mb-8">
                            <strong> Khedutputra Krushi Melo </strong> is emerging as one of India's premier agricultural exhibitions. It
                            serves as a comprehensive platform to showcase the latest advancements in farming
                            technology, tools, and sustainable practices. This event is designed to bridge the gap between
                            innovative companies and the hardworking farmers who form the backbone of our country.

                        </p>

                        <p className="mb-8">
                            Traditionally held in the heart of Gujarat—a region renowned for its robust cooperative
                            movements and entrepreneurial spirit—the Khedutputra Krushi Melo attracts a diverse
                            community of attendees. From progressive farmers and agronomists to policymakers,
                            investors, and international experts, this expo is a significant milestone in the agricultural
                            calendar.
                        </p>
                            </div>
                        </div>

                        <div className='mx-auto'>
                            <h1 className='text-[25px] font-medium py-4 text-center'>Event Details</h1>

                            <div className="p-2 my-4">
                                <div className="flex items-center !justify-evenly gap-1">
                                    <span className="bg-[#007038] py-1 text-white text-[25px] px-3 font-semibold">11</span>
                                    <span className="bg-[#007038] py-1 text-white text-[25px] px-2 font-semibold">12</span>
                                    <span className="bg-[#007038] py-1 text-white text-[25px] px-3 font-semibold">13</span>
                                </div>

                                <p className='text-[20px] text-center mb-9'><strong>April 2026</strong></p>
                            </div>

                            <div>
                                <p className='flex items-center text-[25px] font-bold'><span className='pr-2'><FaLocationDot /></span>Lathi Bypass, Amreli, Gujarat</p>
                            </div>
                        </div>

                        <div className='mx-auto'>
                            <h1 className='text-[25px] font-medium py-4'>
                                Contact Us
                            </h1>

                            <div className=''>
                                <div>
                                    <p className='flex items-center py-3 text-[17.6px] font-medium max-w-[330px]'><span className=' pr-2'><FaLocationDot /></span>1116, 11th floor, Maple Trade Center,Memnagar, Ahmedabad, Gujarat - 380007, India</p>
                                </div>
                                <div>
                                    <p className='flex items-center py-2 text-[17px] font-medium'><span className=' pr-2'><IoCall /></span>+91 97585674856</p>
                                </div>
                                <div>
                                    <p className='flex items-center py-2 text-[17px] font-medium'><span className=' pr-2'><IoCall /></span>+91 97585674856</p>
                                </div>


                                <div>
                                    <h2 className='py-3 text-[17.6px] font-medium'>For General Inquiries:</h2>

                                    <div>
                                        <p className='flex items-center py-2 text-[17.6px] font-medium'><span className=' pr-2'><FaMailBulk /></span>info@agriworld.com</p>
                                    </div>

                                    <h2 className='text-[17.6px] font-medium py-3'>For Sales:</h2>

                                    <div>
                                        <p className='flex items-center py-2 text-[17.6px] font-medium'><span className=' pr-2'><FaMailBulk /></span>sales@agriworld.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="max-w-full bg-[#007038] text-white font-khand font-medium px-3">
                <div className=' py-3 max-w-[1400px] mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 text-center'>
                        <p className='md:text-start'>Copyright © 2025 Khedutputra Krushi Melo</p>
                        <p className='md:text-end'><button>Private Policy</button> Developed By <button>Sughosh Technolab</button></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer