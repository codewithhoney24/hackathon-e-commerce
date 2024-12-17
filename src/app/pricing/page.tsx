

import React from 'react'

import FreeTrail from '@/app/components/pricing/FreeTrail'
import PriceFaqs from '@/app/components/pricing/PriceFaqs'
import PriceSimple from '@/app/components/pricing/PriceSimple'
import Plan from '@/app/components/pricing/Plan'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/pricing/Header'

function Price() {
  return (
    <div>
    
    <Header/>
    <PriceSimple/>
      <Plan/>
    <PriceFaqs/>
      <FreeTrail/>
      <Footer/>
      
      
    
        
    </div>
  )
}

export default Price;