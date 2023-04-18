import React from 'react'
import { IoCheckmarkOutline } from "react-icons/io5";
import Image from "next/image";
import Subs from "../../public/assets/image 28 (2).png";
// import { RiCloseCircleFill } from 'react-icons/ri';


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;  
}
const Loanrepaymentmodal = ({ isOpen, onClose }:ModalProps) => {
  if (!isOpen) {
    return null;
  }
  return (
   <>
    <div className='fixed z-10 inset-0 overflow-y-auto bg-[#000000a6]'>
    <div className='flex items-center justify-center min-h-screen'>
      <div className='fixed inset-0 transition-opacity bg-gray-800 opacity-50'></div>

      <div className='z-20 w-full max-w-xl py-8 px-6 mx-auto bg-white shadow-lg'>
        <div className='flex justify-between'>
          <h2 className='text-[32px]  text-[#90DD3E] leading-[40px] font-bold'>
          Buy Now, Pay Later
          </h2>
          <div className='flex justify-end'>
            {/* <RiCloseCircleFill className='text-4xl cursor-pointer text-green' /> */}
          </div>
       
        </div>
        <div className="text-green mt-4 w-[95%]  mx-auto">
      <div className='flex items-center justify-center'>
      <div className="flex items-center justify-center  bg-[#01C698] rounded-[50%] w-[40%]">
        <IoCheckmarkOutline className="text-[200px] cursor-pointer text-white" />
    </div>
      </div>
   

    <h2 className="text-[32px] leading-[40px] text-center font-semibold text-[#01C698] mt-[15px]">Repayment Successful</h2>

    <p className="text-[20px] mt-[5px] leading-[26px] font-semibold text-center">Your payment has been processed! Details of transaction are included below.</p>
    <button className="h-[50px] mt-[15px] bg-white w-[100%] font-bold  text-green text-[20px]  border-2 border-green">Transaction Number: 123456789</button>

    <div className='flex justify-between mt-[18px]'>
      <h2 className='text-[20px] leading-[20px] font-medium'>Amount</h2>
      <p  className='text-[20px] leading-[20px] font-bold'>₦8,000</p>
    </div>

    <div className='flex justify-between mt-[18px]'>
      <h2 className='text-[20px] leading-[20px] font-medium'>Payment Channel</h2>
      <p  className='text-[20px] leading-[20px] font-bold'>Card ****5468</p>
    </div>

    <div className='flex justify-between mt-[18px]'>
      <h2 className='text-[20px] leading-[20px] font-medium'>Transaction Date</h2>
      <p  className='text-[20px] leading-[20px] font-bold'>Feb. 25, 2023</p>
    </div>



    <button className="h-[50px] mt-[20px]  w-[100%] font-bold  text-white text-[20px] bg-[#90DD3E]" onClick={onClose}>Close</button>
  </div> 
       
        </div>
        </div>
        </div>
   </>
   
   
   
   
   
    
)
}

export default Loanrepaymentmodal