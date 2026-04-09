import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaFacebookF } from "react-icons/fa";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [charCount, setCharCount] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (name === "message") {
            setCharCount(value.length);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation
        if (
            !formData.name ||
            !formData.phone
        ) {
            alert("Please fill in all required fields");
            return;
        }

        // Show success message
        setSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setFormData({
                name: "",
                phone: "",
                message: "",
            });
            setCharCount(0);
            setSubmitted(false);
        }, 3000);

        console.log("Form Data:", formData);
    };

    if (submitted) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
                <div className="text-center">
                    <FaCheckCircle className="text-green-600 text-6xl mx-auto mb-4" />
                    <p className="text-2xl font-bold text-gray-800 mb-2">Success!</p>
                    <p className="text-gray-600">
                        Your message has been sent successfully.
                    </p>
                </div>
            </div>
        );
    }
    return (
        <>
            <div className=" mx-auto mt-30 py-28 px-5 font-khand">
                {/* Header */}
                <div className="text-center mb-12 font-khand">
                    <h1 className="text-[40px] font-bold text-[#007038] mb-6 tracking-tight">
                        Glimpses of the Past
                    </h1>
                    <div className="w-96 h-[1px] bg-[#2F3840] mx-auto mb-2"></div>
                </div>
                {/* <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-20"> */}
                <div className="grid md:grid-cols-2 grid-cols-1 border border-gray-50 shadow-lg">
                    <div>
                        <div className="bg-gray-50 p-8">
                            <div className="mb-8">
                                <p className="!text-[24px] md:text-4xl font-bold text-[#007038]  mb-2">
                                    Contact Us Form for Exhibitors
                                </p>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Field */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Name <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your full name"
                                        className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-green-600 focus:outline-none bg-transparent text-gray-800 placeholder-gray-400 transition-colors"
                                    />
                                </div>

                                {/* Phone Number */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Your phone number"
                                        className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-green-600 focus:outline-none bg-transparent text-gray-800 placeholder-gray-400 transition-colors"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Message <span className="text-red-600">*</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Your message here..."
                                        rows="5"
                                        className="w-full px-4 py-3 border border-gray-300 focus:border-green-600 focus:outline-none bg-white text-gray-800 placeholder-gray-400 transition-colors rounded"
                                    />
                                    <div className="text-right text-xs text-gray-500 mt-1">
                                        {charCount}/500
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div>
                                    <button
                                        type="submit"
                                        className=" bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded transition-colors duration-200"
                                    >
                                        SEND MESSAGE
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="p-10">
                        <div className="mb-8">
                            <p className="!text-[24px] md:text-4xl font-bold text-[#007038]  mb-2">
                                Contact Us
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-10">
                            <div className="flex">
                                <div className="bg-[#FF5E1424] flex items-center justify-center w-10 h-10 rounded-full ">
                                    <span className="text-[#007038] text-center text-[20px] "><MdCall /></span>
                                </div>

                                <div className="text-black font-medium  pl-4">
                                    <h4 className="text-[#007038] font-bold text-[18px]">Call Us</h4>
                                    <p><button>+91 85669784527</button></p>
                                    <p><button>+91 85669784527</button></p>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="bg-[#FF5E1424] flex items-center justify-center w-10 h-10 rounded-full ">
                                    <span className="text-[#007038] text-center text-[20px] "><FaLocationDot /></span>
                                </div>

                                <div className="text-black font-medium  pl-4">
                                    <h4 className="text-[#007038] font-bold text-[18px]">Our Location</h4>
                                    <p className="max-w-[120px]">Spark Media,
                                        1116, 11th floor,
                                        Maple Trade Center,
                                        Memnagar, Ahmedabad,
                                        Gujarat - 380007, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex py-5 mt-4">
                            <div className="bg-[#FF5E1424] flex items-center justify-center w-10 h-10 rounded-full ">
                                <span className="text-[#007038] text-center text-[20px] "><IoMail /></span>
                            </div>

                            <div className="text-black font-medium  pl-4">
                                <h4 className="text-[#007038] font-bold text-[18px]">Our Email</h4>
                                <p><strong>For Sales:</strong> sales@agriworldexpo.in</p>
                                <p><strong>For General Inquiries:</strong>info@agriworldexpo.in</p>
                            </div>
                        </div>

                        {/* <div>
                            <h1>Follow Us</h1>

                            <div>

                            </div>
                        </div> */}

                        <div className="flex flex-col items-start gap-8 py-12">
                            {/* Title */}
                            <h2 className="text-3xl md:text-4xl font-bold text-[#007038] ">Follow Us</h2>

                            {/* Social Icons */}
                            <div className="flex gap-6">
                                {/* Instagram */}
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-9.75 h-9.75 bg-[#007038] hover:bg-green-700 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
                                >
                                    <FaInstagram className="text-white text-xl" />
                                </a>

                                {/* Facebook */}
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-9.75 h-9.75 bg-[#007038] hover:bg-green-700 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
                                >
                                    <FaFacebookF className="text-white text-xl" />
                                </a>

                                {/* YouTube */}
                                <a
                                    href="https://youtube.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-9.75 h-9.75 bg-[#007038] hover:bg-green-700 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
                                >
                                    <FaYoutube className="text-white text-xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-5">
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7342.091458986089!2d72.5282394935791!3d23.05878500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83abf6018285%3A0xd0529842a889990f!2sAM%20Spark%20Media!5e0!3m2!1sen!2sin!4v1773057286558!5m2!1sen!2sin" width="100%" height="800" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3692.8947451711847!2d70.790568!3d22.244072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDE0JzM4LjciTiA3MMKwNDcnMjYuMCJF!5e0!3m2!1sen!2sin!4v1775565106191!5m2!1sen!2sin" width="100%" height="800" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            {/* </div> */}
        </>
    );
};

export default ContactUs;
