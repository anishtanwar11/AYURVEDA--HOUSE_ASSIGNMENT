"use client";
import { useState } from "react";
import arrowe from "../../public/arrow.png";
import Image from "next/image";

const images = [
  { id: 1, src: "/images/strength.jpg", title: "STRENGTH" },
  { id: 2, src: "/images/mobility.jpg", title: "MOBILITY" },
  { id: 3, src: "/images/drills.jpg", title: "DRILLS" },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
   
    if(index === 3){
      index = 0
    }
    console.log("Index-", index)
    setActiveIndex(index);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="mx-3 md:mx-10 lg:mx-40 w-full rounded-[2rem] flex justify-center items-center h-96 overflow-hidden">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`duration-500 relative group ${
              index === activeIndex 
              ? "flex-grow h-full" 
              : "flex-none w-20 md:w-40 lg:w-72 h-full"
            } cursor-pointer overflow-hidden`}
            onClick={() => handleClick(index + 1)}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 text-white font-semibold text-base md:text-xl flex w-full justify-between">
              {image.title}
              {/* Arrow Button - Initially Hidden */}
              {index === activeIndex && (
              <div className="mr-8 hidden group-hover:flex items-center justify-center">
                <Image
                  src={arrowe}
                  alt="arrowe"
                  className="bg-white w-8 h-8 rounded-full"
                />
              </div>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
