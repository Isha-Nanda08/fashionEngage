import styled from "styled-components"
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";


const Container=styled.div`
    width: 100v;
    height: 100vh;
    display: flex;
    /* background-color:#c6e7f946; */
    align-items: center;
    justify-content: right;
    background-image:url('https://fabriclore.com/cdn/shop/articles/Blog-Banner-for-graphics_27_84648c98-68f3-4715-9088-b080e4523743.jpg?crop=center&height=1200&v=1669698428&width=1200');
    background-size: cover;

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
const StyleLink=styled(Link)`
    font-size: 12px;
    margin: 5px 0px;
    text-decoration: underline;
    cursor: pointer;
    color: #080808;
    align-self:center;
    &:hover{
        color: teal;
        opacity: 0.8;
        }
`;
const Image=styled.img`

    width:120vh;
    height:100%;
    margin: 0px 0px 0px 0px;
    /* align-self:center; */
    object-fit: cover;
    border-radius: 10px;
    opacity: 0.7;
    

`; 

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            email,
            password
        };
        try {
            const response = await fetch('http://localhost:5000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            const data = await response.json();

            if (response.ok) {
                // Handle successful login
                alert('Login successful');
                // Store the token and redirect to another page if needed
                localStorage.setItem('token', data.token);
                navigate('/');
            } else {
                // Handle login errors
                alert(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };




  return (
    <Container>
        
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form onSubmit={handleSubmit}>
            <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
                
                <Button type="submit">LOGIN AS USER</Button>
                
                <StyleLink to ="/register">DO NOT YOU REMEMBER THE PASSWORD?</StyleLink>
                <StyleLink to ="/register">CREATE A NEW ACCOUNT</StyleLink>
            </Form>
        </Wrapper>
    </Container>
    
  )
}

export default Login