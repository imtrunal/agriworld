import React from 'react'
import { FaMicrochip } from "react-icons/fa";
import { FaRecycle } from "react-icons/fa";
import { FaIndustry } from "react-icons/fa";
import { FaNutritionix } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { FaSolarPanel } from "react-icons/fa";
import { FaFilePowerpoint } from "react-icons/fa";

const Growth = () => {
  return (
    <>
      <div>
        <div className='max-w-[1440px] mx-auto font-khand pb-5'>
          <div className="bg-[#DFFFEF]">
            <h1 className="font-khand font-bold text-4xl text-[#007038] text-center py-10">ADVANTAGES AND BENEFITS FOR PARTICIPANTS</h1>
          </div>


          <div className='py-8 px-5'>
            <h1 className='text-[34px] font-bold'>Attend Seminars On</h1>

            <div className='grid md:grid-cols-2 grid-cols-1 py-4'>
              <div>
                <div className="flex font-medium text-[#54595F] py-2 text-[22px] items-center">
                  <span className="text-[#007038] text-3xl pr-4"><FaMicrochip /></span>
                  Advancements & innovations in farm technologies
                </div>

                <div className="flex font-medium text-[#54595F] py-2 text-[22px] items-center">
                  <span className="text-[#007038] text-3xl pr-4"><FaRecycle /></span>
                  Sustainable farming & their benefits
                </div>

                <div className="flex font-medium text-[#54595F] py-2 text-[22px] items-center">
                  <span className="text-[#007038] text-3xl pr-4"><FaIndustry /></span>
                  Plasticulture, Horticulture & Irrigation system
                </div>

                <div className="flex font-medium text-[#54595F] py-2 text-[22px] items-center">
                  <span className="text-[#007038] text-3xl pr-4"><FaNutritionix /></span>
                  Crop protection & nutrition
                </div>
              </div>

              <div>
                <div className="flex font-medium text-[#54595F] py-2 text-[22px] items-center">
                  <span className="text-[#007038] text-3xl pr-4"><FaRocket /></span>
                  Revolution in dairy technology & cooperatives
                </div>

                <div className="flex font-medium text-[#54595F] py-2 text-[22px] items-center">
                  <span className="text-[#007038] text-3xl pr-4"><FaSolarPanel /></span>
                  Renewable Energy
                </div>

                <div className="flex font-medium text-[#54595F] py-2 text-[22px] items-center">
                  <span className="text-[#007038] text-3xl pr-4"><FaFilePowerpoint /></span>
                  Government policies & initiatives
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className='max-w-[1440px] mx-auto font-khand py-10'>
          <div className="bg-[#DFFFEF]">
            <h1 className="font-khand font-bold text-4xl text-[#007038] text-center py-10">FUTURE OF FARMING IS HERE !</h1>
          </div>

          <div className='py-8 px-5'>
            <div className='md:flex justify-between gap-12'>
              <div>
                <h2 className='text-[#007038] font-bold text-[28px] py-3 mt-10'>Agriculture Equipment</h2>
                <p className='text-[20px]'><strong>Discover a world of innovation here. Explore the latest in agricultural technology, from advanced tractors and allied machinery to precision farming tools.</strong></p>
              </div>

              <div>
                <h2 className='text-[#007038] font-bold text-[28px] py-3 mt-10'>Crop Protection & Nutrition</h2>
                <p className='text-[20px]'><strong>It offers a unique opportunity to learn about the latest advancements in crop protection and nutrition, connect with industry experts, discover innovative solutions, and a lot more.</strong></p>
              </div>
            </div>


            <div className='md:flex justify-between gap-12 pt-5'>
              <div>
                <h2 className='text-[#007038] font-bold text-[28px] py-3 mt-10'>Dairy</h2>
                <p className='text-[20px]'><strong>Revolutionize your dairy business with the right tools and solutions. From state-of-the-art milking machines to expert veterinary care, here you will get everything to enhance dairy production.</strong></p>
              </div>

              <div>
                <h2 className='text-[#007038] font-bold text-[28px] py-3 mt-10'>Others</h2>
                <p className='text-[20px]'><strong>Explore beyond agriculture with a wide range of products and services. From renewable energy solutions to water harvesting techniques, irrigation systems to banking & finance, find everything you need in one place.</strong></p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Growth