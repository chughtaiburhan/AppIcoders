import BgImg from "../assets/TechBg.svg";
import TechImg from "../assets/techImg1.svg";

const Technologies = () => {
  const para: string[] = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl libero, sollicitudin vel tempor sed, ullamcorper quis diam. Ut eros elit, luctus eu pulvinar a, lacinia a justo. Sed felis sapien, rutrum ut tempus quis, elementum eu du. lroem3 ipsum dolor sit amet, consectetur adipiscing elit.",
  ];
  
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
       <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url(${BgImg})` }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16">
          Technologies
        </h2> 
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 lg:space-x-12">

           <div className="bg-white p-8 sm:p-10 md:p-12 lg:p-16 md:pr-36 shadow-xl max-w-md md:max-w-xl lg:max-w-xl w-full z-10 mx-auto md:mx-0">
             <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 leading-tight">
              Cloud Solutions
            </h3>
            <p className="text-black text-lg leading-normal mb-8 sm:pr-28 ">
              {para[0]}
            </p>
             <div className="w-16 h-1 bg-red-600"></div>
          </div>

          <div className="relative w-full md:w-1/2 lg:w-2/2 mt-4 md:-ml-24 lg:-ml-32 md:mt-0 sm:z-20 max-w-md md:max-w-none mx-auto md:mx-0"> 
             <img
              src={TechImg}
              alt="Cloud Solutions Technology"
               className="w-full h-auto object-cover " 
            />
          </div>

        </div>
      </div>
      
      {/* Optional: Bottom red border effect */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-red-600 z-0"></div>
    </section>
  );
};

export default Technologies;