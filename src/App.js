import React from 'react';
import './App.css';
import Header from './views/Header';
import Navbar from './views/Navbar';

function App() {
  return (
    <div className="App">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
      <Navbar />
      <Header />
      </div>
    </div>
  );
}

export default App;
