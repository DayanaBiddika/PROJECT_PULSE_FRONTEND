import React from 'react'
import Header from './header/Header';
import Footer from './footer/Footer';
import {Outlet} from 'react-router-dom'

function RootLayout() {
  return (
    <div>
      <Header/>
      {/* main component and we are giving styles globally of the component which is dynamic content*/}
      <div style={{minHeight:"80vh"}} className='container mt-5' ><Outlet /></div>
          {/* footer is static content */}
      <Footer />
    </div>
  )
}

export default RootLayout;