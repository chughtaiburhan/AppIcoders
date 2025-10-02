import React, { useRef, useState, useEffect, useCallback } from 'react';
import type { FC } from 'react';
// Define the interface for a single industry item to ensure type safety
interface IndustryItem {
  id: number;
  icon: React.ReactElement;
  title: string;
  description: string;
}

// Data array using the defined interface
const industryData: IndustryItem[] = [
  {
    id: 1,
    icon: (
      <svg className="w-12 h-12 text-red-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.275a1.125 1.125 0 011.079 0c.75.421 1.247 1.282 1.247 2.197V19.5c0 1.38-1.12 2.5-2.5 2.5h-15c-1.38 0-2.5-1.12-2.5-2.5V8.422c0-.915.497-1.776 1.247-2.197a1.125 1.125 0 011.079 0L12 10.47l-6.38-3.649c-.75-.421-1.247-.282-1.247-.197V19.5c0 1.38 1.12 2.5 2.5 2.5h15c1.38 0 2.5-1.12 2.5-2.5V8.422z"></path>
      </svg>
    ),
    title: 'Medical & Pharma Services',
    description: 'We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.',
  },
  {
    id: 2,
    icon: (
      <svg className="w-12 h-12 text-red-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.974 2.888a1 1 0 00-.364 1.118l1.519 4.674c.3.921-.755 1.688-1.539 1.118l-3.974-2.888a1 1 0 00-1.176 0l-3.974 2.888c-.784.57-1.838-.197-1.539-1.118l1.519-4.674a1 1 0 00-.364-1.118L2.982 9.098c-.783-.57-.381-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.519-4.674z"></path>
      </svg>
    ),
    title: 'Training & Fitness',
    description: 'We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.',
  },
  {
    id: 3,
    icon: (
      <svg className="w-12 h-12 text-red-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h10m-9 4h8a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2z"></path>
      </svg>
    ),
    title: 'Fintech',
    description: 'We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.',
  },
  {
    id: 4,
    icon: (
      <svg className="w-12 h-12 text-red-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
      </svg>
    ),
    title: 'Health & Fitness',
    description: 'We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.',
  },
  {
    id: 5,
    icon: (
      <svg className="w-12 h-12 text-red-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.542 23.542 0 0112 15c-1.748 0-3.476-.234-5.145-.687m.002 12.019l-.974-2.857m-4.321-1.28l-.348-1.018a.633.633 0 01.3-.807l1.09-.646a2.636 2.636 0 001.3-.807l1.09-.646a.633.633 0 01.3-.807l1.09-.646a2.636 2.636 0 001.3-.807l1.09-.646a.633.633 0 01.3-.807l1.09-.646a2.636 2.636 0 001.3-.807l1.09-.646a.633.633 0 01.3-.807l1.09-.646a2.636 2.636 0 001.3-.807l1.09-.646a.633.633 0 01.3-.807l1.09-.646a2.636 2.636 0 001.3-.807l1.09-.646a.633.633 0 01.3-.807l.974-2.857m-4.321-1.28l-.348-1.018a.633.633 0 01.3-.807l1.09-.646a2.636 2.636 0 001.3-.807l1.09-.646a.633.633 0 01.3-.807l1.09-.646a2.636 2.636 0 001.3-.807l1.09-.646a.633.633 0 01.3-.807l1.09-.646a2.636 2.636 0 001.3-.807l1.09-.646a.633.633 0 01.3-.807l.974-2.857"></path>
      </svg>
    ),
    title: 'Business & Services',
    description: 'We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.',
  },
  {
    id: 6,
    icon: (
      <svg className="w-12 h-12 text-red-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
      </svg>
    ),
    title: 'Cleaning Services',
    description: 'We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.',
  },
];

