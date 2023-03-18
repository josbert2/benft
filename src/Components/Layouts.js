import React from 'react';
import Header from './Headers';
import Footer from './Footer';
import Noise from './Noise';



function Layout(props) {
  return (
    <div>
      <Header />
        <Noise />
        {props.children}
        <Footer />
       {/*  */}
    </div>
  );
}

export default Layout;