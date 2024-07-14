import React from 'react'
import Candidate from './Candidate'
import { candidates } from '../data'
import styled from 'styled-components'

const Container=styled.div`
    display: flex;
    margin-top:60px;

    flex-direction: column;
   background-image:url('https://st2.depositphotos.com/4060975/8146/v/950/depositphotos_81460644-stock-illustration-fashion-hand-drawn-sketchy-outline.jpg');

`
const ButtonPost=styled.button`
   position:fixed;
   top: 10px;
   z-index:4;
   padding: 15px;
   background-color: teal;
   color: white;
   border-radius: 5px;
   font-size: 15px;
   &:hover{
    background-color: white;
    color: teal;
    border: 1px solid teal;
   }

`

const Wrapper = styled.div`
position:absolute;
   top: 10px;
   z-index:4;
   left:50%;
   `


const CanDetails = styled.div`
   display: flex;
   align-items: center;
   margin: 5px;
`;

const ProfileImage = styled.img`
   height: 50px;
   width: 45px;
   border-radius: 50%;
   margin-right: 10px;
`;

const Name = styled.div`
   font-size: 22px;
`;

const Candidates = () => {
    
  return (
    <Container>
    <ButtonPost >POST YOUR DESIGNS</ButtonPost>
    <Wrapper>
            <CanDetails>
               <ProfileImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-yi8lUjKNVqmWkbY2plqdttxFpzC2Efcq0g&s" />
               <Name>XYZ</Name>
            </CanDetails>
           
         </Wrapper>
        {candidates.map(item=>(
            <Candidate item={item} key={item.id}/>
        ))

        }
         
    </Container>
  )
}

export default Candidates