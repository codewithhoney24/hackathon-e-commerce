import React from "react";
import Footer from "@/app/components/about/footer";
import Work from "@/app/components/about/work";
import Problem from "@/app/components/about/problem";
import MeetTeam from "@/app/components/about/meet";
import AboutUs from "@/app/components/about/aboutUs";
import BigCompannies from "@/app/components/about/companies";
import Header from "../components/about/Header";

const AboutPage = () => {
  return (
    <>
    <Header/>
      <AboutUs />
      <Problem />
      <MeetTeam />
      <BigCompannies />
      <Work />
      <Footer />
    </>
  );
};

export default AboutPage;
