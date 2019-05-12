import React, { PureComponent } from 'react';

import { CartModalItemRow, CartModalDonutImg, DonutImgDiv, ProductName,
   DonutAmountDiv } from './general/Elements';


class CartModalItem extends PureComponent {
  render() {
    return(
      <CartModalItemRow>
          <DonutImgDiv>
            <CartModalDonutImg src={this.props.image} />
            <ProductName>
              {this.props.name}
            </ProductName>
          </DonutImgDiv>
          <DonutAmountDiv>
            Amount:  {this.props.amount}
          </DonutAmountDiv>
      </CartModalItemRow>
    );
  }
}

export default CartModalItem;
