
import Image from 'next/image'
import React, { useState } from 'react';
import product1 from "../../../public/assets/image 9.png";
import { AiOutlineHeart } from 'react-icons/ai';
import {MdKeyboardArrowDown} from 'react-icons/md'
import ProductModal from '../UI/ProductModal';
// import Product from '@/interfaces/product';




type Props = {
  data: any;
  // src: string;
  // alt: string;
  // width: number;
  // height: number;
};
const Recommendedproduct = ({ data  }: Props) => {
  const [visibleUsers, setVisibleUsers] = useState(data.slice(0, 10));
 
  function handleLoadMore() {
    const newVisibleUsers = data.slice(0, visibleUsers.length + 4);
    setVisibleUsers(newVisibleUsers);
  }
  const [isProductOpen, setIsProductOpen] = useState(false);
  

  const handleOpenProductModal = () => {
    setIsProductOpen(true);
  };
   
  
  return (
    <div className='px-[8rem] bg-background'>
        <p className='text-green text-4xl font-bold'>Recommended Products</p>


        <div className='grid grid-cols-4 gap-4 mt-5'>
      
        {data.map((item:any) => {
            return (
              <>
              
              <div className='bg-white shadow-xl px-4  pt-4 pb-6 cursor-pointer ' key={item.id}   onClick={handleOpenProductModal}>
                <div className='bg-background'>
                    <Image  src={item?.product?.image}
                            alt='product-image'
                            width={600}
                            height={400}
                            className="object-contain w-full h-full" />
                    <AiOutlineHeart className='relative top-[-17rem] left-4 text-2xl cursor-pointer'/>
                </div>
               <div className=' '>
                    <p className='text-green text-[20px] font-normal h-[80px]'>{item.product.product_name}</p>
                    <p className='text-green text-[30px] font-bold'>₦{item.product.price}</p>
               </div>


            </div>
          
              </>
            );
          })}

            
            

            
        </div>
        {isProductOpen && <ProductModal />}

        <div className='flex justify-center mt-9 '>
        {visibleUsers.length < data.length && (
            <button className='bg-lightgreen  w-[50%] p-3 font-bold text-xl text-white' onClick={handleLoadMore}>See More Product <MdKeyboardArrowDown  className='inline text-xl'/></button>
            )}
            </div>
    </div>
  )
}

export default Recommendedproduct