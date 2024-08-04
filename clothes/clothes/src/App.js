// import './app.css'
// import ArView from './components/arView/ArView';
// import ItemPage from './pages/item/ItemPage';
// import Products from './pages/products/Products';
// const App = () => {    
//       return (
//         // <ArView />
//         <ItemPage />
//         // <Products />
//   );
// };

// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Blogs from './pages/Blogs';
import WriteBlogForm from './pages/WriteBlogForm';
import Designer from './pages/Designer';
import ThemeHome from './pages/ThemeHome';
import Post from './pages/Post';
import Design from './components/Design';
// import ItemPage from './pages/item/ItemPage';
import Products from './pages/products/Products';
import ItemPage1 from './pages/item/ItemPage1';
import ItemPage3 from './pages/item/ItemPage3';
import ItemPage4 from './pages/item/ItemPage4';
import ArView from './components/arView/ArView';
// import Stage from './components/3dview/Stage';

const App = () => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || false);

  // Simulate login function (replace with real authentication logic)
  const handleLogin = () => {
    setUser(true);
    localStorage.setItem('user', JSON.stringify(true)); // Save state to localStorage
  };

  const handleLogout = () => {
    setUser(false);
    localStorage.setItem('user', JSON.stringify(false)); // Save state to localStorage
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/write" element={<WriteBlogForm />} />
        {/* <Route exact path="/designer" element={user ? <Designer /> : <Navigate to="/login" />} /> */}
        {/* <Route exact path="/themeHome" element={<ThemeHome />} /> */}
        {/* <Route
          path="/register"
          element={user ? <Navigate to="/designer" /> : <Register />}
        /> */}
        {/* <Route
          path="/designer"
          element={<Designer/> }
        /> */}
        <Route 
          path="/post"
          element={<Post/>}
        />
        <Route exact path="/item1" element ={<ItemPage1/>}/>
        <Route exact path="/item3" element ={<ItemPage3/>}/>
        <Route exact path="/item4" element ={<ItemPage4/>}/>
        <Route exact path="/products" element ={<Products/>}/>
        <Route exact path="/arview" element ={<ArView/>}/>
      </Routes>
    </Router>
  );
};

export default App;





