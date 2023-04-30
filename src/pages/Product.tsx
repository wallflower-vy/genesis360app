import Footer from '@/Components/Footer/Footer'
import Brands from '@/Components/Products/Brands'
import ProductListHero from '@/Components/Products/ProductListHero'
import ProductLayout from '@/Components/Products/ProductNav'
import Recommendedproduct from '@/Components/Products/Recommendedproduct'
import SubscriptionPackages from '@/Components/Products/SubscriptionPackages'

// import PageModal from '@/Components/UI/PageModal'
import axios from 'axios'
import { GetServerSideProps, GetStaticProps } from 'next'
import React, {  useEffect, useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
// import Product from '../interfaces/product'

type Props = {
  data: any;
};
// interface productData {
//   id: number;
//   name: string;
//   description: string;
// }
interface productData {
  data:any
}

const Product = () => {
  
  const [data, setData] = useState<productData[]>([]);
  const [displayedData, setDisplayedData] = useState<productData[]>([]);
  const [loadMoreVisible, setLoadMoreVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  // const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);

  

  const handleLoadMore =()=>{
   
   const newDisplayedData = data.slice(0, displayedData.length + 4);
    setDisplayedData(newDisplayedData);
    setLoadMoreVisible(newDisplayedData.length < data.length);
  }
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get<productData[]>("https://orangli.com/server/api/Products/Products");
      setData(response.data);
      setDisplayedData(response.data.slice(0, 12));
      setLoadMoreVisible(response.data.length > 12);
      setIsLoading(false);
    };

    fetchData();
  }, []);

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
     {isLoading ? (<p>Fetching</p>): (
        <Recommendedproduct data={displayedData}  onLoadMore={handleLoadMore}   />
     )}
      
       
   <SubscriptionPackages />
    <Brands />
    <Footer />
       
    </div>
    //   {/* {showModal && <PageModal />} */}
    //     <ProductLayout />
    //     <ProductListHero/>
    //    <Recommendedproduct data={displayedData}  onLoadMore={handleLoadMore}  />
       
    //     <SubscriptionPackages />
    //     <Brands />
    //     <Footer />
        

        
    // </div>
  )
}

export default Product;



