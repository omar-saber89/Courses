import React, { useState } from "react";
import girl from "../assets/girl.jpg";
import boy from "../assets/boy.png";
import il from "../assets/il.jpg";

const Header = () => {
  const [visibleImage, setVisibleImage] = useState("girl");
  const [slideDirection, setSlideDirection] = useState("next");

  const handleNext = () => {
    setSlideDirection("next");
    if (visibleImage === "girl") setVisibleImage("boy");
    else if (visibleImage === "boy") setVisibleImage("il");
    else setVisibleImage("girl");
  };

  const getImage = () => {
    switch (visibleImage) {
      case "girl":
        return girl;
      case "boy":
        return boy;
      case "il":
        return il;
      default:
        return girl;
    }
  };

  return (
    <div className="mt-4 sm:mt-8 md:mt-16 lg:mt-24 flex flex-col items-center px-3 xs:px-4 sm:px-6 lg:px-8">
      {/* العنوان */}
      <h1 className="font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 md:mb-8 text-center">
        Welcome! To CoursesHub
      </h1>

      <div className="relative w-full max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
        {/* حاوية الصورة */}
        <div className="relative w-full h-40 xs:h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] 2xl:h-[600px] overflow-hidden rounded-xl md:rounded-2xl">
          <img
            key={visibleImage}
            src={getImage()}
            alt={visibleImage}
            className={`w-full h-full object-cover transform transition-transform duration-700 ease-in-out ${
              slideDirection === "next"
                ? "translate-x-0 animate-slide-in"
                : "translate-x-full"
            }`}
          />
        </div>

        {/* النص فوق الصورة */}
        <div
          className="absolute top-1/2 left-2 xs:left-3 sm:left-4 md:left-6 lg:left-8 -translate-y-1/2 
          text-black bg-white/90 backdrop-blur-sm md:backdrop-blur-md 
          rounded-lg md:rounded-xl lg:rounded-2xl p-3 xs:p-4 sm:p-5 md:p-6 
          w-[250px] xs:w-[280px] sm:w-[320px] md:w-[350px] lg:w-[400px] xl:w-[450px]
          shadow-md md:shadow-lg mx-auto"
        >
          <h1 className="font-bold text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed sm:leading-relaxed md:leading-relaxed">
            Did you make a wish? <br />
            Time to make it come true. <br />
            Get the courses on your wishlist and take the first step toward your goals.
          </h1>
        </div>

        {/* زر السهم */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 xs:right-3 sm:right-4 md:right-5 lg:right-6 -translate-y-1/2 
          border border-white text-white hover:text-black hover:bg-white/80 
          w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14
          flex items-center justify-center rounded-full shadow-md md:shadow-lg 
          transition-all duration-300 backdrop-blur-sm"
          aria-label="Next image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 
              .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 
              1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </button>
      </div>

      <style>{`
        @keyframes slide-in {
          0% { transform: translateX(100%); opacity: 0.4; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in {
          animation: slide-in 0.7s ease forwards;
        }
        
        @media (max-width: 360px) {
          .text-overlay {
            width: 220px !important;
            padding: 12px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Header;