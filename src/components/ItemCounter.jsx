import React, { Component } from 'react';

import { LessItemsBtn, MoreItemsBtn, NumberOfItems } from './general/Elements';


class Counter extends Component {

  state = {
    numberOfItems: 1
  }

  componentDidMount() {
    localStorage.setItem("donut_" + this.props.donutId + "_counter", 1)
  }

  updateCounterValue = () => {
    localStorage.setItem("donut_" + this.props.donutId + "_counter", this.state.numberOfItems)
  };

  lessItems = () => {
    this.setState( prevState => {
      if(prevState.numberOfItems >= 2) {
        return {
          numberOfItems: prevState.numberOfItems - 1
        }
      }
    },
    this.updateCounterValue
    );
  }

  moreItems = () => {
    this.setState( prevState => {
      return {
        numberOfItems: prevState.numberOfItems + 1
      }
    },
    this.updateCounterValue
    );
  }

  render() {
    return (
      <div>
        <LessItemsBtn onClick={this.lessItems}> - </LessItemsBtn>
        <NumberOfItems>{ this.state.numberOfItems}</NumberOfItems>
        <MoreItemsBtn onClick={this.moreItems}> + </MoreItemsBtn>
      </div>
    )
  }
}

export default Counter;
