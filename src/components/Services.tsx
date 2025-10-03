import {
  Monitor,
  Settings,
  Phone,
  CloudUpload,
  Check,
  Users, 
} from 'lucide-react'; 
import PcImage from "../assets/pc-Img.svg"; 
import ServicesBgImg from "../assets/services-bg.svg"; 
interface ServiceItemProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon: Icon, title }) => (
  <div className="flex ml-4 sm:ml-0 sm:items-start space-x-4 sm:space-x-6">
    <div className="flex-shrink-0 p-2 sm:p-3 rounded-full bg-white bg-opacity-20">
      <Icon className="h-4 w-4 sm:w-6 sm:h-6 text-red-600" />
    </div>
    <p className="text-white text-lg font-medium">{title}</p>
  </div>
); 

const Services: React.FC = () => {
  return (
    <> 

    <div className="relative z-20 overflow-hidden polygon-shape-bottom"> 
        <div className="absolute inset-0 z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1410 310">
          <path fill="white" fillOpacity="1" d="M0,224L1420,64L1440,0L0,0Z"></path>
        </svg> 
        <img 
          src={ServicesBgImg} 
          alt="Services Background" 
          className='-mt-[18%] hidden sm:block' 
          loading="lazy" 
        />
      </div> 
      <section className=" py-16 md:py-24 lg:py-72 bg-[#e81626]">
        <div className="container mx-auto ">
          <div className="flex flex-col lg:flex-row items-center justify-between "> 
<div className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 z-10 lg:mt-16">
  <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
    Our Services
  </h2>
  <p className="text-white text-opacity-80 text-lg md:text-xl mb-10 max-w-lg mx-auto lg:mx-0">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-x-12 ">
    <ServiceItem icon={Monitor} title="Web & Mobile Application" />
    <ServiceItem icon={Settings} title="Software & QA Support" />
    <ServiceItem icon={Phone} title="POS & ERP Solutions" />
    <ServiceItem icon={CloudUpload} title="Cloud Hosting & Services" />
    <ServiceItem icon={Check} title="Digital Marketing & SEO" />
    <ServiceItem icon={Users} title="Social Media Marketing" />
  </div>
</div>

  
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:-mt-30">
              <div className="relative h-64 md:h-96 ">
               <img 
                  src={PcImage} 
                  alt="Desktop Computer Mockup" 
                  className=' -mt-40 ml-0 sm:mt-0 sm:ml-10 '
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div> 
  
      </section> 
    </div>
</>
  );
};

export default Services;
