import styled from "styled-components"
// import logo from "../assets/logo.png";

import { useState } from "react";

import '../styles/home.css'


const Container=styled.div`

z-index: 20;
    font-weight: 400;
    display: flex;
    flex-direction:column;
    color: #000;
    height: 70px;
    background-color: #040404e2;
    position: sticky;
    margin:0;
    background-position: center;
    justify-content: center;
    /* overflow: hidden; */
    /* position: sticky; */
    top: 0;
    `
    /* top: 30px;` */

const Wrapper=styled.div`
    /* padding: 0px 3px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    /* margin: 0 auto; */
    /* max-width: 1200px; */
   
    `



const Left=styled.div`
    flex:1;
    padding-left:15px;
    display: flex;
    align-items: center;
`

const Center=styled.div`
    flex: 1;
    text-align:center;
    display: flex;
    font-size: 50px;
`

const Right=styled.div`
    flex: 1;
    display: flex;
    align-items:center;
    justify-content: flex-end;
    padding-right:15px;
`

const Logo=styled.div`
    
    
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-family: 'Great Vibes', cursive;
    font-size: 40px;
    letter-spacing:3px;
    &:hover{
        transform: scale(1.2);
        background-color:#3241403c ;
    }
    
`


const MenuItem=styled.a`
    font-size: 20px;
    cursor: pointer;
    margin-left: 25px;
    position:relative;
    /* height:100%; */
    color: #fff;
    text-decoration:none;
    
    padding: 15px 15px;
    
    &:hover{
        background-color:#${props=>props.change="3241403c"};
        border-radius: 4px;
        transform:scale(1.08);
        color: #e8eee1ac;

    }
    

`


const DropdownButton = styled.button`
  background-color: #151515d4;
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 14px;
  position: relative;
  margin-left:5px;
  border-radius:12px;
`;

const DropdownContent = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: absolute;
  background-color: #080808;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: 100%;
  right: 0;
`;
 

const DropdownItem = styled.a`
  color: #e8eee1;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #e8eee1dd;
    color: #2a6f68;
  }
`;



const Navbar = () => {
    const [isRegisterDropdownOpen, setIsRegisterDropdownOpen] = useState(false);
  const [isSignInDropdownOpen, setIsSignInDropdownOpen] = useState(false);

  const toggleRegisterDropdown = () => setIsRegisterDropdownOpen(!isRegisterDropdownOpen);
  const toggleSignInDropdown = () => setIsSignInDropdownOpen(!isSignInDropdownOpen);
  return (
   <Container>
        <Wrapper>
            <Left>
                <Logo>
                    fashionEngage
                </Logo>
                
            </Left>
            <Center>
            <MenuItem href="Blogs">BLOGS</MenuItem>
            <MenuItem href="">EVENTS</MenuItem>
            <MenuItem href="">POST</MenuItem>
            <MenuItem href="https://vote-app-steel.vercel.app/">VOTE</MenuItem>
            </Center>

            <Right>
            <DropdownButton onClick={toggleRegisterDropdown}>
                REGISTER
            </DropdownButton>
            <DropdownContent show={isRegisterDropdownOpen}>
                <DropdownItem href="/designer">Register as Designer</DropdownItem>
                {/* <DropdownItem href="/designer">Register as User</DropdownItem> */}
            </DropdownContent>
            <DropdownButton onClick={toggleSignInDropdown}>
                SIGN IN
            </DropdownButton>
            <DropdownContent show={isSignInDropdownOpen}>
                <DropdownItem href="Login">sign in as Designer</DropdownItem>
                <DropdownItem href="#">sign in as User</DropdownItem>
            </DropdownContent>
                    
            </Right>
        </Wrapper>

   </Container>
  )
}

export default Navbar