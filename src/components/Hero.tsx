import { ChevronLeft, ChevronRight } from 'lucide-react';
import PhoneImg from "../../public/Mobile-Mockup 1.svg";
import VetorImage from "../../public/assets/Group 169.svg";
import Button from './Button';
import Navbar from './Navbar';

const Hero: React.FC = () => {
  return (
<div className="relative w-full min-h-screen overflow-hidden ">
  {/* Background SVG */}
  <div className="absolute inset-0 z-0">
    <img src={VetorImage} alt="" className="w-full h-full object-cover" />
  </div>

  {/* Navbar */}
  <div className="relative z-10 p-4"> 
    <Navbar/> 
  </div>

  {/* Content */}
  <div className="relative  container  px-4 sm:px-6 lg:px-8 py-12 lg:py-4 z-0">
    <div className="grid lg:grid-cols-2 m-0 gap-2 lg:gap-0 items-center min-h-[calc(100vh-6rem)]">
      
      {/* Left Side - Phone Mockups */}
      <div className="flex justify-center lg:justify-start order-2 lg:order-1">
        <img src={PhoneImg} height={450} width={450} alt="Phone" className="object-center" />
      </div>

      {/* Right Side - Content */}
      <div className="text-white order-1 lg:order-2 text-center lg:text-left">
        <h1 className="text-3xl  md:text-5xl font-bold leading-tight mb-6">
          Leading the Way in App Development Innovation
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-8 max-w-xl mx-auto lg:mx-0">
          We build Android & iOS Mobile Apps that cater all your business needs and take it on the next level.
        </p>
        <Button text="Get a Free Quote" padding="px-8 py-4" />

        {/* Navigation Arrows */}
        <div className=" hidden sm:flex gap-4 justify-center lg:justify-start lg:mt-40 lg:ml-[54%]">
          <button className="bg-white text-gray-900 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
            <ChevronLeft className="w-5 h-5 cursor-pointer" />
          </button>
          <button className="bg-white text-gray-900 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
            <ChevronRight className="w-5 h-5 cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Hero ;