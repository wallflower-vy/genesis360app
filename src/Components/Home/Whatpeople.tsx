import Image from "next/image";
import React from "react";
import person1 from "../../../public/assets/person1.png";
import person2 from "../../../public/assets/person2.png";
import person3 from "../../../public/assets/person3.png";

// The Array of objects
const peoplethink = [
  {
    image: person1,
    title: "Adewale Folashade",
    subtitle: "Amala Corner Restaurant",
    text: '"I was hesitant to try this service at first, but I am so glad I did! The checkout process was simple and straightforward,and I love being able to pay for my groceries in installments".',
  },
  {
    image: person2,
    title: "Akinyede Babatunde",
    subtitle: "FoodMart Restaurant",
    text: '"I have recommended this platform to my friends and family. It is such a great option for anyone who wants to make their grocery shopping experience easier and more manageable."',
  },
  {
    image: person3,
    title: "Adekunle Shola",
    subtitle: "Xaba Restaurant",
    text: '"This service has made grocery shopping so much more affordable for me. I can buy what I need without having to worry about the upfront cost, which is a huge relief." ',
  },
];

const Whatpeople = () => {
  return (
    <div className="bg-background px-[8rem] pb-[2rem] flex flex-col items-center justify-center max-xl:px-4  max-lg:pb-[80px] ">

      {/* The text */}
      <div className="w-[50%] max-lg:w-[100%]">
        <h1 className="text-5xl text-center text-green font-extrabold leading-[70px] max-lg:text-[36px] max-lg:leading-[45px]">
          What Other People Thinks about Genesis360
        </h1>
      </div>

      <div className="flex gap-5 mt-[6rem] justify-center max-lg:gap-0 max-lg:w-[100%] max-lg:flex-col max-lg:items-center max-lg:mt-0">
        {peoplethink.map((item, index) => {
          return (
            <div key={index} className="bg-lightblue p-6  max-lg:p-[10px] max-lg:mt-[6rem]">

              {/* The logo */}
              <div className="flex justify-center mt-[-6rem]  max-lg:mt-[-4rem] ">
                {" "}
                <Image src={item.image} alt="cardimg" />{" "}
              </div>

              {/* The text */}
              <p className=" text-xl mt-5 font-semibold text-green max-lg:leading-[22.68px] max-sm:mt-[5px] ">{item.text}</p>

              {/* the people */}
              <div className="mt-10">
                <p className="text-2xl font-bold text-green">{item.title}</p>
                <p className="text-xl font-medium text-green">{item.subtitle}</p>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Whatpeople;
