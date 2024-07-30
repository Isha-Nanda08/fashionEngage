import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: left;
    background-image: url('https://www.jewelstrends.com/wp-content/uploads/2021/08/jt-1.jpg');
    background-size: cover;
`;

const Wrapper = styled.div`
    width: 45%;
    height: 90%;
    padding: 30px;
    background-color: rgba(58, 66, 75, 0.79);
    border-radius: 10px;
    margin-right: 40px;
    margin-left: 10px;
    box-shadow: 0px 0px 10px 0px #000000;
    z-index: 10;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 700;
    color: #fff;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color:#fff;
`;

const Input = styled.input`
    width: 100%;
    margin: 15px 0;
    padding: 10px;
  /* border: 1px solid #ccc; */
    border-radius: 4px;
    background-color:#98b4b4c8;
    color:#fff;
`;

const TextArea = styled.textarea`
    width: 100%;
    margin: 15px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    background-color:#98b4b4c8;
    color:#fff;
`;

const Button = styled.button`
    width: 60%;
    border: none;
    padding: 15px 20px;
    background-color: #074747;
    color: white;
    cursor: pointer;
    margin-bottom: 5px;
    align-self: center;
    &:hover {
        background-color: teal;
        opacity: 0.8;
    }
`;

const ErrorMessage = styled.div`
    color: red;
    margin-top: 10px;
`;

const WriteBlogForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const dbURL = 'http://localhost:5000/auth/writeBlog';
    useEffect(()=>{
        console.log(image);
    },[image])


    const handleSubmit = async (e) => {
        e.preventDefault();

        // const form = {
        //     title,
        //     content
        // };
        const reader=new FileReader();
        
        
        
        const result= await axios.post(
            dbURL,formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            }
        )


        // try {
        //     const response = await fetch(dbURL, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(form),
        //         file:image
        //     });

        //     const data = await response.json();

        //     if (response.ok) {
        //         // Handle successful login
        //         alert('post successful');
        //         // Store the token and redirect to another page if needed
        //         localStorage.setItem('token', data.token);
        //         navigate('/');
        //     } else {
        //         // Handle login errors
        //         alert(data.message || 'post failed');
        //     }
        // } catch (error) {
        //     console.error('Error:', error);
        //     alert('An error occurred. Please try again.');
        // }
    };
return (
    <Container>
        <Wrapper>
            <Title>WRITE YOUR BLOG</Title>
            <Form onSubmit={handleSubmit}>
            <Input
            type="text"
                placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            label="Blog Title"
            required
            />
            <TextArea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                label="Content"
                rows="10"
                required
            />
            <Input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                label="Upload Image (optional)"
            />
            <Button type="submit" disabled={loading}>
                {loading ? "Posting..." : "POST"}
            </Button>
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </Form>
        </Wrapper>
    </Container>
    );
}

export default WriteBlogForm;
