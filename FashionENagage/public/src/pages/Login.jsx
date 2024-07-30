
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('https://fabriclore.com/cdn/shop/articles/Blog-Banner-for-graphics_27_84648c98-68f3-4715-9088-b080e4523743.jpg?crop=center&height=1200&v=1669698428&width=1200');
    background-size: cover;
    background-position: center;
`;

const Wrapper = styled.div`
    width: 100%;
    max-width: 400px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    z-index: 10;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    text-align: center;
    margin-bottom: 20px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Input = styled.input`
    width: 100%;
    max-width: 300px;
    margin: 15px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Button = styled.button`
    width: 100%;
    max-width: 300px;
    border: none;
    padding: 15px 20px;
    background-color: #074747;
    color: white;
    cursor: pointer;
    margin-bottom: 15px;
    border-radius: 5px;
    &:hover {
        background-color: teal;
        opacity: 0.8;
    }
`;

const StyleLink = styled(Link)`
    font-size: 12px;
    margin: 5px 0;
    text-decoration: underline;
    cursor: pointer;
    color: #080808;
    &:hover {
        color: teal;
        opacity: 0.8;
    }
`;

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dbURL = 'http://localhost:5000/auth/login';

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = { email, password };

        try {
            const response = await fetch(dbURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
            });

            const data = await response.json();

            if (response.ok) {
                // Handle successful login
                alert('Login successful');
                localStorage.setItem('token', data.token);
                onLogin(); // Call onLogin to update the parent component state
                navigate('/designer'); // Redirect to Designer page or any other page
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
                        required
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Button type="submit">LOGIN AS USER</Button>
                    <StyleLink to="/register">DO NOT REMEMBER THE PASSWORD?</StyleLink>
                    <StyleLink to="/register">CREATE A NEW ACCOUNT</StyleLink>
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Login;
