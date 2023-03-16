import React from 'react';
import Header from './Headers';
import Footer from './Footer';

function Layout(props) {
  return (
    <div>
      <Header />
        {props.children}
      <Footer />
    </div>
  );
}

export default Layout;