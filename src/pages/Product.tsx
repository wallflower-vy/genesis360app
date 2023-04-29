import Footer from '@/Components/Footer/Footer'
import Brands from '@/Components/Products/Brands'
import ProductListHero from '@/Components/Products/ProductListHero'
import ProductLayout from '@/Components/Products/ProductNav'
import Recommendedproduct from '@/Components/Products/Recommendedproduct'
import SubscriptionPackages from '@/Components/Products/SubscriptionPackages'

// import PageModal from '@/Components/UI/PageModal'
import axios from 'axios'
import { GetServerSideProps, GetStaticProps } from 'next'
import React, {  useState } from 'react'
// import Product from '../interfaces/product'

type Props = {
  data: any;
};



const Product = ({ data }: Props) => {
  

  // const [displayData, setDisplayData] = useState([]);
  // const [visibleCount, setVisibleCount] = useState(10);
  
  // const [showModal, setShowModal] = useState(false);
  
  // useEffect(() => { 
  // //   if (showModal) {
  // //   document.body.classList.add("overflow-hidden");
  // // }
  // //  else {
  // //   document.body.classList.remove("overflow-hidden");
  // // }
   
  //   setShowModal(true);
  // }, [showModal]);

  return (
    <div>
      {/* {showModal && <PageModal />} */}
        <ProductLayout />
        <ProductListHero/>
       <Recommendedproduct data={data} />
        <SubscriptionPackages />
        <Brands />
        <Footer />
        

        
    </div>
  )
}

export default Product;


export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const response = await fetch('https://orangli.com/server/api/Products/Products?total=12');

  const data = await response.json();
  // setDisplayData(data.slice(0, visibleCount));
  
  return { props: { data } };
};
