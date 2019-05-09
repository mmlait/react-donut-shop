import React, { Component } from 'react';

import Counter from './ItemCounter.jsx';
import Modal from './Modal.jsx';
import MainHeading, { Heading2, MainWrapper, ImgWrapper, ProductContainer,
  AddToCartBtn, DonutImg } from './general/Elements';


const menu = [
    {
      donutId: 0,
      name: "Chocolate Donut",
      image: "/images/chocolate-donut.png",
      amount: 0,
      counter: 1,
      price: 2
    },
    {
      donutId: 1,
      name: "Pink Donut",
      image: "/images/pink-donut.png",
      amount: 0,
      counter: 1,
      price: 2
    },
    {
      donutId: 2,
      name: "Rainbow Donut",
      image: "/images/rainbow-donut.png",
      amount: 0,
      counter: 1,
      price: 2
    }
]

class Products extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      addToCartModalId: "addToCartModal",
      addToCartDonutName: "Chocolate donut",
      addToCartDonutAmount: 1,
      addToCartModalImagePath: "/images/chocolate-donut.png"
    };
  }

  componentDidMount(){
    if(localStorage.getItem("cartIsEmpty") === "true") {
      localStorage.clear();
      for (let i = 0; i < menu.length; i++) {
        localStorage.setItem("donut_" + i + "_name", menu[i].name)
        localStorage.setItem("donut_" + i + "_image", menu[i].image)
        localStorage.setItem("donut_" + i + "_amount", menu[i].amount)
        localStorage.setItem("donut_" + i + "_counter", menu[i].counter)
        localStorage.setItem("donut_" + i + "_id", menu[i].donutId)
        localStorage.setItem("donut_" + i + "_price", menu[i].price)
      }
      localStorage.setItem("number_of_donut_types", menu.length)
      localStorage.setItem("cartIsEmpty", false)
    }

    let modal = document.getElementById(this.state.addToCartModalId);
    let span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
      modal.style.display = "none";
    }

    // Close modal when user clicks outside of the modal
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }
  }

  displayAddToCartModal = (donutId, donutName, image) => {
    let modal = document.getElementById(this.state.addToCartModalId);
    modal.style.display = "block";
    setTimeout(() => {
      modal.style.display = "none";
    }, 1500);
    this.addToCart(donutId, donutName);
    this.addToCartImage(image);
  }

  addToCart = (donutId, donutName) => {
    let counterValue = localStorage.getItem("donut_" + donutId + "_counter")
    let prevAmount = localStorage.getItem("donut_" + donutId + "_amount")
    let amount = parseInt(counterValue) + parseInt(prevAmount)
    localStorage.setItem("donut_" + donutId + "_amount", amount)
    this.setState( prevState => {
      return {
        addToCartDonutName: donutName,
        addToCartDonutAmount: counterValue
      }
    });
  }

  addToCartImage = (image) => {
    this.setState( prevState => {
      return {
        addToCartModalImagePath: image
      }
    });
  }

  render() {
    return (
      <MainWrapper>
        <MainHeading>Welcome!</MainHeading>
        <Heading2>Take your pick</Heading2>
        <Modal id={this.state.addToCartModalId} donutName={this.state.addToCartDonutName} donutAmount={this.state.addToCartDonutAmount} donutImg={this.state.addToCartModalImagePath} donutsAdded={true}/>
        <ImgWrapper>
        <ProductContainer>
          <DonutImg src="/images/chocolate-donut.png" alt="chocolate-donut" />
          <p>Chocolate Donut 2$</p>
          <AddToCartBtn onClick={() => this.displayAddToCartModal(menu[0].donutId, menu[0].name, menu[0].image)}>Add to Cart</AddToCartBtn>
          <Counter donutId={menu[0].donutId}/>
        </ProductContainer>
        <ProductContainer>
          <DonutImg src="/images/pink-donut.png" alt="pink-donut" />
          <p>Pink Donut 2$</p>
          <AddToCartBtn onClick={() => this.displayAddToCartModal(menu[1].donutId, menu[1].name, menu[1].image)}>Add to Cart</AddToCartBtn>
          <Counter donutId={menu[1].donutId}/>
        </ProductContainer>
        <ProductContainer>
          <DonutImg src="/images/rainbow-donut.png" alt="rainbow-donut" />
          <p>Rainbow Donut 2$</p>
          <AddToCartBtn onClick={() => this.displayAddToCartModal(menu[2].donutId, menu[2].name, menu[2].image)}>Add to Cart</AddToCartBtn>
          <Counter donutId={menu[2].donutId}/>
          </ProductContainer>
        </ImgWrapper>
      </MainWrapper>
    );
  }
}


export default Products;
