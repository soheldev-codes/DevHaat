import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Banner from "../Components/Banner/Banner";
import InfoCount from "../Components/InfoCount/InfoCount";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <InfoCount />
      <Footer />
    </>
  );
};

export default Home;
