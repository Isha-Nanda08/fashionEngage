import React from 'react'
import '../styles/style.css';

const Banner = () => {
  return (
    <div className="banner">
    <div className="container2" >
      <h1 className="banner-title">
        <span>fashionEngage.</span> Fashion Blog
      </h1>
      <p>everything that you want to know about trends and fashion</p>
      <form>
        <input type="text" className="search-input" placeholder="find your designer . . ." />
        <button type="submit" className="search-btn">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  </div>
  )
}

export default Banner