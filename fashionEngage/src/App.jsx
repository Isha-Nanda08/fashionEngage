import React, { useState } from 'react';
import Home from "./pages/Home";
import {BrowserRouter as  Router,Routes,Route,Navigate} from "react-router-dom";

import Login from './pages/Login';
import Register from './pages/Register';
import Blogs from './pages/Blogs';
import WriteBlogForm from './pages/WriteBlogForm';
import Designer from './pages/Designer'

// import  Stage  from './components/3dview/Stage';

const App = () => {
  const [user, setUser] = useState(false);

  // Simulate login function (replace with real authentication logic)
  const handleLogin = () => setUser(true);
  const handleLogout = () => setUser(false);

  return (
    <Router>
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/blogs" element={<Blogs/>}/>
        <Route exact path="/write" element={<WriteBlogForm/>}/>
        <Route exact path="/designer" element={<Designer/>}/>
        <Route
            path="/register"
            element={user ? <Navigate to="/designer" /> : <Register />}
        />
        <Route
            path="/login"
            element={user ? <Navigate to="/designer" /> : <Login onLogin={handleLogin} />}
        />

        
    </Routes>
    </Router>

    // <div className="App">
    //   <Stage />
    // </div>
    
  )
}

export default App