import React from 'react'
import Header from './components/Header'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <AppRoutes/>
      <Footer/>
    </div>
  )
}

export default App
