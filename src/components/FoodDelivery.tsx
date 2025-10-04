import React, { useState, useRef } from 'react';
import FoodBgImg from "../assets/food-Img.svg";
import PhoneMockup1 from "../assets/phone1.svg";
import PhoneMockup2 from "../assets/phone1.svg";
import PhoneMockup3 from "../assets/phone1.svg";
import AppstoreImg from "../assets/appstore-Img.svg";
import GoogleplayImg from "../assets/GooglePlaystore-Img.svg";
import Button from './Button';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface PhoneMockupData {
  src: string;
  alt: string;
}

const phoneMockupsData: PhoneMockupData[] = [
  { src: PhoneMockup1, alt: "Food Delivery App Mockup 1" },
  { src: PhoneMockup2, alt: "Food Delivery App Mockup 2" },
  { src: PhoneMockup3, alt: "Food Delivery App Mockup 3" },
];

const FoodDelivery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const totalItems = phoneMockupsData.length;

const scrollToItem = (index: number) => {
  if (carouselRef.current) {
    const container = carouselRef.current;
    const item = container.children[index] as HTMLElement;
    if (item) {
      const containerHeight = container.clientHeight;
      const itemOffsetTop = item.offsetTop;
      const itemHeight = item.clientHeight;

      const scrollTop = itemOffsetTop - containerHeight / 2 + itemHeight / 2;
      container.scrollTo({
        top: scrollTop,
        behavior: 'smooth',
      });
    }
  }
};


const handlePrev = () => {
  const newIndex = (currentIndex + 1) % totalItems;
  setCurrentIndex(newIndex);
  scrollToItem(newIndex);
};

const handleNext = () => {
  const newIndex = (currentIndex - 1 + totalItems) % totalItems;
  setCurrentIndex(newIndex);
  scrollToItem(newIndex);
};


  return (
    <section className="relative w-full flex items-center justify-center z-0 -mt-[42%] sm:-mt-[12%] polygon-shape-top pt-30 sm:pt-0">
      <div className="absolute inset-0 z-10">
        <img 
          src={FoodBgImg} 
          alt="Blurred food background" 
          className="w-full h-full object-cover" 
          loading="lazy"
        /> 
      </div>

      <div className="container mx-auto relative z-20 px-4 md:px-8 grid grid-cols-1 p-10 sm:p-0 md:grid-cols-2">
        <div className='flex flex-col justify-center text-center sm:text-start items-center sm:items-start gap-6 md:gap-8 lg:gap-10 lg:mr-40 sm:mt-20'>
          <h2 className='text-3xl sm:text-4xl font-bold text-white leading-tight'>
Caviar - Order Food Delivery 
          </h2>
          <p className='text-white text-base sm:text-lg md:text-xl leading-relaxed'>
            Experience the fastest and most reliable food delivery service with our app. Order from your favorite restaurants and enjoy delicious meals delivered straight to your door.
          </p>
          <div className='flex flex-nowrap gap-4 mt-2'>
            <img 
              src={AppstoreImg} 
              alt="Download on the App Store" 
              className='w-auto h-12' 
              loading="lazy"
            />
            <img 
              src={GoogleplayImg} 
              alt="Get it on Google Play" 
              className='w-auto h-12' 
              loading="lazy"
            />
          </div>
          <Button text="View Case Study" padding='px-8 py-3' />
        </div>

        <div className='flex flex-row md:justify-end justify-center items-center gap-20 '>
          <div 
            ref={carouselRef}
            className='flex flex-row sm:flex-col justify-start sm:justify-center items-center sm:space-y-20 mt-10 md:mt-0 gap-x-10 
                         overflow-x-scroll snap-x snap-mandatory 
                         sm:overflow-x-hidden sm:overflow-y-hidden gap-10 sm:gap-0' 
            id="food-delivery-carousel"
          >
            {phoneMockupsData.map((mockup, index) => (
              <div 
                key={index}
                className={`w-60 flex-shrink-0 snap-center md:snap-none transform transition-transform duration-300 opacity-90
                           ${index === currentIndex ? 'sm:opacity-100 sm:scale-110 sm:shadow-2xl mx-10' : ''}`}
              >
                  <div
    className='h-62 w-full border border-gray-200 bg-transparent rounded-3xl object-container overflow-hidden'
    style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)' }}
  >

                  <img
                    src={mockup.src}
                    alt={mockup.alt}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="hidden sm:flex flex-col justify-center items-center gap-4 mt-6">
    <div
      className="p-2 bg-white rounded-full shadow-lg cursor-pointer hover:scale-105 transition-transform"
      onClick={handlePrev}
    >
      <ChevronUp size={20} color="#FF5722" />
    </div>
    <div
      className="p-2 bg-white rounded-full shadow-lg cursor-pointer hover:scale-105 transition-transform"
      onClick={handleNext}
    >
      <ChevronDown size={20} color="#FF5722" />
    </div>
  </div>

        </div>
      </div>
    </section>
  );
};

export default FoodDelivery;
