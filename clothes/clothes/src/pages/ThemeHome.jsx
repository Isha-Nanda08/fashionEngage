import React from 'react'
import ThemeNavbar from '../components/Themenavbar'
import Intro from './Intro'
import Theme from './Theme'
import Participate from './Participate'
import ThemeCard  from '../components/ThemeCard'
import Competition from './Competition'
import { FooterWithLogo } from '../components/ThemeFooter'


function ThemeHome() {
  return (
    <div>
      <ThemeNavbar/>
      <Intro/>
      <Theme/>
      <Participate/> 
      <Competition/>
      <FooterWithLogo/>
    </div>
  )
}

export default ThemeHome;