import React, { PureComponent } from 'react';

import { ItemRow, ProductInfo, ItemImg, ImgDiv, ItemName, AmountDiv, PriceDiv, AddAndDelete,
   DeleteItemBtn } from './general/Elements';


class Item extends PureComponent {
  render() {
    return(
      <ItemRow>
          <ProductInfo>
            <ImgDiv>
              <ItemImg src={this.props.image} />
              <ItemName>
                {this.props.name}
              </ItemName>
            </ImgDiv>
            <AmountDiv>
              Amount:  {this.props.amount}
            </AmountDiv>
            <PriceDiv>
              Subtotal:  {this.props.amount * 2} $
            </PriceDiv>
          </ProductInfo>

        <AddAndDelete>
          <DeleteItemBtn onClick={ () => this.props.removeItem(this.props.donutId)}>x</DeleteItemBtn>
        </AddAndDelete>
      </ItemRow>
    );
  }
}

export default Item;
