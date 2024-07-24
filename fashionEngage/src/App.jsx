import React from 'react';
import Home from "./pages/Home";
import {BrowserRouter as  Router,Routes,Route,Navigate} from "react-router-dom";

import Login from './pages/Login';
import Register from './pages/Register';
import Blogs from './pages/Blogs';
// 
const App = () => {
    const user=false;
  return (

    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/blogs" element={<Blogs/>}/>
        <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
        />

        
    </Routes>
    
  )
}

export default App