import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext'
import Hero from './Hero';

const Home = () => {
    const { products, loading, error } = useContext(ProductContext);

  return (
    <div className='bg-slate-900 w-full min-h-screen'>
      <div className=''>
        <Hero/>
      </div>
    </div>
  )
}

export default Home
