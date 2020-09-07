import React from 'react';
import SearchFood from './Components/SearchFood'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="flex-container">
      <Header />
      <SearchFood/> 
      <Footer/>
    </div>

  );
}

export default App;
