import React, { Component } from 'react';

import Item from './Item.jsx';
import MainHeading, { CartContainer, ListWrapper, Sum, SumTotalText,
   SumTotalValue, ContinueDiv, ContinueToPay, CartImgWrapper, EmptyCartHeading,
   EmptyCartImg } from './general/Elements';


class ShoppingCart extends Component {

  state = {
    listOfItems: [],
    hasItemsInCart: false,
    sumTotal: 0
  }

  componentDidMount(){
    var list = [];
    let numberOfDonutTypes = localStorage.getItem("number_of_donut_types")
    for (let i = 0; i < numberOfDonutTypes; i++) {
      if(localStorage.getItem("donut_" + i + "_amount") !== "0") {
        list.push({
          name: localStorage.getItem("donut_" + i + "_name"),
          image: localStorage.getItem("donut_" + i + "_image"),
          amount: localStorage.getItem("donut_" + i + "_amount"),
          donutId: localStorage.getItem("donut_"+ i + "_id"),
          subTotal: localStorage.getItem("donut_" + i + "_amount") * localStorage.getItem("donut_"+ i + "_price")
        });
      }
    }
    this.updateList(list)
  }

  updateList = (list) => {
    this.setState( prevState => {
      return {
        listOfItems: list,
      }
    }, () => {
      if(this.state.listOfItems.length === 0) {
        this.setState( prevState => {
          return {
            hasItemsInCart: false
          }
        });
      } else {
        this.setState( prevState => {
          return {
            hasItemsInCart: true
          }
        });
      }
    },
    this.updateTotalPrice(list)
  );
  }

  updateTotalPrice = (list) => {
    let sumTotal = 0;
    for (let i = 0; i < list.length; i++) {
      sumTotal = sumTotal + list[i].subTotal
    }
    this.setState( prevState => {
      return {
        sumTotal: sumTotal
      }
    });
  }

  removeItem = (donutId) => {
    this.setState( prevState => {
      return {
        listOfItems: prevState.listOfItems.filter( i => i.donutId !== donutId )
      }
    },
      this.checkIfListIsEmpty
    );
    localStorage.setItem("donut_" + donutId + "_amount", "0")
  }

  checkIfListIsEmpty = () => {
    if(this.state.listOfItems.length === 0) {
      this.setState( prevState => {
        return {
          hasItemsInCart: false
        }
      });
    }
  }

  render() {
    const hasItemsInCart = this.state.hasItemsInCart;
    return (
      <CartContainer>
        <MainHeading>Your Cart</MainHeading>
          <ListWrapper>
          {this.state.listOfItems.map( item =>
            <Item
              name={item.name}
              amount={item.amount}
              image={item.image}
              donutId={item.donutId}
              key={item.donutId}
              removeItem={this.removeItem}
            />
          )}
          </ListWrapper>
          {
            hasItemsInCart ? (
            <ContinueDiv>
              <Sum>
                <SumTotalText>Total Amount:</SumTotalText>
                <SumTotalValue>{this.state.sumTotal} </SumTotalValue>$
              </Sum>
              <ContinueToPay to="./PaymentMethod">Continue to Pay</ContinueToPay>
            </ContinueDiv>
            ) : (
            <div>
              <CartImgWrapper>
                <EmptyCartImg src="/images/shopping-cart.svg" alt="empty cart" />
              </CartImgWrapper>
              <EmptyCartHeading>Your shopping cart is empty!</EmptyCartHeading>
            </div>)
          }
      </CartContainer>
    );
  }
}


export default ShoppingCart;
