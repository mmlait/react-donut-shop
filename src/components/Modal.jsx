import React from 'react';

import { ModalWrapper, ModalContent, CloseModal, ModalDonutImg } from './general/Elements';


const Modal = (props) => {
  const donutsAdded = props.donutsAdded;
  const goodbye = props.goodbye;
  const choosePaymentMethod = props.choosePaymentMethod;
  return (
    <ModalWrapper id={props.id} className="modal">
      <ModalContent className="modal-content">
        <CloseModal className="close">&times;</CloseModal>
        {
          donutsAdded &&
          <ModalDonutImg src={props.donutImg} />
        }
        {
          donutsAdded &&
          <p>{props.donutAmount} {props.donutName}(s) added to cart!</p>
        }
        {
          goodbye &&
          <p>Thank you for ordering!</p>
        }
        {
          choosePaymentMethod &&
          <p>Choose payment method!</p>
        }
      </ModalContent>
    </ModalWrapper>
  )
}

export default Modal;
