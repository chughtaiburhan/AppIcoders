import { Phone, Mail } from 'lucide-react';
import ContactImg from "../assets/contact.svg"
import Button from './Button';
const ContactUs = () => {
    return (
        <section className="relative min-h-screen bg-[#e01923] flex items-center justify-center ">
            
            <div className="relative w-full max-w-8xl mx-auto bg-white overflow-hidden flex flex-col lg:flex-row min-h-[600px] lg:min-h-[700px]">
                
                <div className="w-full lg:w-1/2 p-6 sm:p-10 bg-[#e01923] text-white flex flex-col justify-center">
                    
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
                        
                        <div className='w-full pt-4'>
                            <Button 
                                text="LET'S GET IN TOUCH" 
                                className="w-full" 
                            />
                        </div>
                    </form>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col">
                    
                    <div className="relative w-full flex-grow bg-gray-300 overflow-hidden min-h-[300px] lg:min-h-[450px]">
                        <img
                            src={ContactImg}
                            loading='lazy'
                            alt="Two people discussing app strategy"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black opacity-10"></div>
                    </div>

                    <div className="w-full bg-[#262835] text-white p-6 sm:p-10 lg:p-12 flex flex-col items-center justify-center text-center flex-shrink-0 min-h-[150px] lg:min-h-[250px] space-y-3">
                        
                        <div className="mb-2">
                            <Phone className="w-10 h-10 text-white mx-auto" />
                        </div>

                        <a href="tel:+18008268018" className="text-xl sm:text-2xl font-bold hover:text-[#e01923] transition-colors">
                            +1-(800) 826 8018
                        </a>
                        
                        <div className="flex items-center space-x-2 text-sm sm:text-base text-gray-400">
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