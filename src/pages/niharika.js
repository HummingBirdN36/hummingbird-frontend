import React from 'react';
import { Link } from 'gatsby';

import Layout from '@common/Layout';
import { Container } from '@components/global';
import Header from '@sections/Header';
// import About from '@sections/About';
import NBrands from '@sections/NBrands';

import RecNavbar from '@common/RecNavbar';

const SecondPage = () => (
  <Layout>
    <RecNavbar />
    {/* <Header /> */}
    <NBrands />
    <Container>
      {/* <h1>Here are our picks for you</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link> */}
    </Container>
  </Layout>
);

export default SecondPage;
