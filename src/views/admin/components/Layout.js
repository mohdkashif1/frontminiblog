import React from 'react';
import Footer from '../../../components/footer/Footer';
import Navbar from '../../../components/navbar/Navbar';

const Layout = ({child}) => {
  return <>
      <Navbar/>
      {child}
      <Footer/>
  </>;
};

export default Layout;
