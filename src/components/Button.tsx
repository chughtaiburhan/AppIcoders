import React from "react";

interface ButtonProps {
  text: string;
  padding?: string;
  className?: string; // Added className prop
  // You can add more props here like onClick, type, etc.
}

const Button: React.FC<ButtonProps> = ({ text, padding = "px-6 py-3", className = "" }) => {
  // Define default padding if none is provided
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
      // The className prop is interpolated at the end, allowing it to override or add styles
    >
      {text}
    </button>
  );
};

export default Button;