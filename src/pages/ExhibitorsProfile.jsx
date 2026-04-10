import React from 'react'
import { FaCheckSquare } from "react-icons/fa";

const ExhibitorsProfile = () => {
    return (
        <>
            <div className='max-w-[1440px] mx-auto mt-30 py-28 font-khand px-5'>
                <div>
                    <div className="text-center mb-12 font-khand">
                        <h1 className="text-[40px] font-bold text-[#007038] mb-6 tracking-tight">
                            Exhibitors' Profile
                        </h1>
                        <div className="w-96 h-px bg-[#2F3840] mx-auto mb-2"></div>
                    </div>

                    <div className='grid md:grid-cols-2 grid-cols-1 gap-15'>
                        <div>
                            <div className="flex font-medium py-1 text-[24px] items-center">
                                <span className="text-[#007038] text-2xl pr-4"><FaCheckSquare /></span>
                                Agricultural Machinery and Equipment
                            </div>

                            <div className="flex font-medium py-1 text-[24px] items-center">
                                <span className="text-[#007038] text-2xl pr-4"><FaCheckSquare /></span>
                                Crop Protection and Nutrition
                            </div>
                            <div className="flex font-medium py-1 text-[24px] items-center">
                                <span className="text-[#007038] text-2xl pr-4"><FaCheckSquare /></span>
                                Drone Technology, Research and Development Service
                            </div>
                            <div className="flex font-medium py-1 text-[24px] items-center">
                                <span className="text-[#007038] text-2xl pr-4"><FaCheckSquare /></span>
                                Green House, Irrigation, Plasticulture, Piping Technology, Water Technology
                            </div>
                            <div className="flex font-medium py-1 text-[24px] items-center">
                                <span className="text-[#007038] text-2xl pr-4"><FaCheckSquare /></span>
                                Bio-pesticides, Seeds, Fertilizers, Organic Products
                            </div>
                            <div className="flex font-medium py-1 text-[24px] items-center">
                                <span className="text-[#007038] text-2xl pr-4"><FaCheckSquare /></span>
                                Dairy, Food Processing Machinery
                            </div>
                        </div>

                        <div>
                            <div className="flex font-medium py-1 text-[24px] items-center">
                                <span className="text-[#007038] text-2xl pr-4"><FaCheckSquare /></span>
                                Animal Husbandry Products
                            </div>
                            <div className="flex font-medium py-1 text-[24px] items-center">
                                <span className="text-[#007038] text-2xl pr-4"><FaCheckSquare /></span>
                                Livestock and Dairy Farming
                            </div>
                            <div className="flex font-medium py-1 text-[24px] items-center">
                                <span className="text-[#007038] text-2xl pr-4"><FaCheckSquare /></span>
                                Renewable Energy
                            </div>
                            <div className="flex font-medium py-1 text-[24px] items-center">
                                <span className="text-[#007038] text-2xl pr-4"><FaCheckSquare /></span>
                                Start Up and Innovation Products in Agriculture
                            </div>
                            <div className="flex font-medium py-1 text-[24px] items-center">
                                <span className="text-[#007038] text-2xl pr-4"><FaCheckSquare /></span>
                                Agriculture Automation
                            </div>
                            <div className="flex font-medium py-1 text-[24px] items-center">
                                <span className="text-[#007038] text-2xl pr-4"><FaCheckSquare /></span>
                                Banking & Insurance
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExhibitorsProfile