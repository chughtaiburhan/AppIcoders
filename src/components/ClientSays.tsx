import MaskGroup from "../assets/Mask group.svg";
import ClientProfile from "../assets/clientImg.svg";

const ClientSays: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center py-16 px-4 md:py-24"
      style={{
        backgroundImage: `url(${MaskGroup})`,
      }}
    >
      <div className="max-w-7xl mx-auto bg-[#a8131ae6]  overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          
          {/* LEFT COLUMN: Title & Quote Icon */}
          <div className="relative p-8 lg:p-16 text-white flex flex-col justify-between">
            {/* Large White Quote Icon */}
            <div className="absolute top-12 left-12 sm:top-0 sm:left-0 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center shadow-lg md:top-12 md:left-12">
              <span className="text-red-700 text-[6rem] sm:text-[8rem] md:text-[10rem] leading-none font-serif opacity-90 mt-16">“</span>
            </div>

            <div className="pt-16 md:pt-0 flex flex-col items-start justify-center sm:my-20">
              <p className="text-lg font-semibold tracking-widest uppercase opacity-80 mb-2">
                CLIENT TESTIMONIALS
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                What our clients <br /> are Saying.
              </h2>
            </div>

            <div className="hidden md:block"></div>
          </div>

          {/* RIGHT COLUMN: Testimonial Content */}
          <div className="bg-white p-6 sm:p-8 lg:p-12 text-black flex flex-col justify-center relative">
            {/* User Info */}
            <div className="flex items-center space-x-4 mb-6">
              <img
                src={ClientProfile}
                alt="Scarlett Lawrence"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-4 border-red-700"
              />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-red-700">Scarlett Lawrence</h3>
                <p className="text-xs sm:text-sm text-gray-500">CEO at AppEngine (Example Title)</p>
              </div>
            </div>

            {/* Testimonial Text */}
            <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              "Thank you, Team AppEngine, you guys have a great understanding of what's
              current, and get things done very quickly compared to others. Reliable
              communication and qualitative suggestions are useful functionality during
              the planning stage made for a final product that surpassed initial
              expectations. Their Project management is amazing. Tight deadlines were
              reliably met without issue. Our Strong recommendations if you're looking
              for quality work."
            </p>

            {/* Small red divider */}
            <div className="w-10 h-1 bg-red-700 self-end"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ClientSays;
