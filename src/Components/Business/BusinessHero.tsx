import Image from "next/image";
import React from "react";
import businesshero from "../../../public/assets/businesshero.png";
// import { useState } from 'react';


import { useRouter } from "next/router";
// import Layout from "../Layout";
// import Footer from "../Footer/Footer";

const BusinessHero = () => {
  const router = useRouter();
 
  const handleClick = () => {
   
    router.push('/BusinessLogin');
    
    
  };

  return (
    <div className="flex px-[8rem] py-10 bg-background gap-10 justify-between max-lg:flex-col-reverse max-xl:px-4  max-lg:pt-[150px]">
      <div className="w-[60%] pt-20 max-lg:w-[100%] max-md:pt-[30px] ">
        <h1 className="  text-6xl font-extrabold text-green leading-[82px] max-lg:text-[45px] max-lg:leading-[60px]">
          Simplify and Streamline Your Restaurants Grocery Shopping
        </h1>
        <div className="mt-5 w-[90%] max-lg:w-full">
          <p className="text-green font-medium text-2xl max-lg:text-[16px] max-lg:leading-[20px]">
            We offers a straightforward solution for hotels and restaurants to
            access top-notch products at competitive prices, keep track of your
            inventory, so that you can focus on serving delicious food to your
            patrons.
          </p>
          
          <div className="mt-3 max-lg:mt-[20px]">
          
         <button className="text-[#fff] py-2 px-8 font-bold text-center bg-lightgreen text-[20px]" onClick={handleClick}>Get Started</button>
          </div>
          
        </div>
      </div>
      <div className="w-[40%] max-lg:w-[100%]">
        <Image src={businesshero} alt="business_heroimg" />
      </div>
    </div>
  );
};

export default BusinessHero;
