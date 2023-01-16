import React from 'react'
import HeroImage from "../assets/heroImage.jpg"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800">
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
    <div className="flex flex-col justify-center h-full">
      <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Medical Doctor & Software Developer</h2>
      <p className="text-gray-500 py-4max-w-md">
      Medical officer with 3+ years of experience under my belt, basic surgical skills, proficient in software programming, article and research writing. 
      Fluent in English and Bini, with basic knowledge of Hausa, Tiv, French and Spanish. Also  In short, I'm a very versatile. 
      </p>
      <div>
        <button>
          Portfolio
          <span>
            <MdOutlineKeyboardArrowRight/>
          </span>
        </button>
      </div>
    </div>
    <div>
      <img src={HeroImage} alt="My profile" className="rounded-2xl mx-auto w-2/3 md:w-full"/>
    </div>
    </div>    
   </div>
  )
}

export default Home