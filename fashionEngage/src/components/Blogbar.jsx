import React from 'react'
import '../styles/style.css';

const Blogbar = () => {
  return (
    <header>
    <nav className="navbar">
      <div className="container">
        <a href="index.html" className="navbar-brand">fashionEngage.Fashion</a>
        <div className="navbar-nav">
          <a href="/">home</a>
          <a href="/write">Post a Blog</a>
          <a href="#blog">Read blogs</a>
          <a href="http://localhost:5173/">Post your Designs</a>
        </div>
      </div>
    </nav>
  </header>

  )
}

export default Blogbar