
import Footer from "./components/DesktopFooter";
import ShopCards from "./components/DesktopShopCards";
import FeatureProducts from "./components/Featureproduct";
import FeaturesPosts from "./components/Features-posts";
import Hero from "./components/Hero";




// app/page.tsx
export default function Page() {
  return (
    <div>
      <h1>
        <Hero/>
       <ShopCards/> 
        <FeatureProducts/>
        <FeaturesPosts/>
        <Footer
        />
        
       
       
        

        
      </h1>
    </div>
  );
}
