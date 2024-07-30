import React from 'react';
import styled from 'styled-components';

const Container=styled.div``
const Designer=styled.div``
const Details=styled.div``
const Image=styled.img``
const Name=styled.span``
const BlogText=styled.div``
const Title=styled.div``
const Content=styled.div``
const More=styled.a``


const Blog = ({item}) => {
  return (
    <Container>
        <Designer>
            <Details>
                <Image src=""/>
                <Name>{item.name}</Name>
            </Details>
            <BlogText>
                <Title>{item.title}</Title>
                <Content>{item.content}</Content>
                <More href="#">Read More</More>
            </BlogText>
        </Designer>
    </Container>
  )
}

export default Blog









