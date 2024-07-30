import styled from "styled-components";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useState } from "react"




const Container=styled.div`
      width: 100v;
    height: 100vh;
    display: flex;
    background-color:#07474747;
    align-items: center;
    justify-content: right;
`;

const Wrapper=styled.div`
    width:40%;
    height: 70%;
    padding: 20px;
    background-color: #ffffffa1;
    
    border-radius: 10px;
    /* border: 1px solid #000; */
    margin-right: 40px;
    margin-left: 0px;
    box-shadow: 0px 0px 10px 0px #000000;
    z-index: 10;
   

`;
const Title=styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form=styled.form`
    display: flex;
    /* flex-wrap: wrap; */
    flex-direction:column;
    /* align-items: center; */

`;


const Input=styled.input`
    min-width: 40%;
    margin:15px 0px;
    padding: 10px;

`;



const Button=styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #074747;
    color: white;
    cursor: pointer;
    margin-bottom: 15px;
    align-self: center;
    &:hover{
        background-color: teal;
        opacity: 0.8;
        }
`;
const StyledLink = styled(RouterLink)`
  font-size: 12px;
  margin: 5px 0px;
  text-decoration: underline;
  cursor: pointer;
  color: #080808;
  align-self: center;
  &:hover {
    color: teal;
    opacity: 0.8;
  }
`;


const Register = () => {
    const [name,setName]= useState('');
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const navigate = useNavigate();
    const dbURL='http://localhost:5000/auth/register';

    const handleSubmit=async (e)=>{
        e.preventDefault() ; // to prevent default submission
        const user = {
            name,
            email,
            password
        };

        try {
            const response = await fetch(dbURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            const data = await response.json();

            if (response.ok) {
                // Handle successful registration
                alert('Registration successful');
                navigate('/login');
                // Redirect or perform other actions
            } else {
                // Handle registration errors
                alert(data.message || 'Registration failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
        

    }
  return (
    
    <Container>
        
        <Wrapper>
            <Title>REGISTER</Title>
            <Form onSubmit={handleSubmit}>
                <Input type="text" placeholder="Username" 
                value={name}
                onChange={(e)=>setName(e.target.value)}/>
                <Input type= "email"
                placeholder="Email" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}/>
                <Input type ="password" 
                value={password}
                placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
                
                
                <Button type="submit">Register</Button>
                <StyledLink to="/login">ALREADY HAVE AN ACCOUNT?</StyledLink>
            </Form>
        </Wrapper>
    </Container>
    
  )
}

export default Register