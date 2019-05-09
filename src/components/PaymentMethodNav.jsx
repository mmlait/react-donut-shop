import React from 'react';

import { LinkImg, LinkText, BackToCartLink, NavImgDiv } from './general/Elements';


const BackToCart= () => {
  return (
    <BackToCartLink to="./shoppingCart">
    <LinkText>Back to Shopping Cart</LinkText>
    <NavImgDiv id="shopping-cart-icon">
      <LinkImg src="/images/shopping-cart.svg" alt="home"/>
    </NavImgDiv>
    </BackToCartLink>
  )
}

export default BackToCart;
