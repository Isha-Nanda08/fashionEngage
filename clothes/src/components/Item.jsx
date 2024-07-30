import React from 'react'
import Preview from './preview/Preview'
import styled from 'styled-components'

const Container=styled.a`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #fff;
    border: 2px solid black;
    margin: 5px;
    padding: 10px;
`


const Image=styled.img`
    width: 200px;
    height: 200px;
    
`


const Title=styled.h3`
`



const Price=styled.span`
    font-size: 16px; font-weight: bold;
`


const Item = ({title, price, img, cloth}) => {
  return (
    <Container linkTo={'prod/linkId -> cloth'} >
        <Image src={img}/>
        
        <Title>{title}</Title>
        <Price>Rs.{price}</Price>
    </Container>
  )
}

export default Item