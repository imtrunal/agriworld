import React from 'react'
// import ImageGallary from '../components/ImageGallary/ImageGallary'
import FutureFarmingSlider from '../components/FutureFarmingSlider/FutureFarmingSlider'
import ProudExhibitors from '../components/ProudExhibitors/ProudExhibitors'
import HeroSection from '../components/hero-sec/HeroSection'
import Advantages from '../components/Advantages/Advantages'
import Growth from '../components/Growth/Growth'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <Advantages/>
    <Growth/>
    <FutureFarmingSlider/>
    {/* <ImageGallary/> */}
    <ProudExhibitors/>
    </>
  )
}

export default Home