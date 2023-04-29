import React from 'react';
import Image from 'next/image'
import person1 from '../../../public/assets/person1.png'
import person2 from '../../../public/assets/person2.png'
import person3 from '../../../public/assets/person3.png'



const peoplethink=[
    {
      image:person1,
      title:'Adewale Folashade',
      subtitle:'Amala Corner Restaurant',
      text:'"I was hesitant to try this service at first, but I am so glad I did! The checkout process was simple and straightforward,and I love being able to pay for my groceries in installments".'
    },
    {
      image:person2,
      title:'Akinyede Babatunde',
      subtitle:'FoodMart Restaurant',
      text:'"I have recommended this platform to my friends and family. It is such a great option for anyone who wants to make their grocery shopping experience easier and more manageable."'
    },
    {
      image:person3,
      title:'Adekunle Shola',
      subtitle:'Xaba Restaurant',
      text:'"This service has made grocery shopping so much more affordable for me. I can buy what I need without having to worry about the upfront cost, which is a huge relief." '
    },
    
  
  ]

const Whatentrepreneur = () => {
  return (
    <div className='bg-background px-[8rem] pb-[2rem] pt-[5rem] flex flex-col items-center justify-center max-xl:px-4'>
      <div className='w-[60%] max-lg:w-[100%]  '>
      <h1 className='text-5xl text-center text-green max-lg:leading-[45px] font-extrabold leading-[70px] max-lg:text-[35px]'>What Other Entrepreneurs Thinks about Genesis360</h1>
      </div>
      <div className=" flex gap-5 mt-[6rem] justify-center max-lg:flex-col max-lg:mt-4">
            {peoplethink.map((item, index)=>{
              return <div key={index} className='bg-lightblue p-6 mt-[5rem] max-lg:p-4'>
              <div className='flex justify-center mt-[-6rem]'> <Image src={item.image} alt='cardimg' /> </div>
                <p className=' text-xl mt-5 font-semibold text-green max-md:text-[18px] max-md:leading-[22px] max-md:font-medium'>{item.text}</p>
                <div className='mt-10 max-md:mt-[25px]'>
                <p className='text-2xl font-bold text-green max-md:text-[20px] max-md:leading-[25px] '>{item.title}</p>
                <p className='text-xl font-medium text-green max-md:text-[16px] max-md:leading-[22px]'>{item.subtitle}</p>
                </div>
                                  
              </div>
            })}

        </div>

</div>
  )
}

export default Whatentrepreneur