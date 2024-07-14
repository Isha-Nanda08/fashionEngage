import React, { useState } from 'react';
import Slider from './Slider'; // Import Slider from its file
import styled from 'styled-components';

const Container = styled.div`
   display: flex;
   z-index:2;
   flex-direction: column;
   border: 2px solid #000;
   border-radius: 12px;
   margin: 8px;
   background-color: #f7f4f4f8;
   &:hover {
      background-color: #86b0abf8;
   }
`;

const Wrapper = styled.div``;

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

const Posted = styled.div`
   font-size: 15px;
   right: 18px;
   position: absolute;
`;

const Button = styled.button`
   padding: 5px;
   font-size: 20px;
   background-color: #3996776d;
   cursor: pointer;
   border: 0.5px solid #343232a0;
   color: #343232;
   transition: all 0.5s ease;
   margin-left: 6px;
   border-radius: 9px;

   &:hover {
      background-color: #69a587bf;
      color: #fff;
   }
`;





const Candidate = ({ item }) => {
   const [votes, setVotes] = useState(item.votes); // State to manage votes count

   const handleVoteClick = () => {
      // Update votes count
      setVotes((prevVotes) => prevVotes + 1);
   };

   return (
      <Container>
         <Wrapper>
            <CanDetails>
               <ProfileImage src={item.img} />
               <Name>{item.name}</Name>
               <Button onClick={handleVoteClick}>Know about Me</Button>
               <Posted>posted 1 day ago</Posted>
               
            </CanDetails>
           
         </Wrapper>
         <Slider />
      </Container>
   );
};

export default Candidate;
