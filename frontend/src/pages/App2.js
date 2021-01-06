import React from 'react';
import Header from '../components/sections/section2/Header';
import Pricing from '../components/sections/section2/Pricing';
import CtnBox1 from '../components/sections/section2/CtnBox1';
import CtnBox2 from '../components/sections/section2/CtnBox2';
import Footer from '../components/sections/section2/Footer';
import '../components/sections/App.css';
import { tableData } from '../utils/mocks/tableData';




function App() {
  return (
    <div className='App'>
      <Header />
      <Pricing />
      <CtnBox1 />
      <CtnBox2 tableData = { tableData } />
      <Footer />
    </div>

  );
}

export default App;
