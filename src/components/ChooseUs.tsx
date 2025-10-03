import React, { useState, useCallback, useMemo } from "react";
import { Briefcase, Users, CreditCard, MoveRightIcon, MoveLeftIcon } from "lucide-react";

interface ChooseUsItem {
  icon: React.ElementType;
  title: string;
  desc: string;
  color: string;
}

const ChooseUs: React.FC = () => { 
  const chooseUs: ChooseUsItem[] = useMemo(() => [
    {
      icon: Briefcase,
      title: "Focused Business Approach",
      desc: "We research, plan, and execute - and these qualities make Appcoders stand out from the crowd. We put the needs clients ahead of us.",
      color: "text-gray-500 bg-gray-200",
    },
    {
      icon: Users,
      title: "Professional Team",
      desc: "Our mobile development company has extremely professional & expert mobileapp developers",
      color: "text-red-500 bg-red-100",
    },
    {
      icon: CreditCard,
      title: "Flexible Payment Terms",
      desc: "Get your apps developed with most affordable price and with our flexible payment terms.",
      color: "text-gray-500 bg-gray-200",
    },
    {
      icon: Briefcase,
      title: "Customer Satisfaction",
      desc: "We prioritize client satisfaction, ensuring that every project meets high-quality",
      color: "text-gray-500 bg-gray-200",
    },
    {
      icon: Users,
      title: "Innovative Solutions",
      desc: "Bringing fresh and creative ideas to every project, we develop cutting-edge solutions.",
      color: "text-red-500 bg-red-100",
    },
  ], []);

  const [activeIndex, setActiveIndex] = useState<number>(0);

   const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % chooseUs.length);
  }, [chooseUs.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + chooseUs.length) % chooseUs.length);
  }, [chooseUs.length]);

  const getItem = useCallback(
    (offset: number) => {
      let index = (activeIndex + offset) % chooseUs.length;
      if (index < 0) index += chooseUs.length;
      return { ...chooseUs[index], originalIndex: index };
    },
    [activeIndex, chooseUs]
  );

  const positions = [-1, 0, 1];

  return (
    <div className="bg-[#eaedef] py-16 text-gray-800 z-80">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Why Choose Us?
          </h2>
          <p className="text-lg md:text-xl text-black max-w-3xl mx-auto">
            With our unique approach and cost-effective solutions, your business will prosper because quality is the top priority for us.
          </p>
        </div>

        <div className="relative flex justify-center items-center min-h-[350px]">
          <button
            onClick={handlePrev}
            className="absolute left-0 md:-left-12 lg:-left-16 p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors z-20 focus:outline-none"
            aria-label="Previous item"
          > 
          <MoveLeftIcon className="cursor-pointer h-4 w-4 sm:h-6 sm:w-6" />
          </button>

          <div className="flex justify-center gap-4 md:gap-8 w-full">
            {positions.map((offset, idx) => {
              const item = getItem(offset);
              const isCenter = idx === 1;
return (
    <div
      key={item.originalIndex}
      className={`
        relative w-64 sm:w-72 lg:w-80 h-64 sm:h-72 lg:h-80 
        shadow-lg flex flex-col items-center justify-center 
        text-center p-6 transition-all duration-500 ease-out rounded-2xl sm:rounded-full
        ${isCenter
          ? "bg-white shadow-xl scale-105 z-10"
          : "bg-gray-100 opacity-70 scale-90 -translate-y-4 shadow-md hidden md:flex"
        }
      `}
    >
      <div
        className={`
          w-20 h-20 rounded-full flex items-center justify-center mb-6 
          transition-colors duration-500
          ${isCenter ? "text-red-500 bg-red-100" : "text-gray-400 bg-gray-200"}
        `}
      >
        <item.icon className="w-10 h-10" />
      </div>

      <h3 className={`text-xl font-bold mb-3 ${isCenter ? "text-black" : "text-gray-400"}`}>
        {item.title}
      </h3>

      <p className={`text-sm px-4 ${isCenter ? "text-black" : "text-gray-400"}`}>
        {item.desc}
      </p>
    </div>
  );
            })}
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 md:-right-12 lg:-right-16 p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors z-20 focus:outline-none"
            aria-label="Next item"
          > 
          <MoveRightIcon className="cursor-pointer h-4 w-4 sm:h-6 sm:w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
