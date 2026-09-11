import React, { useEffect }  from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import { Player } from "@lottiefiles/react-lottie-player";
import lottieAnimation from "../assets/lottie.json"
import AboutSection from "../components/AboutSection";
import CommunitySection from "../components/CommunitySection";
import HomeCardsDesign from "../components/HomeCardsDesign";
import NewsSlider from "../components/NewsSlider";


export default function Home() {
  useEffect(() => {
    Aos.init({
        duration: 1000,
        once: true,
    })
}, [])
    return (
<>
<div
  style={{
    backgroundImage: `url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2400&q=80")`,
  }}
  data-aos="flip-up"
  className="w-full relative flex flex-col overflow-hidden lg:overflow-visible"
>
        {/* Main Content Section */}
        <div className="max-w-6xl mx-auto w-full py-20 lg:py-32 px-8 z-40">
          <div className="w-full lg:w-2/3 flex flex-col gap-8">
            {/* Funding Badge */}
            <div> 
              <a 
                href="/elevate" 
                className="inline-flex items-center gap-2 rounded-full border shadow-sm px-3 pr-5 py-2 bg-white"
              >
                <span className="text-xs font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-2 py-0.5 rounded-full">
                  OPEN
                </span>
                <a href="/about">

                <span className="font-semibold whitespace-nowrap text-sm lg:text-base">
                  BOT Chain Mainnet is live now
                </span>
                </a>
 
              </a>
            </div>
  
            {/* Hero Text */}
            <p className="font-bold text-5xl lg:text-[90px] flex flex-col">
              <span className="whitespace-nowrap">New Life</span>
              <span>On BOT Chain </span>
            </p>
  
            {/* Description */}
            <p className="font-medium lg:text-lg text-[#404056] max-w-md">
            MediVaultX is a secure electronic health management system for managing and accessing health records quickly on BOT Chain.</p>
  
            {/* CTA Button */}
            <div className="flex items-center gap-8">
              <a 
                href="/viewHospital" 
                target="_blank"
                className="bg-black font-semibold py-3 px-5 text-white rounded-full hover:bg-gray-900 transition-colors"
              >
                View Hospitals
              </a>
            </div>
          </div>
        </div>
  
        {/* Shadow Divider */}
        <div className="mt-auto w-full hero-top-shadow h-1 z-50">&nbsp;</div>
  
        {/* Hero Image */}
        <div className="absolute mr-[5vw]  top-0 lg:right-0 -right-40 translate-x-1/2 lg:translate-x-0 lg:flex z-10">
          <Player
            autoplay
            loop
            src={lottieAnimation}
            style={{width:"36vw" }}
          />
        </div>
  
        {/* Background Decorative Elements */}
     
      </div>
      <HomeCardsDesign></HomeCardsDesign>
        <CommunitySection></CommunitySection>
        <NewsSlider></NewsSlider>
        <AboutSection></AboutSection>
      </>
    )
  }