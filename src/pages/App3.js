import React from 'react';
import Header from '../components/section1/Header';
import logo from '../components/section1/img1/logo1.png';
import CtnBoxPrin from '../components/section1/CtnBoxPrin';
import Footer from '../components/section1/Footer';
import CtnBox1 from '../components/section1/CtnBox1';
import CtnBox2 from '../components/section1/CtnBox2';
import CtnBox3 from '../components/section1/CtnBox3';
import '../components/section1/App.css';
import { data } from '../utils/mocks/data';




function App() {
  return (
    <div className='App'>
       <img className="card-img center" src={logo} alt=""/>
      <Header />
      <CtnBoxPrin />
      <CtnBox1 />
      <CtnBox2 datos = {data} />
      <CtnBox3 />
      <Footer />
    </div>

  );
}

export default App;
