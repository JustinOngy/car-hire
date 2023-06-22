"use client";
import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Ride Now: Your Ultimate Car Hire Destination!
        </h1>
        <p className="hero__subtitle">
          Unlock the Freedom of Exploring with Hassle-Free Car Rentals
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-indigo-500 text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero3.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
