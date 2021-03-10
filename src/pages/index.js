import React from "react";

import Layout from "@common/Layout";
import Navbar from "@common/Navbar";

import Header from "@sections/Header";
import About from "@sections/About";
import Proof from "@sections/Proof";
import Brands from "@sections/Brands";
import Price from "@sections/Team";
import Faq from "@sections/FAQ";
import Footer from "@sections/Footer";

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <Proof />
    <Brands />
    {/* <Price /> */}
    <Faq />
    <Footer />
  </Layout>
);

export default IndexPage;
