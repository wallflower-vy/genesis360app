
import Image from 'next/image'
import React, { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import {MdKeyboardArrowDown} from 'react-icons/md'
import ProductModal from '../UI/ProductModal';
import productimg from '../../../public/assets/image 9.png'




type Props = {
  data: any;
  onLoadMore: () => void;
  onProductClick: (product: any) => void;
  
  
};
const Recommendedproduct = ({ data, onLoadMore, onProductClick }: Props) => {
  
  
  

  return (
    <div className='px-[8rem] bg-background'>
        <p className='text-green text-4xl font-bold'>Recommended Products</p>


        <div className='grid grid-cols-4 gap-4 mt-5'>
      
        {data.map((item:any) => {
            return (
              <>
              
              <div className='bg-white shadow-xl px-4  pt-4 pb-6 cursor-pointer ' key={item.id}   onClick={() => onProductClick(item)}>
              <div className='relative top-12 flex justify-center items-center rounded-full h-[2rem] w-[2rem] ml-3   bg-white '><AiOutlineHeart className=' text-2xl cursor-pointer'/></div>
                <div className='bg-background w-[100%] h-[400px]  p-5 justify-center flex flex-col items-center'>
               
                    <Image  src={item?.product?.image}
                            alt='product-image'
                            width={500}
                            height={800}
                            className="object-cover  " />
                   
                </div>
               <div className='mt-5 '>
                    <p className='text-green text-[20px] font-normal h-[60px]'>{item.product.product_name}</p>
                    <p className='text-green text-[30px] font-bold'>₦{item.product.price}</p>
               </div>


            </div>
          
              </>
            );
          })}

            
            

            
        </div>
      

        <div className='flex justify-center mt-9 '>
       
            <button className='bg-lightgreen  w-[50%] p-3 font-bold text-xl text-white' onClick={onLoadMore}  >See More Product <MdKeyboardArrowDown  className='inline text-xl'/></button>
          
            </div>
    </div>
  )
}

export default Recommendedproduct