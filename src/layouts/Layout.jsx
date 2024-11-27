import React from 'react';
import { Outlet } from 'react-router';
import Nb from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div>
      <Nb/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Layout;