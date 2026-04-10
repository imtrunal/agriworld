import React from 'react'
import { FaCheckSquare } from "react-icons/fa";

const VisitorsProfile = () => {
    return (
        <div className='max-w-[1440px] mx-auto mt-30 py-28 font-khand px-5'>
            <div>
                <div className="text-center mb-12 font-khand">
                    <h1 className="text-[40px] font-bold text-[#007038] mb-6 tracking-tight">
                        Visitors' Profile
                    </h1>
                    <div className="w-96 h-px bg-[#2F3840] mx-auto mb-2"></div>
                </div>

                <div className='grid md:grid-cols-2 grid-cols-1 gap-15'>
                    <div>
                        <div className="flex font-medium py-1 text-[24px] items-center">
                            <span className="text-[#007038] text-2xl pr-4"><FaCheckSquare /></span>
                            Agricultural Progressive Farmers
                        </div>

                        <div className="flex font-medium py-1 text-[24px] items-center">
                            <span className="text-[#007038] text-2xl pr-4"><FaCheckSquare /></span>
                            Dairy, Poultry and Livestock Farmers
                        </div>
                        <div className="flex font-medium py-1 text-[24px] items-center">
                            <span className="text-[#007038] text-2xl pr-4"><FaCheckSquare /></span>
                            Industrialist and Manufacturers
                        </div>
                        <div className="flex font-medium py-1 text-[24px] items-center">
                            <span className="text-[#007038] text-2xl pr-4"><FaCheckSquare /></span>
                            Suppliers, Dealer and Distributors
                        </div>
                        <div className="flex font-medium py-1 text-[24px] items-center">
                            <span className="text-[#007038] text-2xl pr-4"><FaCheckSquare /></span>
                            Agronomists and Expert Researchers
                        </div>
                    </div>

                    <div>
                        <div className="flex font-medium py-1 text-[24px] items-center">
                            <span className="text-[#007038] text-2xl pr-4"><FaCheckSquare /></span>
                            Agents, Contractors and Consultants
                        </div>
                        <div className="flex font-medium py-1 text-[24px] items-center">
                            <span className="text-[#007038] text-2xl pr-4"><FaCheckSquare /></span>
                            Government Authorities
                        </div>
                        <div className="flex font-medium py-1 text-[24px] items-center">
                            <span className="text-[#007038] text-2xl pr-4"><FaCheckSquare /></span>
                            Associations Heads
                        </div>
                        <div className="flex font-medium py-1 text-[24px] items-center">
                            <span className="text-[#007038] text-2xl pr-4"><FaCheckSquare /></span>
                            Investors and Contract Farming
                        </div>
                        <div className="flex font-medium py-1 text-[24px] items-center">
                            <span className="text-[#007038] text-2xl pr-4"><FaCheckSquare /></span>
                            Exporters and Policy Makers
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisitorsProfile