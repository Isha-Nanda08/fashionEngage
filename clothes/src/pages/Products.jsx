import React from 'react';
import Item from '../components/Item';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100vw; height: 100vh;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  border: 2px solid blue;
`;

const Products = () => {
  const prodList = [
    { img: 'i1.png', title: 'Black Suit', price: '800', cloth: '1' },
    { img: 'i2.png', title: 'Kuch Bhi', price: '900', cloth: '1' },
    { img: 'i3.png', title: 'Blue Dress Set', price: '10', cloth: '1' },
  ];

  return (
    <Container>
      {prodList.map((prod) => (
        <Link to={`/product/${prod.cloth}`} key={prod.cloth} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Item {...prod} />
        </Link>
      ))}
    </Container>
  );
};

export default Products;
