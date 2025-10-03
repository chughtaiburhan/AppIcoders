import { Twitter, Facebook, Linkedin, Phone, Mail, ChevronRight, Github, Dribbble } from 'lucide-react';

import Logo from "../assets/Logo_Final_White_1.svg"
const aboutLinks = [
    { name: 'HOME', href: '#' },
    { name: 'ABOUT US', href: '#' },
    { name: 'CONTACT US', href: '#' },
];

const serviceLinks = [
    { name: 'IPHONE APPLICATION DEVELOPMENT', href: '#' },
    { name: 'ANDROID APPLICATION DEVELOPMENT', href: '#' },
    { name: 'ENTERPRISE APP DEVELOPMENT', href: '#' },
];

const socialLinks = [
    { 
        icon: Facebook, 
        href: '#', 
        color: 'bg-blue-500 hover:bg-blue-600', 
        name: 'Facebook' 
    },
    { 
        icon: Twitter, 
        href: '#', 
        color: 'bg-blue-400 hover:bg-blue-500', 
        name: 'Twitter' 
    },
    { 
        icon: Linkedin, 
        href: '#', 
        color: 'bg-blue-700 hover:bg-blue-800', 
        name: 'LinkedIn' 
    },
    { 
        icon: Github, 
        href: '#', 
        color: 'bg-gray-700 hover:bg-gray-600', 
        name: 'GitHub' 
    },
    { 
        icon: Dribbble, 
        href: '#', 
        color: 'bg-pink-600 hover:bg-pink-700', 
        name: 'Dribbble' 
    },
];

const Footer = () => {
    return (
        <footer className="bg-[#262835] text-gray-300 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                
                <div className="md:flex md:justify-between flex-wrap gap-8">
                        
                    <div className="w-full md:w-auto mb-10 md:mb-0 md:flex-shrink-0 lg:w-1/4">
                        <div className="flex items-center mb-6 justify-center md:justify-start"> 
                            <img src={Logo} className='h-12 w-auto' alt="" />
                        </div>

                        <h2 className="text-xl font-semibold text-white mb-4 mt-6 text-center md:text-left">Contact Us</h2>
                        
                        <div className="space-y-2 text-sm text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-2">
                                <Phone size={16} className="text-red-500 flex-shrink-0" />
                                <span>Tel: +1 (800) 826-8018</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-2">
                                <Mail size={16} className="text-red-500 flex-shrink-0" />
                                <span>Email: info@appicoders.com</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:flex md:flex-grow md:justify-around lg:gap-16">
                        
                        <div className='md:w-1/3 lg:w-auto'>
                            <h6 className="mb-6 text-2xl font-semibold text-white tracking-wider text-center sm:text-left">About</h6>
                            <ul className="space-y-3 font-medium text-center sm:text-left">
                                {aboutLinks.map((link) => (
                                    <li key={link.name} className="mb-1">
                                        <a 
                                            href={link.href} 
                                            className=" text-sm transition-colors text-gray-400 hover:underline hover:text-red-500"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="md:w-1/3 lg:w-auto">
                            <h2 className="mb-6 text-2xl font-semibold text-white tracking-wider text-center sm:text-left">Appicoders Services</h2>
                            <ul className="space-y-3 font-medium text-gray-400">
                                {serviceLinks.map((link) => (
                                    <li key={link.name} className="flex items-center justify-center sm:justify-start">
                                        <ChevronRight size={16} className="text-red-500 mr-2 flex-shrink-0" />
                                        <a 
                                            href={link.href} 
                                            className=" transition-colors text-sm text-center sm:text-left hover:text-red-500"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div> 
                    </div>
                </div>

                <hr className="my-8 border-gray-700 sm:mx-auto" />

                <div className="sm:flex sm:items-center sm:flex-row sm:justify-between space-y-3 sm:space-y-0 text-center ">
                    <span className="text-sm text-gray-200 text-center sm:text-left">
                        © 2025 <a href="#" className="hover:underline hover:text-red-500">APPICODERS</a>. ALL RIGHTS RESERVED.
                    </span>
                    
                    <div className="flex justify-center gap-3 pt-4 sm:pt-0">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a 
                                    key={social.name} 
                                    href={social.href} 
                                    className={`w-8 h-8 flex items-center justify-center ${social.color} rounded-full transition-all duration-300 hover:scale-110 shadow-lg`}
                                    aria-label={social.name}
                                >
                                    <Icon size={18} className="text-white" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;