import styled from "styled-components"



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
const Link=styled.a`
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

const Register = () => {
  return (
    
    <Container>
        <Image src='https://www.holdings.toppan.com/en/news/2020/08/t5v1940000000jq1-img/Todokusuri.jpg'/>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username"/>
                <Input placeholder="password"/>
                
                <Button>LOGIN</Button>
                <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
    
  )
}

export default Register