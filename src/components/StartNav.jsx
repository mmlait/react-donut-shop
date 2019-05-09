import React from 'react';

import { LinkImg, LinkText, StartNavImgDiv, ToShoppingCart } from './general/Elements';


const LinkToShoppingCart= () => {
  return (
    <ToShoppingCart to="./shoppingCart">
      <StartNavImgDiv id="cart-icon">
        <LinkImg src="/images/shopping-cart.svg" alt="shopping-cart"/>
      </StartNavImgDiv>
      <LinkText>Shopping Cart</LinkText>
    </ToShoppingCart>
  )
}


export default LinkToShoppingCart;
