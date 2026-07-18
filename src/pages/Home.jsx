import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext'

const Home = () => {
    const { products, loading, error } = useContext(ProductContext);

  return (
    <div className='bg-[#0D0D0D] w-full min-h-screen'>
      
    </div>
  )
}

export default Home
