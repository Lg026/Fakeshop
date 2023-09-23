import React from 'react';
import {Route, Routes} from 'react-router-dom'
import {Navbar} from './components/Navbar';
import {About} from './components/About';
import {Contact} from './components/Contact'
import {Cart} from './components/Cart';
import {Hero} from './components/Hero';
import {Products} from './components/Products';

function App() {
  return (
    <div className="App">
    <Navbar />
      <Routes>
        <Route path="/" element={<><Hero /><Products /></>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;




