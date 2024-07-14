import React, { useState } from "react";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { sliderItems, candidates } from "../data";
import { mobile } from "../responsive";
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Container = styled.div`
width: 100%;
height: 40vh;
display: flex;
position: relative;
overflow: hidden;
${mobile({ display: "none" })}
;
`

const Arrow = styled.div`
width: 35px;
height: 35px;
background-color: #9d8b8b;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
position: absolute;
top: 0;
bottom: 0;
left: ${(props) => props.direction === "left" && "10px"};
right: ${(props) => props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;
z-index: 2;
;
`

const Wrapper = styled.div`
height: 50%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${(props) => props.slideIndex * -100}vw); // Using slideIndex prop here
;
`

const Slide = styled.div`
display: flex;
align-items: top;
justify-content: center;
width: 100vw;
height: 100vh;
background-color: ${(props) => props.bg};
;
`

const ImgContainer = styled.div`
flex: 1;
height: 90vh;
;
`

const Image = styled.img`
margin-left:60px;
width: 60vh;
height: 65%;
/* position:absolute; */
top: 50%;
align-self:right;
`

const InfoContainer = styled.div`
flex: 1;
padding: 0px;
color: #000;
top: 0;
;
`

const Title = styled.h1`
font-size: 30px;

;
`

const Desc = styled.p`
margin-right:65px;
font-size: 15px;
font-weight: 500;

top:0px;
;
`

const Button=styled.button`
padding: 10px;
font-size: 20px;
background-color: #69a587bf;
cursor: pointer;
border: 1px solid #343232a0;
color: #343232;
transition: all 0.5s ease;
margin-left:10px;
margin-top:0px;
&:hover{
    background-color: #69a587bf;
    color: #fff;
    }
`

const Votes = styled.div`
font-size: 23px;
font-weight: 600;
margin-left: 20px;
/* position: absolute; */
/* margin-left:50px; */
;
`
const customModalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1000,  // Ensure the modal is above other content
    },
    overlay: {
        zIndex: 999,  // Ensure the overlay is above other content
    }
};



const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [votes, setVotes] = useState(candidates.map((candidate) => candidate.votes));
    const [modalIsOpen, setModalIsOpen] = useState(false);


    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : sliderItems.length - 1));
        } else {
            setSlideIndex((prevIndex) => (prevIndex < sliderItems.length - 1 ? prevIndex + 1 : 0));
        }
    };

    const handleVoteClick = () => {
        // Increment votes for the current slideIndex candidate
        const updatedVotes = [...votes];
        updatedVotes[slideIndex] += 1;
        setVotes(updatedVotes);
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowBackIosOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item, index) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button onClick={handleVoteClick}>Vote Now</Button>
                            <Votes>Votes: {votes[index]}</Votes>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowForwardIosOutlined />
            </Arrow>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customModalStyles}
            >
                <h2>Vote Recorded!</h2>
                <p>Your vote has been successfully recorded.</p>
                <p>You earned one credit 🪙+1</p>
                <button onClick={closeModal}>Close</button>
            </Modal>
        </Container>
    );
};

export default Slider;
