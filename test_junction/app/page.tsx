
import EditorsPics from "./components/Editors";
import FeatureProducts from "./components/Featureproduct";
import FeaturesPosts from "./components/Features-posts";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import FollowUsSection from "./components/Topheader";
import { getAllProducts } from "./components/sanityFetch";

export default async function Page() {
  const products = await getAllProducts();

  return (
    <main>
      <FollowUsSection/>
      <Navbar/>
      <Hero/>
      <EditorsPics/>
      <FeatureProducts products={products} />
      <FeaturesPosts/>
      <Footer/>
    </main>
  );
}
