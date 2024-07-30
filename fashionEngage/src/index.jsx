import React from "react";
import ReactDom from "react-dom";
import App from "./App"
import { BrowserRouter as Router } from 'react-router-dom'
import './styles/index.css'

ReactDom.render(

    <React.StrictMode>
    
      <App />
    
  </React.StrictMode>,
    
    document.getElementById("root"))