import React from 'react';

import { LinkImg, LinkText, ToProducts, CartNavImageDiv } from './general/Elements';


const LinkToProducts= () => {
  return (
    <ToProducts to="./">
      <LinkText>Back to Products</LinkText>
      <CartNavImageDiv id="home-icon">
        <LinkImg src="/images/home.svg" alt="home"/>
      </CartNavImageDiv>
    </ToProducts>
  )
}

export default LinkToProducts;
