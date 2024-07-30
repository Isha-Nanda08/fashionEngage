import React from 'react'
import Navbar from "../components/navbar";
import styled from 'styled-components';
import '../styles/home.css';
import SvgPattern from '../components/SvgPattern';


const Container=styled.div`
background-image:url("https://assets.vogue.com/photos/6137eefc598e49fed3cc194a/master/w_1600%2Cc_limit/_DSC5744.jpg");
    width: 100%;
    height: 100vh;
    background-size: cover; 
    background-position: center; 
    background-repeat: repeat; 
    position: fixed;
    
    `
const Content=styled.div`
    position: absolute;
   top:60%;
   left:20%;
    color: #cedbd7;
    font-family:'Great Vibes', cursive;
    font-size:6rem;
    overflow:hidden;
`
const Content2=styled.div`
    height: 200px;
    width: 60%;
    position: absolute;
   top:50%;
   left:0%;
    color: #cedbd7;
    font-family:'Great Vibes', cursive;
    font-size:2rem;
    overflow:hidden;
`

const Home = () => {
    
  return (
    <Container >
        <Navbar/>
        <Content>Embrace  Your  Individuality</Content>
        <Content2>
            <SvgPattern/>
        </Content2>
    </Container>
  )
}

export default Home