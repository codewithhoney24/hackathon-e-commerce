import React from "react";
import Footer from "@/app/components/Footer";
import Work from "@/app/components/about/work";
import Problem from "@/app/components/about/problem";
import MeetTeam from "@/app/components/about/meet";
import AboutUs from "@/app/components/about/aboutUs";
import BigCompannies from "@/app/components/about/companies";
import { Navbar } from "../components/Navbar";

const AboutPage = () => {
  return (
    <>
      <Navbar />
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
