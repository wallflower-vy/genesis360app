import Image from "next/image";
import React from "react";
import cart1 from "../../../public/assets/cart1.png";
import cart2 from "../../../public/assets/cart2.png";
import cart3 from "../../../public/assets/cart3.png";
import cart4 from "../../../public/assets/cart4.png";
import cart5 from "../../../public/assets/cart5.png";

const EveryThing = () => {
  return (
    <div className="bg-background px-[8rem] py-[5rem] max-xl:px-4 max-lg:py-[4rem]">

      <div className="w-[80%] max-lg:w-[100%] ">
        <h1 className="text-6xl text-green font-extrabold leading-[80px] max-lg:text-[36px] max-lg:leading-[45px]">
          Everything You Need For Efficient Food Supply Procurement.
        </h1>
      </div>

      <div className="flex gap-8 mt-8 max-lg:flex-col   ">

        <div className="bg-lime p-6  rounded-2xl w-1/2  max-lg:w-[100%]  max-md:p-4">
          <Image src={cart1} alt="card" />
          <h1 className="text-3xl font-extrabold text-green mt-5 max-md:text-[20px] max-md:mt-0">
            Buy Now, Pay Later
          </h1>
          <p className="text-lg font-medium text-green mt-3 max-md:text-[16px] max-md:leading-[20px] max-md:mt-[2px]">
            Dont let the high cost of grocery shopping slow down your
            restaurants success. Take advantage of our buy now, pay later
            payment option today! Simplify your grocery shopping process while
            freeing up your cash flow.
          </p>
        </div>

        <div className="bg-lime p-6 rounded-2xl w-1/2 max-lg:w-[100%] max-md:p-4">
          <Image src={cart2} alt="card" />
          <h1 className="text-3xl font-extrabold text-green mt-5 max-md:text-[20px] max-md:mt-0">
            Seamless Payment
          </h1>
          <p className="text-lg font-medium text-green mt-3 max-md:text-[16px] max-md:leading-[20px] max-md:mt-[2px]">
            With our integrated payment solution, you can enjoy a fast, easy,
            and secure payment experience that saves you time and eliminates the
            hassle of multiple payment methods. Whether youre making a purchase,
            tracking transactions, or managing your finances.
          </p>
        </div>

      </div>

      <div className="flex gap-5 mt-12 max-lg:flex-col ">

        <div className="bg-lightblue p-6 rounded-2xl  max-md:p-4 max-lg:bg-lime">
          <Image src={cart3} alt="card" />
          <h1 className="text-3xl font-extrabold text-green mt-5 max-md:text-[20px] max-md:mt-0">
            Product Catalogue
          </h1>
          <p className="text-lg font-medium text-green mt-3 max-md:text-[16px] max-md:leading-[20px] max-md:mt-[2px]">
            We have a wide selection of high-quality products that are carefully
            curated to meet the needs of businesses like yours. From essential
            ingredients to specialty products, and everything in between.
          </p>
        </div>

        <div className="bg-lightblue p-6 rounded-2xl  max-md:p-4 max-lg:bg-lime">
          <Image src={cart4} alt="card" />
          <h1 className="text-3xl font-extrabold text-green mt-5 max-md:text-[20px] max-md:mt-0">
            Best Pricing
          </h1>
          <p className="text-lg font-medium text-green mt-3 max-md:text-[16px] max-md:leading-[20px] max-md:mt-[2px]">
            We are committed to providing you with the best prices on the market
            for all of your business needs. You can count on us to deliver the
            products you need at the lowest prices possible.
          </p>
        </div>

        <div className="bg-lightblue p-6 rounded-2xl   max-md:p-4  max-lg:bg-lime">
          <Image src={cart5} alt="card" />
          <h1 className="text-3xl font-extrabold text-green mt-5 max-md:text-[20px] max-md:mt-0">
            Track Orders Easily
          </h1>
          <p className="text-lg font-medium text-green mt-3  max-md:text-[16px] max-md:leading-[20px] max-md:mt-[2px]">
            Whether youre checking the status of a current order or reviewing
            the history of past orders, our order tracking system provides you
            with all the information you need at your fingertips.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EveryThing;
