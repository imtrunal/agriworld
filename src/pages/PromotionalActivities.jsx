import React from 'react'
import { FaCheckSquare } from "react-icons/fa";

const PromotionalActivities = () => {
    return (
        <>
            <div className='max-w-[1440px] mx-auto mt-30 pt-28 font-khand px-5'>
                <div>
                    <div className="text-center mb-12 font-khand">
                        <h1 className="text-[40px] font-bold text-[#007038] mb-6 tracking-tight">
                            Promotional Activities
                        </h1>
                        <div className="w-96 h-px bg-[#2F3840] mx-auto mb-2"></div>
                    </div>

                    <div className='grid md:grid-cols-2 grid-cols-1 gap-15'>
                        <div>
                            <div className="flex font-medium py-1 text-[24px] items-center">
                                <span className="text-[#007038] text-2xl pr-4"><FaCheckSquare /></span>
                                Hoardings at strategic locations
                            </div>

                            <div className="flex font-medium py-1 text-[24px] items-center">
                                <span className="text-[#007038] text-2xl pr-4"><FaCheckSquare /></span>
                                Promotion at APMC yard and market places
                            </div>
                            <div className="flex font-medium py-1 text-[24px] items-center">
                                <span className="text-[#007038] text-2xl pr-4"><FaCheckSquare /></span>
                                Radio promotion
                            </div>
                            <div className="flex font-medium py-1 text-[24px] items-center">
                                <span className="text-[#007038] text-2xl pr-4"><FaCheckSquare /></span>
                                Newspapers ads and leaflets in regional newspapers
                            </div>
                            <div className="flex font-medium py-1 text-[24px] items-center">
                                <span className="text-[#007038] text-2xl pr-4"><FaCheckSquare /></span>
                                Pre event roadshows
                            </div>
                        </div>

                        <div>
                            <div className="flex font-medium py-1 text-[24px] items-center">
                                <span className="text-[#007038] text-2xl pr-4"><FaCheckSquare /></span>
                                Investors and Contract Farming
                            </div>
                            <div className="flex font-medium py-1 text-[24px] items-center">
                                <span className="text-[#007038] text-2xl pr-4"><FaCheckSquare /></span>
                                Spreading awareness through digital campaigns
                            </div>
                            <div className="flex font-medium py-1 text-[24px] items-center">
                                <span className="text-[#007038] text-2xl pr-4"><FaCheckSquare /></span>
                                Sending promotional messages to the WhatsApp database
                            </div>
                            <div className="flex font-medium py-1 text-[24px] items-center">
                                <span className="text-[#007038] text-2xl pr-4"><FaCheckSquare /></span>
                                Connecting, engaging and inviting all farmer associations
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="bg-[#DFFFEF] mt-10 mb-24">
                <h1 className="font-khand font-bold text-[40px] text-[#007038] text-center py-10">NOT JUST AN EXPO BUT AN EXPERIENCE</h1>
            </div>
        </>
    )
}

export default PromotionalActivities