import awards1 from "../assets/award1.svg";
import awards2 from "../assets/award2.svg";
import awards3 from "../assets/award3.svg";
import awards4 from "../assets/award4.svg";

interface AwardsData {
  id: number;
  logoSrc: string;
  logoAlt: string;
  description: string;
  isFeatured: boolean;
  textBelow: string;
}

const awardsData: AwardsData[] = [
  {
    id: 1,
    logoSrc: awards1,
    logoAlt: "ITFirms Award",
    description: "Top Mobile App Development Company",
    isFeatured: false,
    textBelow: "2019",
  },
  {
    id: 2,
    logoSrc: awards2,
    logoAlt: "Top Mobile App Developers 2020",
    description:
      "Top Developers mentioned us in their top app development companies in the USA list.",
    isFeatured: true,
    textBelow: "Top Mobile App Developers 2020",
  },
  {
    id: 3,
    logoSrc: awards3,
    logoAlt: "Clutch React Native Developers",
    description: "TOP REACT NATIVE DEVELOPERS",
    isFeatured: false,
    textBelow: "Alberta 2019",
  },
  {
    id: 4,
    logoSrc: awards4,
    logoAlt: "Appfutura Top Mobile App",
    description: "TOP MOBILE APP DEVELOPMENT COMPANIES",
    isFeatured: false,
    textBelow: "appfutura",
  },
  {
    id: 5,
    logoSrc: awards4,
    logoAlt: "Extra Award 5",
    description: "Excellence in Innovation",
    isFeatured: false,
    textBelow: "2021",
  },
];


const Awards = () => {
    return (
        <section className="relative pt-8 pb-20 bg-gray-50 overflow-hidden">  

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Title */}
                <h5 className="text-4xl md:text-5xl font-bold text-black text-center mb-5 sm:mb-16 mt-8">
                    Awards and Recognitions
                </h5> 
                <div 
                    className={`
                        flex items-start gap-12 md:gap-16 
                        
                        // CAROUSEL CLASSES (DEFAULT: MOBILE)
                        overflow-x-scroll overflow-y-hidden // Enable horizontal scrolling
                        flex-nowrap // Force items onto one line
                        justify-start // Start at the beginning
                        py-4 px-4 // Padding to see scroll indicator/shadows
                        snap-x snap-mandatory // Enable native-like scroll snapping (key for smooth carousel)
                        // Add 'scrollbar-hide' here if you use a plugin

                        // GRID CLASSES (SM AND UP: OVERRIDE)
                        sm:flex-wrap sm:justify-center // Switch back to wrapping and centering
                        sm:overflow-x-visible sm:overflow-y-visible // Disable scrolling
                        sm:snap-none // Disable snapping
                    `}
                >
                    {awardsData.map((award) => (
                        <div
                            key={award.id}
                            className={`
                                group relative flex flex-col items-center justify-center text-center 
                                p-4 transition duration-300 transform cursor-pointer
                                 
                                flex-shrink-0 w-64 snap-center 
                                 
                                sm:flex-shrink sm:w-auto // Allow shrinking on larger screens
                                ${award.isFeatured
                                    ? 'w-60 md:w-64 lg:w-72 mt-0 md:-mt-8 scale-110 shadow-xl rounded-full' 
                                    : 'w-48 md:w-56 lg:w-60 mt-12 md:mt-0 hover:scale-105' 
                                }
                            `}
                        > 
                            <div className={`
                                relative flex items-center justify-center rounded-full 
                                z-20 transition duration-300
                                ${award.isFeatured
                                    ? 'bg-gray-800 text-white p-6 shadow-2xl h-60 w-60 md:h-64 md:w-64' 
                                    : 'h-48 w-48 md:h-56 md:w-56 bg-white shadow-md' 
                                }
                            `}>
                                <img
                                    src={award.logoSrc} 
                                    alt={award.logoAlt}
                                    loading="lazy"
                                    className={`
                                        w-full h-full object-contain 
                                        ${award.isFeatured ? 'p-6 rounded-full' : ''}
                                    `}
                                />
 
                                {award.isFeatured && (
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 px-2 text-xs leading-snug">
                                        <p className="font-semibold text-xl mb-1">{award.textBelow}</p>
                                        <p className="text-white leading-relaxed text-sm">{award.description}</p>
                                    </div>
                                )}
                            </div> 
                            {!award.isFeatured && (
                                <div className={`
                                    absolute inset-0 rounded-full bg-transparent text-white p-4 shadow-xl z-30
                                    flex flex-col items-center justify-center space-y-2
                                    // Hover/Focus effect
                                    opacity-0 scale-75 
                                    group-hover:opacity-100 hover:border-[20px] hover:border-white hover:shadow-2xl hover:bg-gray-800 hover:opacity-90 group-hover:scale-100
                                    transition duration-300 ease-in-out
                                `}>
                                    <p className="font-semibold text-lg md:text-xl text-white">
                                        {award.textBelow}
                                    </p>
                                    <p className="text-center text-sm px-2 leading-tight">
                                        {award.description}
                                    </p>
                                </div>
                            )}

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Awards;