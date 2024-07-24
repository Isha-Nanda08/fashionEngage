import React from 'react'
import Blogbar from '../components/Blogbar'
import Banner from '../components/Banner'
import Design from '../components/Design'
import BlogSection from '../components/BlogSection'
import AboutSection from '../components/AboutSection'
import '../styles/style.css';
const Blogs = () => {
  return (
    <div>
        <Blogbar/>
        <Banner/>
        <Design/>
        <BlogSection/>
        <AboutSection/>
    </div>
  )
}

export default Blogs