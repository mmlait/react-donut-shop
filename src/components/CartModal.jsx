import React, { Component } from 'react';

import CartModalItem from './CartModalItem.jsx';
import { CartModalWrapper, CartModalContent, CloseModal, CartModalHeading, Wrapper,
  CartModalTotal, CartModalTotalSum } from './general/Elements';


class CartModal extends Component {

  render() {
    return (
      <CartModalWrapper id="cartModal">
        <CartModalContent className="cart-modal-content">
          <CloseModal className="close-cart-modal">&times;</CloseModal>
          <CartModalHeading>Your Cart</CartModalHeading>
          <Wrapper>
          {this.props.listOfItems.map( item =>
            <CartModalItem
            name={item.name}
            amount={item.amount}
            image={item.image}
            key={item.donutId}
             />
          )}
          <CartModalTotal>
            <span>Total Amount:</span>
            <CartModalTotalSum> {this.props.sumTotal} </CartModalTotalSum>$
          </CartModalTotal>
          </Wrapper>
        </CartModalContent>
      </CartModalWrapper>
    )
  }
}

export default CartModal;
