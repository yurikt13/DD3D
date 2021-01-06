import React from 'react';
import Header from '../components/sections/section1/Header';
import Pricing from '../components/sections/section1/Pricing';
import CtnBox1 from '../components/sections/section1/CtnBox1';
import CtnBox2 from '../components/sections/section1/CtnBox2';
import CtnBox3 from '../components/sections/section1/CtnBox3';
import Footer from '../components/sections/section1/Footer';
import '../components/sections/App.css';
import { data } from '../utils/mocks/data';




function App() {
  return (
    <div className='App'>
      <Header />
      <Pricing />
      <CtnBox1 />
      <CtnBox2 datos = {data} />
      <CtnBox3 />
      <Footer />
    </div>

  );
}

export default App;
