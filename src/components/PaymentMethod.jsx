import React, { Component } from 'react';

import Modal from './Modal.jsx';
import MainHeading, { ContentWrapper, ChoosePaymentMethodForm, PaperBillOption,
  CardPaymentOption, PaymentMethodInput, PaperBillImg, CardImg, PurchaseBtn,
  ImgWrapperDiv } from './general/Elements';


class PaymentMethod extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
    };
  }
  componentDidMount(){

    let rememberModal = document.getElementById('remember-choose-modal');
    let rememberClose = document.getElementsByClassName("close")[1];

    rememberClose.onclick = function() {
      rememberModal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target === rememberModal) {
        rememberModal.style.display = "none";
      }
    }
  }

  checkIfRadioBtnSelected = () => {
    if(document.getElementById('paper-bill').checked || document.getElementById('card-payment').checked) {
      this.displayGoodbyeModal()
      localStorage.setItem("cartIsEmpty", true)
    } else {
      this.displayRememberChooseModal()
    }
  }

  displayGoodbyeModal = () => {
    let goodbyeModal = document.getElementById('goodbye-modal');
    goodbyeModal.style.display = "block";
    let goodbyeClose = document.getElementsByClassName("close")[0];
    goodbyeClose.style.display = "none";
    setTimeout(() => {
      window.location.replace("./");
    }, 2000);
  }

  displayRememberChooseModal = () => {
    let rememberModal = document.getElementById('remember-choose-modal');
    rememberModal.style.display = "block";
    setTimeout(() => {
      rememberModal.style.display = "none";
    }, 2000);
  }

  render() {
    return (
      <ContentWrapper>
      <MainHeading>Choose Payment Method</MainHeading>
      <ChoosePaymentMethodForm>
        <PaperBillOption>
          <label>
            <PaymentMethodInput type="radio" name="option" id="paper-bill"/>
            Paper Bill
          </label>
          <ImgWrapperDiv>
            <PaperBillImg src="/images/paper-bill.svg" alt="paper bill"/>
          </ImgWrapperDiv>
        </PaperBillOption>
        <CardPaymentOption>
          <label>
            <PaymentMethodInput type="radio" name="option" id="card-payment"/>
            Card Payment
          </label>
          <ImgWrapperDiv>
            <CardImg src="/images/card.svg" alt="card payment"/>
          </ImgWrapperDiv>
        </CardPaymentOption>
      </ChoosePaymentMethodForm>
      <PurchaseBtn onClick={this.checkIfRadioBtnSelected}>Purchase</PurchaseBtn>
      <Modal id="goodbye-modal" goodbye={true}/>
      <Modal id="remember-choose-modal" choosePaymentMethod={true}/>
      </ContentWrapper>
    );
  }
}


export default PaymentMethod;
