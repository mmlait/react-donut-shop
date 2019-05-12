import React, { Component } from 'react';

import CartModalItem from './CartModalItem.jsx';
import { CartModalWrapper, CartModalContent, Wrapper } from './general/Elements';


class CartModal extends Component {

  render() {
    return (
      <CartModalWrapper className="cart-modal" id="cartModal">
        <CartModalContent className="cart-modal-content">
        <p>Your Cart</p>
        <Wrapper>
        {this.props.listOfItems.map( item =>
          <CartModalItem
          name={item.name}
          amount={item.amount}
          image={item.image}
          key={item.donutId}
           />
        )}
        <p>Total Amount: {this.props.sumTotal}</p>
        </Wrapper>
        </CartModalContent>
      </CartModalWrapper>
    )
  }
}

export default CartModal;

/*
<div>
  <CartModalDonutImg src={this.props.productImg}/>
  <span>{this.props.productName}(s)</span>
</div>
*/
/*
<Wrapper>
{this.state.listOfProducts.map( product =>
  <Item
    name={product.name}
    amount={product.amount}
    image={product.image}
    donutId={product.donutId}
    key={product.donutId}
  />
)}
</Wrapper>
*/
