import React from 'react';
import Header from '../components/section2/Header';
import logo from '../components/section1/img1/logo1.png';
import Footer from '../components/section2/Footer';
import '../components/section1/App.css';
import { data2 } from '../utils/mocks/data2';




function App() {
  return (
    <div className='App'>
       <img className="card-img center" src={logo} alt=""/>
      <Header />
      <Footer />
    </div>

  );
}

export default App;
