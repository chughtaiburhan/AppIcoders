import React from "react";

interface ButtonProps {
  text: string;
  padding?: string;
  className?: string; 
}

const Button: React.FC<ButtonProps> = ({ text, padding = "px-6 py-3", className = "" }) => {
   const finalPadding = padding || "px-6 py-3";

  return (
    <button
      className={`
        bg-gradient-to-br from-[#b9080f] to-[#4f0408] 
        hover:from-[#d31117] hover:to-[#5a0509] 
        text-white font-semibold 
        ${finalPadding} 
        rounded-lg shadow-lg 
        transition-all duration-300 transform hover:scale-105 
        uppercase text-sm tracking-wide
        ${className} 
      `} 
    >
      {text}
    </button>
  );
};

export default Button;