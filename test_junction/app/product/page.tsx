

import ProductOne from '@/app/components/shop/productOne'
import React from 'react'
import Footer from '../components/Footer'
import { getAllProducts } from '../components/sanityFetch'

async function page() {
  const products = await getAllProducts();

  return (
    <div>
        <ProductOne products={products}/>
        <Footer/>
    </div>
  )
}

export default page
