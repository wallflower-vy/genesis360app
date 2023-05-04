import Footer from '@/Components/Footer/Footer'
import Brands from '@/Components/Products/Brands'
import ProductListHero from '@/Components/Products/ProductListHero'
import ProductLayout from '@/Components/Products/ProductNav'
import Recommendedproduct from '@/Components/Products/Recommendedproduct'
import SubscriptionPackages from '@/Components/Products/SubscriptionPackages'
// import PageModal from '@/Components/UI/PageModal'
import ProductModal from '@/Components/UI/ProductModal'


import axios from 'axios'

import React, {  useEffect, useState } from 'react'



interface productData {
  data:any
}

const Product = () => {
  
  const [data, setData] = useState<productData[]>([]);
  const [displayedData, setDisplayedData] = useState<productData[]>([]);
  const [loadMoreVisible, setLoadMoreVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [cartStatus, setCartStatus] = useState<string>('');


  

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
    const body = document.querySelector('body');
    if (selectedProduct) {
      body && body.classList.add('modal-open');
    } else {
      body && body.classList.remove('modal-open');
    }
    

    fetchData();
  }, [selectedProduct]);


  function handleProductClick(product: any) {
    setSelectedProduct(product);
  }

  function handleCloseModal() {
    setSelectedProduct(null);
  }
  function hideModal() {
    setSelectedProduct(null);
  }
  function handleAddToCart() {
  
    setCartStatus('success');
    hideModal();
    setTimeout(() => {
      setCartStatus('');
    }, 5000);
  }

  
  
  
  return (
    <div>
       {cartStatus === 'success' && (
        <div className='bg-lightgreen  flex justify-center py-8'><p className='text-3xl'>Added to cart Successfully!</p></div>
      
      )}
     
       
      <ProductLayout />
     <ProductListHero/>
     {isLoading ? (<p>Fetching</p>): (
        <Recommendedproduct data={displayedData}  onLoadMore={handleLoadMore}   onProductClick={handleProductClick}/>
       
     )}
      {selectedProduct && (
          <ProductModal
            data={selectedProduct}
            onClose={handleCloseModal}
            onAddToCart={handleAddToCart}
          />
        )}
      
       
   <SubscriptionPackages />
    <Brands />
    <Footer />
       
    </div>
    
  )
}

export default Product;



