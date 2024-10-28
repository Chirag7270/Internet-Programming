import React from 'react';
import Header from './components/Header';
import InfoSection from './components/InfoSection';  // Merged component for About, Skills, and Contact
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <InfoSection />
      <Footer />
    </div>
  );
}

export default App;
