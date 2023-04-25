import Image from "next/image";
import React from "react";
// import farmersimg from "../../../public/assets/farmersimg.png";

const FarmerHero = () => {
  return (
    <div className="px-[8rem] bg-background max-xl:px-4 max-lg:pt-[130px] max-lg:pb-[50px]">
      <div className="bg-[url('/assets/farmersimg.png')] bg-cover  h-screen rounded-[50px] text-white flex items-center flex-col justify-center">
        <h2 className=" max-lg:w-[95%] max-md:text-[40px] max-md:leading-[55px] text-[50px] leading-[70px] text-center font-extrabold w-[900px] ">Providing you with the best quality seeds and equipment to help your Farming Experience</h2>
        <p className=" max-lg:w-[95%]  max-md:text-[16px]  max-md:leading-[20px] text-center w-[819px] font-semibold text-[24px] leading-[30px]  mt-[20px]">We are committed to providing you with high-quality products that will help your farm thrive  We're committed to helping farmers like you succeed, and we look forward to working with you. Contact us today to learn more about our products and services.</p>
      </div>
    </div>
  );
};

export default FarmerHero;
