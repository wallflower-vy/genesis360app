import React from 'react'

const HowItWorks = () => {
  return (
    <div className='bg-lightblue px-[8rem] py-[5rem] max-xl:px-4 max-md:py-7'>
        <h1 className='text-5xl text-green font-extrabold max-lg:text-[36px] max-lg:leading-[45px] '>How it works</h1>
        <div className='w-[60%] mt-10 max-lg:w-[100%] max-md:mt-[16px]'>
            <h1 className='text-4xl text-green font-bold max-md:text-[20px] max-md:leading-[25px]'>1. Search or Select a Product</h1>
            <p className='text-green text-2xl font-medium max-md:text-[16px] max-md:leading-[20px]'>Browse our comprehensive list of products and select the products you need. If you can not find what you are looking for, simply make a request and we will work to make it available for you.</p>
        </div>
        <div className='flex justify-end mt-10 max-lg:w-[100%] max-lg:justify-start max-md:mt-[8px]'>
        <div className='w-[50%] mt-5 text-right max-lg:text-left max-lg:w-[100%]'>
            <h1 className='text-4xl text-green font-bold max-md:text-[20px] max-md:leading-[25px]'>2. Add Products to Cart</h1>
            <p className='text-green text-2xl font-medium max-md:text-[16px] max-md:leading-[20px]'>To purchase a product, simply locate it and add it to your shopping cart. Repeat the process for any additional items you wish to purchase.</p>
        </div>
        </div>
        <div className='w-[60%] mt-10 max-lg:w-[100%]'>
            <h1 className='text-4xl text-green font-bold max-md:text-[20px] max-md:leading-[25px]'>3. Set Delivery Option</h1>
            <p className='text-green text-2xl font-medium max-md:text-[16px] max-md:leading-[20px]'>After you have added all the products to your shopping cart,  set the delivery option. You can choose the delivery address, which can be your home or office, or any other preferred location. </p>
        </div>
        <div className='flex  justify-end mt-10 max-lg:justify-start max-md:mt-[8px]'>
        <div className='w-[50%] mt-5 text-right max-lg:w-[100%] max-lg:text-left'>
            <h1 className='text-4xl text-green font-bold max-md:text-[20px] max-md:leading-[25px]'>4. Select Payment Option</h1>
            <p className='text-green text-2xl font-medium max-md:text-[16px] max-md:leading-[20px]'>After setting the delivery option, select the payment option. We offer multiple payment methods, such as debit card, online payment portals like Paystack, or Buy Now, Pay Later Option.</p>
        </div>
        </div>
        <div className='w-[60%] mt-10 max-md:mt-[28px] max-lg:w-[100%]'>
            <h1 className='text-4xl text-green font-bold max-md:text-[20px] max-md:leading-[25px]'>5. Review  and Complete Your Order</h1>
            <p className='text-green text-2xl font-medium max-md:text-[16px] max-md:leading-[20px]'>Review the details of your purchase, such as the items in your cart, the delivery address, the payment method, and the total cost. You can proceed to complete your order by clicking on the <b>Submit</b> button.  </p>
        </div>

    </div>
  )
}

export default HowItWorks