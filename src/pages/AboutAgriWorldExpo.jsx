import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const AboutAgriWorldExpo = () => {
    const TreeSymbol = () => (
        <span className="inline-block font-bold text-green-700 leading-none">↑</span>
    );
    return (
        <>
            <div className="max-w-[1440px] mx-auto about-page mt-30 py-28 font-khand px-5">
                <div>
                    <div className="text-center mb-12 font-khand">
                        <h1 className="text-[40px] font-bold text-[#007038] mb-6 tracking-tight">
                            About Khedutputra Krushi Melo
                        </h1>
                        <div className="w-96 h-px bg-[#2F3840] mx-auto mb-2"></div>
                    </div>

                    <div className="text-xl text-black font-medium">
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

                <div>
                    <div className="w-full bg-white py-8 px-4 overflow-hidden">
                        <div className="flex items-center justify-center gap-1 md:gap-2 flex-wrap md:flex-nowrap">
                            {/* Left Trees Pattern */}
                            <div className="flex gap-1 md:gap-2 text-green-700 text-lg md:text-2xl">
                                {[...Array(30)].map((_, i) => (
                                    <TreeSymbol key={`left-${i}`} />
                                ))}
                            </div>

                            {/* Main Text */}
                            <h1 className="text-center font-bold text-xl md:text-3xl lg:text-[38.7px] text-green-700 mx-4 whitespace-nowrap">
                                {/* AGRI WORLD EXPO AIMS TO */}
                                Our Objectives
                            </h1>

                            {/* Right Trees Pattern */}
                            <div className="flex gap-1 md:gap-2 text-green-700 text-lg md:text-2xl">
                                {[...Array(30)].map((_, i) => (
                                    <TreeSymbol key={`right-${i}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex font-medium py-1 text-[24px] items-start">
                        <span className="text-[#007038] text-2xl pr-4 pt-2"><FaCheckCircle /></span>
                        {/* Promoting and Making Awareness about Organic Farming */}
                        <div>

                            <p className="font-extralight"><strong className="font-bold">Empowering Farmers:</strong>To provide hands-on knowledge and awareness about
                                modern farming techniques and organic practices</p>
                        </div>
                    </div>

                    <div className="flex font-medium py-1 text-[24px] items-center">
                        <span className="text-[#007038] text-2xl pr-4"><FaCheckCircle /></span>
                        {/* Role of Renewable Energy into Agriculture Industries */}
                        <div>

                            <p className="font-extralight"><strong className="font-bold">Technological Integration:</strong>To showcase the role of renewable energy, drone
                                technology, and automation in modernizing the agricultural sector.</p>
                        </div>
                    </div>
                    <div className="flex font-medium py-1 text-[24px] items-center">
                        <span className="text-[#007038] text-2xl pr-4"><FaCheckCircle /></span>
                        {/* Sustainable Farming through Innovation and Technology */}
                        <div>

                            <p className="font-extralight"><strong className="font-bold">Sustainable Innovation:</strong> To promote sustainable farming practices that ensure longterm productivity and environmental health.
                            </p>
                        </div>
                    </div>
                    <div className="flex font-medium py-1 text-[24px] items-center">
                        <span className="text-[#007038] text-2xl pr-4"><FaCheckCircle /></span>
                        {/* Promoting Women Self Aid Group in Rural Area */}
                        <div>

                            <p className="font-extralight"><strong className="font-bold">Strategic Networking:</strong>  To create a platform for strategic partnerships across the dairy, veterinary, horticulture, and livestock industries
                            </p>
                        </div>
                    </div>
                    <div className="flex font-medium py-1 text-[24px] items-center">
                        <span className="text-[#007038] text-2xl pr-4"><FaCheckCircle /></span>
                        {/* To establish strategic partnership in the agriculture, dairy, veterinary and horticulture industry */}
                        <div>

                            <p className="font-extralight"><strong className="font-bold">Knowledge Exchange:</strong> To facilitate cross-platform learning and appreciate groundbreaking technological developments in the field
                            </p>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="w-full bg-white pt-20 pb-8 px-4 overflow-hidden">
                        <div className="flex items-center justify-center gap-1 md:gap-2 flex-wrap md:flex-nowrap">
                            {/* Left Trees Pattern */}
                            <div className="flex gap-1 md:gap-2 text-green-700 text-lg md:text-2xl">
                                {[...Array(30)].map((_, i) => (
                                    <TreeSymbol key={`left-${i}`} />
                                ))}
                            </div>

                            {/* Main Text */}
                            <h1 className="text-center font-bold text-xl md:text-3xl lg:text-[38.7px] text-green-700 mx-4 whitespace-nowrap">
                                {/* AGRI WORLD EXPO AIMS TO */}
                                Why Join Us?
                            </h1>

                            {/* Right Trees Pattern */}
                            <div className="flex gap-1 md:gap-2 text-green-700 text-lg md:text-2xl">
                                {[...Array(30)].map((_, i) => (
                                    <TreeSymbol key={`right-${i}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="text-xl text-black font-medium py-5">The Khedutputra Krushi Melo is not just an exhibition; it is an experience designed to drive growth. Participants benefit from:</p>
                    <div className="flex font-medium py-1 text-[24px] items-start">
                        <span className="text-[#007038] text-2xl pr-4 pt-2"><FaCheckCircle /></span>
                        {/* Promoting and Making Awareness about Organic Farming */}
                        <div>

                            <p className="font-extralight"><strong className="font-bold"> Direct Interaction:</strong> Connect with buyers, processors, and exporters for better price realization.</p>
                        </div>
                    </div>

                    <div className="flex font-medium py-1 text-[24px] items-center">
                        <span className="text-[#007038] text-2xl pr-4"><FaCheckCircle /></span>
                        {/* Role of Renewable Energy into Agriculture Industries */}
                        <div>

                            <p className="font-extralight"><strong className="font-bold"> Skill Enhancement:</strong> Attend seminars on advancements in farm technology and government initiatives</p>
                        </div>
                    </div>
                    <div className="flex font-medium py-1 text-[24px] items-center">
                        <span className="text-[#007038] text-2xl pr-4"><FaCheckCircle /></span>
                        {/* Sustainable Farming through Innovation and Technology */}
                        <div>

                            <p className="font-extralight"><strong className="font-bold"> Industry Expansion:</strong>  Explore potential collaborations and investment opportunities in the dairy and livestock sectors
                            </p>
                        </div>
                    </div>

                    <p className="text-xl text-black font-medium py-5"><strong className="font-bold"> "When the Farmer Grows, the Nation Grows."</strong> Experience the future of farming at the
                        Khedutputra Krushi Melo, where tradition meets innovation. </p>
                </div>
            </div>
        </>
    );
};

export default AboutAgriWorldExpo;
