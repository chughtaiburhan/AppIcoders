import React, { useState, useRef } from 'react';
// Assuming 'food-Img.svg' is your blurred background image
import FoodBgImg from "../../public/food-Img.svg"; 
// Assuming you have phone mockup images
import PhoneMockup1 from "../../public/assets/phone1.svg"; 
import PhoneMockup2 from "../../public/assets/phone1.svg"; // Changed one import to differentiate mockups
import PhoneMockup3 from "../../public/assets/phone1.svg"; // Changed one import to differentiate mockups
import AppstoreImg from "../../public/assets/appstore-Img.svg";
import GoogleplayImg from "../../public/assets/GooglePlaystore-Img.svg";
import Button from './Button'; 
import { ChevronUp, ChevronDown } from 'lucide-react';

// Define the structure for a single phone mockup data object
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
  // State to track the current index for desktop (vertical) carousel
  const [currentIndex, setCurrentIndex] = useState(0); 
  // Ref for the carousel container to access the DOM element
  const carouselRef = useRef<HTMLDivElement>(null); 
  // Total number of items
  const totalItems = phoneMockupsData.length;

const scrollToItem = (index: number) => {
  if (carouselRef.current) {
    const container = carouselRef.current;
    const item = container.children[index] as HTMLElement;
    if (item) {
      // Calculate the vertical offset of the item relative to container
      const containerHeight = container.clientHeight;
      const itemOffsetTop = item.offsetTop;
      const itemHeight = item.clientHeight;

      // Scroll so that the item is centered in container
      const scrollTop = itemOffsetTop - containerHeight / 2 + itemHeight / 2;
      container.scrollTo({
        top: scrollTop,
        behavior: 'smooth',
      });
    }
  }
};


const handlePrev = () => {
  const newIndex = (currentIndex + 1) % totalItems; // Up arrow = next item
  setCurrentIndex(newIndex);
  scrollToItem(newIndex);
};

const handleNext = () => {
  const newIndex = (currentIndex - 1 + totalItems) % totalItems; // Down arrow = previous item
  setCurrentIndex(newIndex);
  scrollToItem(newIndex);
};


  // Optional: Add a simple auto-play effect using useEffect
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     handleNext();
  //   }, 5000); // Change slide every 5 seconds
  //   return () => clearInterval(interval); // Cleanup on component unmount
  // }, [currentIndex]); // Re-run effect when currentIndex changes

  return (
    <section className="relative w-full flex items-center justify-center z-0 -mt-[42%] sm:-mt-[12%] polygon-shape-top pt-30 sm:pt-0">
      {/* 1. Background Food Image with Overlay (unchanged) */}
      <div className="absolute inset-0 z-10">
        <img 
          src={FoodBgImg} 
          alt="Blurred food background" 
          className="w-full h-full object-cover" 
        /> 
      </div>

      {/* 2. Main Content Container (unchanged) */}
      <div className="container mx-auto relative z-20 px-4 md:px-8 grid grid-cols-1 p-10 sm:p-0 md:grid-cols-2">
        {/* First grid (Content) */}
        <div className='flex flex-col justify-center  text-center sm:text-start items-center sm:items-start gap-6 md:gap-8 lg:gap-10 lg:mr-40 sm:mt-20'>
          <h2 className='text-3xl sm:text-4xl font-bold text-white leading-tight'>
Caviar - Order Food Delivery          </h2>
          <p className='text-white text-base sm:text-lg md:text-xl leading-relaxed'>
            Experience the fastest and most reliable food delivery service with our app. Order from your favorite restaurants and enjoy delicious meals delivered straight to your door.
          </p>
          <div className='flex flex-wrap gap-4 mt-2'>
            <img src={AppstoreImg} alt="Download on the App Store" className='w-auto h-12' />
            <img src={GoogleplayImg} alt="Get it on Google Play" className='w-auto h-12' />
          </div>
          <Button text="View Case Study" padding='px-8 py-3' />
        </div>

        {/* Second Grid (Carousel) */}
        <div className='flex flex-row md:justify-end justify-center items-center gap-20 '>
          {/* Carousel Container - Use ref here */}
          <div 
            ref={carouselRef}
            className='flex flex-row sm:flex-col justify-start sm:justify-center items-center  sm:space-y-20 mt-10 md:mt-0 gap-x-10 
                       // Styling for horizontal scroll on mobile
                       overflow-x-scroll snap-x snap-mandatory 
                        sm:overflow-x-hidden sm:overflow-y-hidden gap-10 sm:gap-0' 
            id="food-delivery-carousel"
          >
            {phoneMockupsData.map((mockup, index) => (
              <div 
                key={index}
                // Active styling for the current desktop view item
                className={`w-60 flex-shrink-0 snap-center md:snap-none transform transition-transform duration-300 opacity-90
                          ${index === currentIndex ? 'sm:opacity-100 sm:scale-110 sm:shadow-2xl mx-10' : ''}`}
              >
                  <div
    className='h-62 w-full  border border-gray-200 bg-transparent rounded-3xl object-container overflow-hidden'
    style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)' }}
    // Removed 'shadow-lg' from here
  >

                  <img
                    src={mockup.src}
                    alt={mockup.alt}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Arrow Button Icons (Desktop only control) */}
          <div className="hidden sm:flex flex-col justify-center items-center gap-4 mt-6">
    <div
      className="p-2 bg-white rounded-full shadow-lg cursor-pointer hover:scale-105 transition-transform"
      onClick={handlePrev} // Up arrow scrolls next item
    >
      <ChevronUp size={20} color="#FF5722" />
    </div>
    <div
      className="p-2 bg-white rounded-full shadow-lg cursor-pointer hover:scale-105 transition-transform"
      onClick={handleNext} // Down arrow scrolls previous item
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