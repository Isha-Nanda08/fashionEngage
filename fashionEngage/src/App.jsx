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
        <Route exact path="/themeHome" element={<ThemeHome />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/designer" /> : <Register />}
        />
        <Route
          path="/designer"
          element={<Designer/> }
        />
        <Route 
          path="/post"
          element={<Post/>}
        />
      </Routes>
    </Router>
  );
};

export default App;
