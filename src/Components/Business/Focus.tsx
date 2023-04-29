import Image from "next/image";
import React from "react";
import arrow from "../../../public/assets/arrow.png";

const Focus = () => {
  return (
    <div className="bg-background px-[8rem] py-[5rem] max-xl:px-4  max-lg:py-12 ">
      <div className="bg-aqua px-[5rem] py-[4rem] rounded-xl max-lg:px-3 max-lg:py-6">
        <div className="w-[60%] max-lg:w-[100%] ">
          <h1 className="font-extrabold text-5xl text-green leading-[60px] max-lg:text-[36px] max-lg:leading-[45px]">
            Focus Your Attention to What is More Important
          </h1>
        </div>

        <div className="flex mt-6 justify-between max-lg:flex-col max-lg:mt-3">
          <div className="w-[60%] max-lg:w-[100%]">
            <p className="text-2xl text-green font-medium max-lg:text-[16px] max-xl:leading-[22px]">
              Let’s help you ease the procurement stress while you concentrate
              on creating delightful dishes and providing exceptional service.
            </p>
          </div>

          <div className=" w-[50%] flex justify-end pt-[4rem] gap-5 items-center max-lg:w-[100%] max-lg:gap-0 max-lg:justify-start max-lg:pt-[17px]">
            <div>
              <Image src={arrow}  alt="arrow"  className="inline-block max-lg:hidden "/>
            </div>
            <button className="text-[#fff] py-2 px-8 font-bold  text-center bg-green text-[20px] ">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Focus;
