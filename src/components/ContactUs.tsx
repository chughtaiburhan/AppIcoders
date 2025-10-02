import { Phone, Mail } from 'lucide-react'; // Import necessary icons from lucide-react
import ContactImg from "../assets/contact.svg"
import Button from './Button';
const ContactUs = () => {
    return (
        // The container background is the red color
        <section className="relative min-h-screen bg-[#e01923] flex items-center justify-center ">
            
            {/* Main Card Container: Max width adjusted for a better desktop look */}
            <div className="relative w-full max-w-8xl mx-auto bg-white  overflow-hidden flex flex-col lg:flex-row min-h-[600px] lg:min-h-[700px]">
                
                {/* Left Section (Form) - Red Background */}
                <div className="w-full lg:w-1/2 p-6 sm:p-10  bg-[#e01923] text-white flex flex-col justify-center">
                    
                    <p className="text-lg font-semibold mb-2">LET'S TALK</p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                        Got an idea? Let's get in touch!
                    </h2>
                    <p className="text-base sm:text-lg mb-8">
                        Have queries? Not sure of your App Strategy? Discuss with us and we'll guide you the way forward.
                    </p>

                    <form className="space-y-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 bg-white text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300 placeholder-gray-500"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full p-3 bg-white text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300 placeholder-gray-500"
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                placeholder="Phone"
                                className="w-full p-3 bg-white text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300 placeholder-gray-500"
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder="Message"
                                rows={6}
                                className="w-full p-3 bg-white text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300 resize-none placeholder-gray-500"
                            ></textarea>
                        </div>
                        
                        {/* BUTTON OPTIMIZATION: */}
                        <div className='w-full pt-4'>
                            {/* 1. Removed large px-52 padding. Instead, made the button w-full.
                              2. The button component already provides a default padding (px-6 py-3),
                                 which is sufficient for a w-full button.
                              3. Removed the unnecessary "flex items-center justify-center" from className 
                                 as the Button text will be centered by w-full padding.
                            */}
                            <Button 
                                text="LET'S GET IN TOUCH" 
                                className="w-full" 
                            />
                        </div>
                    </form>
                </div>

                {/* Right Section (Image and Contact Info) */}
                <div className="w-full lg:w-1/2 flex flex-col">
                    
                    {/* Image Placeholder - takes up most of the vertical space */}
                    {/* lg:min-h-[450px] allows the contact info block below to be larger on desktop */}
                    <div className="relative w-full flex-grow bg-gray-300 overflow-hidden min-h-[300px] lg:min-h-[450px]">
                        <img
                            src={ContactImg}
                            alt="Two people discussing app strategy"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black opacity-10"></div>
                    </div>

                    {/* Contact Details Section - Dark Blue/Black Background - takes up less vertical space */}
                    <div className="w-full bg-[#262835] text-white p-6 sm:p-10 lg:p-12 flex flex-col items-center justify-center text-center flex-shrink-0 min-h-[150px] lg:min-h-[250px] space-y-3">
                        
                        {/* Re-ordered and styled for professional appearance */}
                        <div className="mb-2">
                             {/* Lucide Phone icon */}
                            <Phone className="w-10 h-10 text-white mx-auto" />
                        </div>

                        <a href="tel:+18008268018" className="text-xl sm:text-2xl font-bold hover:text-[#e01923] transition-colors">
                            +1-(800) 826 8018
                        </a>
                        
                        <div className="flex items-center space-x-2 text-sm sm:text-base text-gray-400">
                             {/* Lucide Mail icon, slightly smaller for the email link */}
                            <Mail className="w-4 h-4 text-gray-500" />
                            <a href="mailto:info@appicoders.com" className="hover:text-white transition-colors">
                                info@appicoders.com
                            </a>
                        </div>
                         <p className="text-xs text-gray-500 pt-4 max-w-sm mx-auto">
                            Please submit your inquiry and our App Development Strategist will contact you shortly
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;