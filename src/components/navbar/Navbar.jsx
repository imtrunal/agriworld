import React, { useState } from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaBars, FaTimes } from "react-icons/fa";
import { BsThreads } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleSubMenu = (menuName) => {
    setExpandedMenu(expandedMenu === menuName ? null : menuName);
  };

  return (
    <div className="w-full font-khand fixed top-0 left-0 z-50">

      {/* Top Info Bar */}
      <div className="bg-green-800 text-white text-sm">
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 grid-cols-1 justify-between items-center px-6 py-2">

          <div className="lg:flex flex-1 items-center gap-4">
            <div className="flex gap-1 lg:justify-start justify-center">
              <span className="bg-white py-1 text-green-800 px-2 font-semibold">11</span>
              <span className="bg-white py-1 text-green-800 px-2 font-semibold">12</span>
              <span className="bg-white py-1 text-green-800 px-2 font-semibold">13</span>
            </div>


            <div className="flex items-center gap-1 lg:pt-0 pt-2 lg:justify-start justify-center">
            <span className="lg:text-[16px] text-[15px] font-medium">April 2026</span>
              <IoLocationSharp />
              <span className="lg:text-[16px] text-[15px] font-semibold">
                Lathi Bypass, Amreli, Gujarat
              </span>
            </div>
          </div>

          {/* <div className="flex gap-4 text-lg md:justify-end justify-center lg:pt-0 pt-2">
            <FaInstagram className="cursor-pointer hover:text-gray-200" />
            <FaFacebookF className="cursor-pointer hover:text-gray-200" />
            <FaLinkedinIn className="cursor-pointer hover:text-gray-200" />
            <BsThreads className="cursor-pointer hover:text-gray-200" />
          </div> */}

        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center px-6">

          {/* Logo */}
          <Link to={"/"}>
            <img src="/assets/Logo-01.png" alt="logo1" className="h-22 w-25" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 font-semibold text-gray-800">

            <li className="text-[#007038] cursor-pointer hover:text-green-800 transition-colors">
              <Link to="/">
                Home
              </Link>
            </li>

            {/* Exhibitor Dropdown */}
            <li className="relative group">
              <div className="flex items-center cursor-pointer hover:text-[#007038] transition-colors py-2">
                Exhibitor
                <FaAngleDown className="ml-1 group-hover:rotate-180 transition-transform" />
              </div>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 pt-2 hidden group-hover:block">
                <div className="bg-white shadow-lg rounded-md w-48">
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-green-50 cursor-pointer text-gray-800 hover:text-[#007038] transition-colors">
                      <Link to="/exhibitors-profile"> Exhibitors' Profile</Link>
                    </li>
                    {/* <li className="px-4 py-2 hover:bg-green-50 cursor-pointer text-gray-800 hover:text-[#007038] transition-colors">
                      <Link to="/promotional-activities"> Promtional Activities</Link>
                    </li> */}
                    <li className="px-4 py-2 hover:bg-green-50 cursor-pointer text-gray-800 hover:text-[#007038] transition-colors">
                      <Link to="/esteemed-participants"> Esteemed Praticipants</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Visitor Dropdown */}
            <li className="relative group">
              <div className="flex items-center cursor-pointer hover:text-[#007038] transition-colors py-2">
                Visitor
                <FaAngleDown className="ml-1 group-hover:rotate-180 transition-transform" />
              </div>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 pt-2 hidden group-hover:block">
                <div className="bg-white shadow-lg rounded-md w-48">
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-green-50 cursor-pointer text-gray-800 hover:text-[#007038] transition-colors">
                      <Link to="/visitors-profile">Visitors' Profile</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-green-50 cursor-pointer text-gray-800 hover:text-[#007038] transition-colors">
                      <Link to="/visitor-registration" className="block w-full">
                        Visitor Registration
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* Downloads Dropdown */}
            <li className="relative group">
              <div className="flex items-center cursor-pointer hover:text-[#007038] transition-colors py-2">
                Downloads
                <FaAngleDown className="ml-1 group-hover:rotate-180 transition-transform" />
              </div>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 pt-2 hidden group-hover:block">
                <div className="bg-white shadow-lg rounded-md w-48">
                  <ul className="py-2">
                    <li onClick={() => window.open('/pdfs/layout.pdf', '_blank')} className="px-4 py-2 hover:bg-green-50 cursor-pointer text-gray-800 hover:text-[#007038] transition-colors">
                       Layout
                    </li>
                    <li className="px-4 py-2 hover:bg-green-50 cursor-pointer text-gray-800 hover:text-[#007038] transition-colors" onClick={() => window.open('/pdfs/Brochure.pdf', '_blank')}>
                       Brochure
                    </li>
                    {/* <li className="px-4 py-2 hover:bg-green-50 cursor-pointer text-gray-800 hover:text-[#007038] transition-colors" onClick={() => window.open('/pdfs/brochure-gujarati.pdf', '_blank')}>Brochure (Gujarati)
                    </li> */}
                  </ul>
                </div>
              </div>
            </li>

            {/* <li className="cursor-pointer hover:text-[#007038] transition-colors">
              <Link to="/gallery"> Gallery</Link>
            </li> */}

            {/* About Dropdown */}
            <li className="relative group">
              <div className="flex items-center cursor-pointer hover:text-[#007038] transition-colors py-2">
                About
                <FaAngleDown className="ml-1 group-hover:rotate-180 transition-transform" />
              </div>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 pt-2 hidden group-hover:block">
                <div className="bg-white shadow-lg rounded-md w-48">
                  <ul className="py-2">
                    <li className="px-4 py-2 hover:bg-green-50 cursor-pointer text-gray-800 hover:text-[#007038] transition-colors">
                      <Link to="/about">About Khedutputra Krushi Melo</Link>
                    </li>
                    {/* <li className="px-4 py-2 hover:bg-green-50 cursor-pointer text-gray-800 hover:text-[#007038] transition-colors">
                      <Link to="/about-spark-media"> About Spark Media</Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </li>

            <li className="cursor-pointer hover:text-[#007038] transition-colors">
              <Link to="/contact">Contact Us</Link>
            </li>

          </ul>

          {/* Mobile Menu Button */}
          <div
            className="lg:hidden text-2xl cursor-pointer"
            onClick={() => {
              setMobileMenu(!mobileMenu);
              setExpandedMenu(null);
            }}
          >
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </div>

        </div>

        {/* Mobile Slide Menu - Drawer */}
        <div
          className={`fixed top-0 left-0 h-screen bg-white w-[320px] shadow-lg transform transition-transform duration-300 ease-in-out z-40 lg:hidden ${
            mobileMenu ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <FaTimes
              className="text-2xl border border-[#007038] p-1 rounded text-[#007038] cursor-pointer"
              onClick={() => {
                setMobileMenu(false);
                setExpandedMenu(null);
              }}
            />
          </div>

          {/* Menu Items */}
          <ul className="flex flex-col font-semibold text-gray-800 px-4">
            
            {/* Home */}
            <li
              className="py-3 text-[#007038] border-b border-gray-200 cursor-pointer hover:text-[#007038] transition-colors"
              onClick={() => {
                setMobileMenu(false);
                setExpandedMenu(null);
              }}
            >
              <Link to="/">Home</Link>
            </li>

            {/* Exhibitor with Submenu */}
            <li className="border-b border-gray-200">
              <div
                className="py-3 cursor-pointer hover:text-[#007038] transition-colors flex justify-between items-center"
                onClick={() => toggleSubMenu('exhibitor')}
              >
                <span>Exhibitor</span>
                <FaAngleDown
                  className={`transition-transform ${
                    expandedMenu === 'exhibitor' ? 'rotate-180' : ''
                  }`}
                />
              </div>

              {/* Submenu */}
              {expandedMenu === 'exhibitor' && (
                <div className="bg-gray-50 pl-4">
                  <div
                    className="py-2 text-gray-700 hover:text-[#007038] cursor-pointer text-sm"
                    onClick={() => {
                      setMobileMenu(false);
                      setExpandedMenu(null);
                    }}
                  >
                    <Link to="/exhibitors-profile">Exhibitors' Profile</Link>
                  </div>
                  <div
                    className="py-2 text-gray-700 hover:text-[#007038] cursor-pointer text-sm"
                    onClick={() => {
                      setMobileMenu(false);
                      setExpandedMenu(null);
                    }}
                  >
                    <Link to="/promotional-activities">Promtional Activities</Link>
                  </div>
                  <div
                    className="py-2 text-gray-700 hover:text-[#007038] cursor-pointer text-sm"
                    onClick={() => {
                      setMobileMenu(false);
                      setExpandedMenu(null);
                    }}
                  >
                    <Link to="/esteemed-participants">Esteemed Praticipants</Link>
                  </div>
                </div>
              )}
            </li>

            {/* Visitor with Submenu */}
            <li className="border-b border-gray-200">
              <div
                className="py-3 cursor-pointer hover:text-[#007038] transition-colors flex justify-between items-center"
                onClick={() => toggleSubMenu('visitor')}
              >
                <span>Visitor</span>
                <FaAngleDown
                  className={`transition-transform ${
                    expandedMenu === 'visitor' ? 'rotate-180' : ''
                  }`}
                />
              </div>

              {/* Submenu */}
              {expandedMenu === 'visitor' && (
                <div className="bg-gray-50 pl-4">
                  <div
                    className="py-2 text-gray-700 hover:text-[#007038] cursor-pointer text-sm"
                    onClick={() => {
                      setMobileMenu(false);
                      setExpandedMenu(null);
                    }}
                  >
                    <Link to="/visitors-profile">Visitors' Profile</Link>
                  </div>
                  <div
                    className="py-2 text-gray-700 hover:text-[#007038] cursor-pointer text-sm"
                    onClick={() => {
                      setMobileMenu(false);
                      setExpandedMenu(null);
                    }}
                  >
                    <Link to="/visitor-registration">Visitor Registration</Link>
                  </div>
                </div>
              )}
            </li>

            {/* Downloads with Submenu */}
            <li className="border-b border-gray-200">
              <div
                className="py-3 cursor-pointer hover:text-[#007038] transition-colors flex justify-between items-center"
                onClick={() => toggleSubMenu('downloads')}
              >
                <span>Downloads</span>
                <FaAngleDown
                  className={`transition-transform ${
                    expandedMenu === 'downloads' ? 'rotate-180' : ''
                  }`}
                />
              </div>

              {/* Submenu */}
              {expandedMenu === 'downloads' && (
                <div className="bg-gray-50 pl-4">
                  <div
                    className="py-2 text-gray-700 hover:text-[#007038] cursor-pointer text-sm"
                    onClick={() => {
                      window.open('/pdfs/layout.pdf', '_blank');
                      setMobileMenu(false);
                      setExpandedMenu(null);
                    }}
                  >
                    <Link to="">Layout</Link>
                  </div>
                  <div
                    className="py-2 text-gray-700 hover:text-[#007038] cursor-pointer text-sm"
                    onClick={() => {
                      window.open('/pdfs/Brochure.pdf', '_blank');
                      setMobileMenu(false);
                      setExpandedMenu(null);
                    }}
                  >
                    <Link to="">Brochure</Link>
                  </div>
                  <div
                    className="py-2 text-gray-700 hover:text-[#007038] cursor-pointer text-sm"
                    onClick={() => {
                      window.open('/pdfs/brochure-gujarati.pdf', '_blank');
                      setMobileMenu(false);
                      setExpandedMenu(null);
                    }}
                  >
                    <Link to="">Brochure (Gujarati)</Link>
                  </div>
                </div>
              )}
            </li>

            {/* Gallery */}
            <li
              className="py-3 border-b border-gray-200 cursor-pointer hover:text-[#007038] transition-colors"
              onClick={() => {
                setMobileMenu(false);
                setExpandedMenu(null);
              }}
            >
              <Link to="/gallery">Gallery</Link>
            </li>

            {/* About with Submenu */}
            <li className="border-b border-gray-200">
              <div
                className="py-3 cursor-pointer hover:text-[#007038] transition-colors flex justify-between items-center"
                onClick={() => toggleSubMenu('about')}
              >
                <span>About</span>
                <FaAngleDown
                  className={`transition-transform ${
                    expandedMenu === 'about' ? 'rotate-180' : ''
                  }`}
                />
              </div>

              {/* Submenu */}
              {expandedMenu === 'about' && (
                <div className="bg-gray-50 pl-4">
                  <div
                    className="py-2 text-gray-700 hover:text-[#007038] cursor-pointer text-sm"
                    onClick={() => {
                      setMobileMenu(false);
                      setExpandedMenu(null);
                    }}
                  >
                    <Link to="/about">About Khedutputra Krushi Melo</Link>
                  </div>
                  <div
                    className="py-2 text-gray-700 hover:text-[#007038] cursor-pointer text-sm"
                    onClick={() => {
                      setMobileMenu(false);
                      setExpandedMenu(null);
                    }}
                  >
                    <Link to="/about-spark-media">About Spark Media</Link>
                  </div>
                </div>
              )}
            </li>

            {/* Contact Us */}
            <li
              className="py-3 border-b border-gray-200 cursor-pointer hover:text-[#007038] transition-colors"
              onClick={() => {
                setMobileMenu(false);
                setExpandedMenu(null);
              }}
            >
              <Link to="/contact">Contact Us</Link>
            </li>

          </ul>
        </div>

        {/* Backdrop */}
        {mobileMenu && (
          <div
            className="fixed inset-0 bg-black/30 bg-opacity-90 z-30 lg:hidden"
            onClick={() => {
              setMobileMenu(false);
              setExpandedMenu(null);
            }}
          />
        )}
      </div>

    </div>
  );
};

export default Navbar;