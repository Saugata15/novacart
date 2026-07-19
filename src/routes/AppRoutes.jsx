import Home from "../pages/Home"
import Shop from "../pages/Shop"
import About from "../pages/About"
import React from 'react'
import { Route, Routes } from 'react-router'
import Cart from "../pages/Cart"

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default AppRoutes
