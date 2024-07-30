import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import FullView from './../components/fullView/FillView';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.div`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const Product = () => {
    // const { id } = useParams();
    const [walking, setWalking] = useState(false);
    // const [product, setProduct] = useState(null);

    

    
    
    

    return (
        <Container>
            
            <Wrapper>
                <ImgContainer>
                    <Image>
                        <FullView clothImg="c3.jpeg" walk={walking} />
                    </Image>
                </ImgContainer>
                <InfoContainer>
                    <Title></Title>
                    <Price>₹800</Price>
                </InfoContainer>
            </Wrapper>
            
        </Container>
    );
};

export default Product;
