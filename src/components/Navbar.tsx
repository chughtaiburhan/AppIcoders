import React, { useState } from "react"; 
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  name: string;
  href: string;
  current?: boolean;
}

const navItems: NavItem[] = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#" },
  { name: "Services", href: "#" },
  { name: "Why Choose Us", href: "#" },
  { name: "Portfolio", href: "#" },
  { name: "Contact", href: "#" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
   <motion.nav
  className="static top-0 inset-x-0 z-[99999] bg-[#e01726] sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none sm:border-none border-b border-transparent shadow-md sm:shadow-none"
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ type: "spring", stiffness: 120 }}
>

      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <img src="/Logo-Final-White 1.svg" alt="Logo" width={200} height={100} /> 
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-white">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`transition-colors hover:text-red-500 ${
                  item.current ? "text-red-500" : "text-white"
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden  backdrop-blur-md w-full border-t border-red-600 shadow-lg"
          >
            <ul className="flex flex-col px-4 py-6 space-y-4 text-white font-medium">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`block py-2 px-3 rounded transition-colors hover:bg-red-600 ${
                      item.current ? "bg-red-500" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
