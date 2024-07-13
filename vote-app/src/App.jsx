import React from 'react'
import Navbar from "./components/Navbar";
import Candidates from './components/Candidates';
import Footer from './components/Footer';
import Timer from './components/Timer';


const App = () => {
  return (
    <div>
   {/* <Navbar/> */}
   <Timer/>
   <Candidates/>
   {/* <Footer/> */}
   </div>
  )
}

export default App;