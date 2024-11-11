import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navabr';

const Main = () => {
    return (
        <div>
          <div className='max-w-7xl mx-auto mt-5 '>
          <Navbar></Navbar>
          <Outlet></Outlet>
          </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;