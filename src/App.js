import logo from './logo.svg';
import './App.css';


//  #2b56f5
//  #46bdf4 
import React from 'react';
import Layout from './Components/Layouts';

import Home2 from './Components/Home2';

import Partners from './Pages/Partners';
import Team from './Pages/Team';
import Services from './Pages/Services';

const length = 10; // Longitud del array simulado
const simulatedArray = Array.from({ length }, (_, index) => index);

function App() {
  return (
    <Layout>
      <Home2 />
      <Services />
  
      <Team />
      <Partners />
    </Layout>
  );
}

export default App;