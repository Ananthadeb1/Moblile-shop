
import './App.css';
import { useEffect, useState } from 'react';
import Shop from './components/shop/Shop';
import Header from './components/header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;