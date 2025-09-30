// src/pages/Home.jsx
import React from "react";
import Firstnavbar from "../components/home/firstnavbar";
import Navbar from "../components/common/navbar";
import HeroBanner from "../components/home/herobanner";
import Elemantor from "../components/home/elemantor";
import IceCategory from "../components/home/icecategory";
import PremiumIce from "../components/home/premiumice";
import GoodStuff from "../components/home/goodstuff";
import Flavourweek from "../components/home/flavourweek";
import Reviews from "../components/home/reviews";
import BestDeal from "../components/home/Bestdeal";
import Marque from "../components/home/Marquee";
import Restautrantloc from "../components/home/restautrantloc";
import Service from "../components/home/Service";
import Footer from "../components/common/footer";
import ScrollToTop from "../components/common/ScrolltopButton";

function Home() {
  return (
    <>
      <Firstnavbar />
      <Navbar />
      <HeroBanner />
      <Elemantor />
      <IceCategory />
      <PremiumIce />
      <GoodStuff />
      <Flavourweek />
      <Reviews /> 
      <BestDeal />
      <Marque />
      <Restautrantloc />
      <Service />
      <ScrollToTop />
      <Footer/>
    </>
  );
}

export default Home;
