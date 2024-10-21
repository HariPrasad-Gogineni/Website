import React from 'react';
import Header from './Header';
import HeroBanner from './HeroBanner';
import Overview from './Overview';
import Services from './Services';
import Doctors from './Doctors';
import Location from './Location';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <Overview />
      <Services />
      <Doctors />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
