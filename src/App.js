import React from 'react';

import Header from './components/UI/Header';
import Footer from './components/UI/Footer';

import './App.css';
import MemoryGame from './components/MemoryGame/MemoryGame';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <MemoryGame />
      <Footer />
    </React.Fragment>
  );
};

export default App;
