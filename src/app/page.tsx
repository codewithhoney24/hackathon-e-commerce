

import EditorsPics from "./components/Editors";
import FeatureProducts from "./components/Featureproduct";
import FeaturesPosts from "./components/Features-posts";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";



import FollowUsSection from "./components/Topheader";




// app/page.tsx
export default function Page() {
  return (
    <div>
      <h1>
        <FollowUsSection/>
        
        <Navbar/>
        <Hero/>
      <EditorsPics/>
        <FeatureProducts/>
        <FeaturesPosts/>
        <Footer/>
      
        
       
       
        

        
      </h1>
    </div>
  );
}
