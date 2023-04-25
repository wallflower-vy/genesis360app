
import Image from 'next/image'
import React from 'react';
import agricimg from '../../../public/assets/agricimg.png';
import arrow from '../../../public/svg/arrow.svg'

const AgricProducts = () => {
  return (
    <div className='bg-background flex px-[8rem] py-[8rem] gap-10 justify-between max-lg:px-4  max-lg:flex-col-reverse max-lg:pb-[35px] max-lg:py-0 max-lg:leading-[45px]'>
        <div className='w-[59%] max-lg:w-full'>
            <h1 className='font-extrabold text-green text-6xl max-lg:text-[30px] max-md:leading-[45px]'>Our Agricultural Products are trusted by Thousands of People</h1>
            <div className='mt-3'>
                <p className='font-medium text-2xl text-green max-lg:text-[16px] max-lg:leading-[20px]'>Looking to experience the full potential of farming? Join us now to start your farming journey and discover the amazing range of high-quality seeds and equipment we have to offer. Our goal is to help you succeed and achieve your farming dreams.</p>
            </div>
            <div className='bg-lightgreen text-white mt-5 py-3 px-5 items-center flex justify-between max-lg:px-2 max-lg:py-2'>
                <p className='font-bold text-2xl w-[90%] max-lg:text-[16px] max-lg:leading-[20px]'>Experience the amazing world of farming with us.</p>
                <div className='bg-white h-[4rem]  rounded-2xl  cursor-pointer w-[4rem] flex justify-center max-lg:w-[45px] max-lg:h-[45px]'>
                <Image src={arrow}  className=' ' alt="cardimg" />{" "}
                </div>
            </div>
        </div>
        <div className='w-[41%] max-lg:w-[100%]'>
            <Image src={agricimg} alt='Farmerstory'/>
        </div>

    </div>
  )
}

export default AgricProducts