// Use FC (Functional Component) for clarity
const Industries: FC = () => {
  // Ref for the scrollable container, typed as HTMLDivElement
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  // State for tracking the current slide index
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const totalSlides: number = industryData.length;

  // Function to scroll the container
  const scrollToSlide = (index: number): void => {
    const container = scrollContainerRef.current;
    if (container) {
      // Logic for calculating scroll position is unchanged
      const cardWidth = container.offsetWidth * 0.9166;
      const gap = 32;
      const scrollPosition = index * (cardWidth + gap);
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
      setCurrentSlide(index);
    }
  };

  // Navigation functions for buttons
  const goToNext = (): void => {
    const nextIndex = (currentSlide + 1);
    if (nextIndex < totalSlides) {
        scrollToSlide(nextIndex);
    }
  };

  const goToPrev = (): void => {
    const prevIndex = (currentSlide - 1);
    if (prevIndex >= 0) {
        scrollToSlide(prevIndex);
    }
  };
 
// Wrap handleScroll
const handleScroll = useCallback((): void => {
  const container = scrollContainerRef.current;
  if (container) {
    const scrollLeft: number = container.scrollLeft;
    const cardWidth: number = container.offsetWidth * (11 / 12);
    const gap: number = 32;
    const index: number = Math.round(scrollLeft / (cardWidth + gap));
    const safeIndex = Math.max(0, Math.min(index, totalSlides - 1));
    if (safeIndex !== currentSlide) {
      setCurrentSlide(safeIndex);
    }
  }
}, [currentSlide, totalSlides]);


 useEffect(() => {
  const container = scrollContainerRef.current;
  if (container) {
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }
}, [handleScroll]); // ✅ Safe now

  return (
    <section className="py-16 bg-[#eaedef] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          Industries We Serve
        </h2>

        <div className="relative">
          {/* Previous Button - visible only on small screens */}
          <button 
            onClick={goToPrev}
            className="hidden sm:block md:hidden absolute left-0 top-1/2 -mt-6 z-30 p-2 bg-red-600 text-white rounded-full shadow-lg transform -translate-x-1/2 hover:bg-red-700 disabled:opacity-50 transition"
            aria-label="Previous Industry"
            disabled={currentSlide === 0}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          
          {/* Next Button - visible only on small screens */}
          <button 
            onClick={goToNext}
            className="hidden sm:block md:hidden absolute right-0 top-1/2 -mt-6 z-30 p-2 bg-red-600 text-white rounded-full shadow-lg transform translate-x-1/2 hover:bg-red-700 disabled:opacity-50 transition"
            aria-label="Next Industry"
            disabled={currentSlide === totalSlides - 1}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>

          {/* Industries Grid/Carousel Container */}
          <div 
            ref={scrollContainerRef}
            className="
              flex overflow-x-scroll snap-x snap-mandatory scroll-smooth 
              md:grid md:grid-cols-2 lg:grid-cols-3 
              gap-8 pb-4 px-6 sm:py-5 -mx-4 sm:-mx-6 md:mx-0
              scrollbar-hide // Hides scrollbar on compatible browsers
            "
          >
            {/* Custom CSS to hide scrollbar in browsers that don't support tailwind's utility */}
            {/* REMOVED: jsx="true" to fix TypeScript error */}
            <style>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
              .scrollbar-hide {
                -ms-overflow-style: none; /* IE and Edge */
                scrollbar-width: none;  
              }
            `}</style>
            
            {industryData.map((industry: IndustryItem, index: number) => (
              <div 
                key={industry.id} 
                className={`
                  bg-white p-6 sm:p-8 rounded-lg shadow-md flex flex-col items-start 
                  transform transition duration-300 hover:scale-[1.02] hover:shadow-lg
                   flex-shrink-0 w-11/12 sm:w-[calc(50%-16px)] 
                  snap-center  
                  md:w-auto md:flex-shrink 
                  ${index === 1 || index === 4 ? 'border-b-4 border-red-600' : ''} 
                `}
              >
                <div className="icon-wrapper mb-4">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {industry.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>

          {/* Pagination Dots - visible only on mobile/sm for visual feedback */}
          <div className="flex justify-center mt-6 space-x-2 md:hidden">
            {industryData.map((_, index: number) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-red-600 w-4 h-4' : 'bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Industries;
