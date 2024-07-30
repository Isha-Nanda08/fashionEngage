import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for the text animation
const textAnimate = keyframes`
  0% {
    stroke-dasharray: 0 50%;
    stroke-dashoffset: 20%;
    fill: #64d7d7;
  }
  100% {
    stroke-dasharray: 50% 0;
    stroke-dashoffset: -20%;
    fill: hsla(189, 68%, 75%, 0%);
  }
`;

// Styled component for the SVG container
const SvgContainer = styled.div`
  height: 100vh;
  width: 100%;
  font-family: 'Lora', serif;
  overflow:hidden;
  
`;

// Styled component for the SVG text
const SvgText = styled.text`
  font-family: 'Lora', serif;
  stroke: #ffa5d8;
  font-size: 70px;
  font-weight: 700;
  stroke-width: 3;
  animation: ${textAnimate} 5s infinite alternate;
`;

// Add Google Fonts link in the head
const addGoogleFontsLink = () => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
};

const SvgPattern = () => {
  // Ensure Google Fonts link is added when the component mounts
  React.useEffect(() => {
    addGoogleFontsLink();
  }, []);

  return (
    <SvgContainer>
      <svg height="100%" width="100%">
  
        <SvgText x="60%" y="10%" textAnchor="middle" >
          Gracias hfdkjdgghj
        </SvgText>
      </svg>
    </SvgContainer>
  );
};

export default SvgPattern;
