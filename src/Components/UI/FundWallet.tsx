import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";

const FundWallet = () => {
  return (
    
    <div className='fixed z-10 inset-0 overflow-y-auto bg-[#000000a6]'>
    <div className='flex items-center justify-center min-h-screen'>
      <div className='fixed inset-0 transition-opacity bg-gray-800 opacity-50'></div>

      <div className='z-20 w-full max-w-4xl py-8 px-6 mx-auto bg-white shadow-lg'>
        <div className='flex justify-between'>
          <h2 className='text-[32px]  text-[#90DD3E] leading-[40px] font-bold'>
          Buy Now, Pay Later
          </h2>
          <div className='flex justify-end'>
            <RiCloseCircleFill className='text-4xl cursor-pointer text-green' />
          </div>
          <div className="text-green w-[90%] mx-auto py-6 ">
      <div className="flex justify-between">
        {" "}
        <h2 className="text-[32px]  text-[#90DD3E] leading-[40px] font-bold">
          Transfer Fund
        </h2>
        <div className="flex justify-end">
          <RiCloseCircleFill className="text-4xl cursor-pointer text-green" />
        </div>
      </div>

      <form>
        <div className=" mt-[50px]">
          <label
            htmlFor="How much do you want to fund?"
            className="block text-[#183D36]  mt-[20px] text-[20px] font-bold leading-[25px] mb-2"
          >
            How much do you want to fund?{" "}
          </label>
          <input
            placeholder="₦50"
            type="text"
            id="How much do you want to fund?"
            name="How much do you want to fund?"
            required
            className="w-full py-2 px-3 border-green border-2  focus:outline-none focus:shadow-outline "
          />
        </div>

        <button className="h-[50px] mt-[20px]  w-[100%] font-bold  text-white text-[20px] bg-[#90DD3E]">
          Proceed{" "}
        </button>
      </form>
    </div>
        </div>
        </div>
        </div>
        </div>
    
    
    
    
  );
};

export default FundWallet;
