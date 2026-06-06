import Footer from "../components/Footer";
import Cards from "../components/shop/Card";
import Company from "../components/shop/Company";

import Header from "../components/shop/Header";
import Hero from "../components/shop/Hero";
import { getAllProducts } from "../components/sanityFetch";

const ShopPage = async () => {
  const products = await getAllProducts();

  return (
    <>
     <Header/>
     <Hero/>
     <Company/>
     <Cards products={products} />
     <Footer/>
    </>
  );
};

export default ShopPage;
