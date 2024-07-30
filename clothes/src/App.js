// import { useState } from 'react';
// import './App.css';
// import Preview from './components/preview/Preview'
// import FullView from './components/fullView/FillView'
// import Products from './pages/Products';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './pages/Products'; // Adjust the path as necessary
import Product from './pages/Product1'; // Adjust the path as necessary
import Product from './pages/Product2'; // Adjust the path as necessary
import Product from './pages/Product3'; // Adjust the path as necessary

function App() {
  // const [walk, setWalk] = useState(false)
  // return <section id='container'>
  //   <Preview clothImg={'c1.jpeg'} />
  //   {/* <button onClick={() => {setWalk(!walk)}}>use click</button>
  //   <FullView clothImg={'c1.jpeg'} walk={walk} /> */}
  // </section>
  // return <div style={{width: '100vw', height: '100vh', border: '2px solid'}}>
  //   <Products />
  // </div>

  

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/product1" element={<Product />} />
      <Route path="/product2" element={<Product />} />
      <Route path="/product2" element={<Product />} />
    </Routes>
  </Router>
);

// export default App;
}

export default App;
