import styled from 'styled-components';
import {Link} from 'react-router-dom';

import colors from '../../colors';


// ---------- general ----------
const MainHeading = styled.h1`
  text-align: center;
  padding: 40px 0 20px;
`

const Heading2 = styled.h2`
  padding-bottom: 50px;
  font-weight: bold;
  text-align: center;
`

const LinkImg = styled.img`
  height: 20px;
`

const LinkText = styled.span`
  @media (max-width: 600px) {
    display: none;
  }
`


// ---------- App.jsx ----------
const AppWrapper = styled.div`
  min-height: 100%;
  position: relative;
`

const TopBar = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: ${colors.topBarBg};
  min-height: 100px;
  text-align: center;
  margin: 0 auto;
  align-items: center;
`

const TopBarSection = styled.div`
  flex-basis: 30%;
`

const ShopName = styled.span`
  width: 100%;
  margin: 0 auto;
`

const MainContent = styled.div`
  min-height: 120vh;
  padding-bottom: 100px;
`


// ---------- StartNav.jsx ----------
const StartNavImgDiv = styled.div`
  border-radius: 50%;
  border: 1px solid ${colors.text};
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-right: 10px;
`

const ToShoppingCart = styled(Link)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 5%;
  color: ${colors.text};
  text-decoration: none;
  &:hover {
    color: ${colors.linkHover};
  }
  &:hover #cart-icon {
    background-color: ${colors.linkHover};
  }
`


// ---------- Products.jsx ----------
const MainWrapper = styled.div`
  padding-bottom: 60px;
`

const ImgWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: start;
  width: 60%;
  margin: 0 auto;
  @media (max-width: 1050px) {
    width: 90%;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`

const ProductContainer = styled.div`
  font-weight: bold;
  text-align: center;
  @media (max-width: 600px) {
    margin-bottom: 50px;
  }
`

const AddToCartBtn = styled.button `
  background-color: ${colors.buttonBg};
  color: ${colors.text};
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  margin-bottom: 5px;
  &:hover {
    background-color: ${colors.buttonHoverBg};
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`

const DonutImg = styled.img`
  max-height: 70px;
`


// ---------- ItemCounter.jsx ----------
const LessItemsBtn = styled.button`
  background-color: ${colors.appBg};
  color: ${colors.buttonBg};
  width: 35px;
  height: 35px;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  &:hover {
    color: ${colors.buttonHoverBg};
    background: ${colors.counterBtnHoverBg};
    border-radius: 50%;
  }
  &:focus {
    outline: none;
  }
`

const MoreItemsBtn = styled.button`
  background-color: ${colors.appBg};
  color: ${colors.buttonBg};
  width: 35px;
  height: 35px;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  &:hover {
    color: ${colors.buttonHoverBg};
    background: ${colors.counterBtnHoverBg};
    border-radius: 50%;
  }
  &:focus {
    outline: none;
  }
`

const NumberOfItems = styled.span`
  padding: 0 5px;
`


// ---------- Modal.jsx ----------
const ModalWrapper = styled.div`
  display: none;
  position: fixed;
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.modalBgOverlay};
`

const ModalContent = styled.div`
  color: ${colors.modalText};
  background-color: ${colors.modalBoxBg};
  margin: auto;
  padding: 40px 20px;
  width: 50%;
  text-align: center;
  font-size: 1.5rem;
  border-radius: 5px;
  border: 2px solid ${colors.text};
  @media (max-width: 500px) {
    width: 80%;
  }
`

const CloseModal = styled.span`
  color: ${colors.closeModal};
  float: right;
  font-size: 28px;
  font-weight: bold;
  padding: 5px;
  &:hover {
    color: ${colors.closeModalHover};
    text-decoration: none;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`

const ModalDonutImg = styled.img`
  max-width: 90px;
`


// ---------- CartModal.jsx ----------
const CartModalWrapper = styled.div`
  display: none;
  position: fixed;
  right: 5px;
  top: 105px;
  width: 22%;
  min-height: 15%;
  background-color: ${colors.text};
  border-radius: 5px;
  @media (max-width: 1050px) {
    width: 29%;
  }
  @media (max-width: 830px) {
    width: 33%;
  }
  @media (max-width: 500px) {
    width: 50%;
  }
  @media (max-width: 350px) {
    width: 90%;
  }
`

const CartModalContent = styled.div`
  color: ${colors.modalText};
  padding: 10px;
`

const CartModalHeading = styled.h4`
  text-align: center;
  margin: 15px 0;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  font-size: 0.7rem;
`

const CartModalTotal = styled.div`
  align-self: flex-end;
  padding: 20px 10px 20px 0;
`

const CartModalTotalSum = styled.span`
  font-weight: bold;
`

const ClearCartBtn = styled.button`
  background-color: ${colors.buttonBg};
  color: ${colors.text};
  align-self: flex-start;
  border: none;
  border-radius: 5px;
  padding: 5px;
  &:hover {
    background-color: ${colors.buttonHoverBg};
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`


// ---------- CartModalItem.jsx ----------
const CartModalItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid ${colors.cartModalRowBorder};
  @media (max-width: 830px) {
    padding: 5px 0;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const CartModalDonutImg = styled.img`
  max-width: 30px;
  @media (max-width: 1050px) {
    width: 23px;
  }
`

const DonutImgDiv = styled.div`
  display: flex;
  align-items: center;
`

const ProductName = styled.div`
  margin-left: 10px;
`

const DonutAmountDiv = styled.div`
  @media (max-width: 600px) {
    padding-top: 5px;
    padding-left: 33px;
  }
`


// ---------- ShoppingCart.jsx ----------
const CartContainer = styled.div`
  text-align: center;
  font-weight: bold;
  @media (max-width: 700px) {
    padding-bottom: 100px;
  }
`

const ListWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  @media (min-width: 1025px) {
    width: 60%;
  }
`

const Sum = styled.div`
  margin: 60px 10% 30px 0;
  @media (min-width: 1025px) {
    margin-right: 20%;
  }
`

const SumTotalText = styled.span`
  margin-right: 10px;
`

const SumTotalValue = styled.span`
  font-size: 1.3rem;
  color: ${colors.sumTotalValue};
`

const ContinueDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const ContinueToPay = styled(Link)`
  background-color: ${colors.buttonBg};
  color: ${colors.text};
  border: none;
  border-radius: 5px;
  padding: 15px 20px;
  margin-right: 10%;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    background-color: ${colors.buttonHoverBg};
  }
  @media (min-width: 1025px) {
    margin-right: 20%;
  }
`

const CartImgWrapper = styled.div`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  background-color: ${colors.emptyCartImgBg};
  display: flex;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;
`

const EmptyCartImg = styled.img`
  height: 100px;
`


// ---------- ShoppingCartNav.jsx ----------
const ToProducts = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${colors.text};
  margin-left: 5%;
  text-decoration: none;
  &:hover {
    color: ${colors.linkHover};
  }
  &:hover #home-icon{
    background-color: ${colors.linkHover};
  }
`

const CartNavImageDiv = styled.div`
  border-radius: 50%;
  border: 1px solid ${colors.text};
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 10px;
`


// ---------- Item.jsx ----------
const ItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid ${colors.text};
  &:last-of-type {
    margin-bottom: 10px;
  }
`

const ProductInfo = styled.div`
  display: flex;
  flex-basis: 80%;
  align-items: center;
  padding-left: 20px;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: start;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`

const ItemImg = styled.img`
  height: 50px;
`

const ImgDiv = styled.div`
  display: flex;
  flex-basis: 50%;
  align-items: center;
  @media (max-width: 700px) {
    padding-bottom: 10px;
  }
`

const ItemName = styled.div`
  margin-left: 10px;
`

const AmountDiv = styled.div`
  flex-basis: 25%;
  @media (max-width: 700px) {
    padding-bottom: 10px;
  }
`

const PriceDiv = styled.div`
  flex-basis: 25%;
  @media (max-width: 700px) {
    padding-bottom: 10px;
  }
`

const AddAndDelete = styled.div`
  flex-basis: 20%;
  @media (max-width: 700px) {
    padding-bottom: 10px;
  }
`

const DeleteItemBtn = styled.button`
  background-color: ${colors.buttonBg};
  color: ${colors.text};
  padding: 2px;
  width: 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${colors.buttonHoverBg};
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`


// ---------- PaymentMethod.jsx ----------
const ContentWrapper = styled.div`
  font-weight: bold;
  width: 60%;
  margin: 0 auto;
  @media (max-width: 700px) {
    width: 80%
  }
`

const ChoosePaymentMethodForm = styled.form`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 500px;
  font-size: 1.5rem;
  @media (max-width: 450px) {
    flex-direction: column;
    height: 120px;
  }
`

const PaperBillOption = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 450px) {
    flex-direction: row;
  }
`

const CardPaymentOption = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 450px) {
    flex-direction: row;
  }
`

const PaymentMethodInput = styled.input`
  cursor: pointer;
  &:hover {
    background-color: ${colors.buttonHoverBg};
  }
`

const PaperBillImg = styled.img`
  height: 60px;
  @media (max-width: 450px) {
    height: 25px;
  }
`

const CardImg = styled.img`
  height: 60px;
  @media (max-width: 450px) {
    height: 25px;
  }
`

const PurchaseBtn = styled.button`
  background-color: ${colors.buttonBg};
  color: ${colors.text};
  float: right;
  margin-right: 20%;
  margin-top: 70px;
  padding: 15px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: ${colors.buttonHoverBg};
  }
  @media (max-width: 450px) {
    float: left;
    margin-right: 0;
  }
  @media (min-width: 1400px) {
    margin-right: 30%;
  }
`

const ImgWrapperDiv = styled.div`
  background-color: ${colors.imgBg};
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 15px;
  @media (max-width: 450px) {
    height: 35px;
    width: 35px;
    margin: 0 0 0 20px;
    align-items: center;
  }
`


// ---------- PaymentMethodNav.jsx ----------
const BackToCartLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${colors.text};
  margin-left: 5%;
  text-decoration: none;
  &:hover {
    color: ${colors.linkHover};
  }
  &:hover #shopping-cart-icon{
    background-color: ${colors.linkHover};
  }
`

const NavImgDiv = styled.div`
  border-radius: 50%;
  border: 1px solid ${colors.text};
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 10px;
`


export {
  // general
  MainHeading as default, Heading2, LinkImg, LinkText,
  // App.jsx
  AppWrapper, TopBar, TopBarSection, ShopName, MainContent,
  // StartNav.jsx
  StartNavImgDiv, ToShoppingCart,
  // Products.jsx
  MainWrapper, ImgWrapper, ProductContainer, AddToCartBtn, DonutImg,
  // ItemCounter.jsx
  LessItemsBtn, MoreItemsBtn, NumberOfItems,
  // Modal.jsx
  ModalWrapper, ModalContent, CloseModal, ModalDonutImg,
  // CartModal.jsx
  CartModalWrapper, CartModalContent, CartModalHeading, Wrapper, CartModalTotal,
  CartModalTotalSum, ClearCartBtn,
  // CartModalItem.jsx
  CartModalItemRow, CartModalDonutImg, DonutImgDiv, ProductName, DonutAmountDiv,
  // ShoppingCart.jsx
  CartContainer, ListWrapper, Sum, SumTotalText, SumTotalValue, ContinueDiv,
  ContinueToPay, CartImgWrapper, EmptyCartImg,
  // ShoppingCartNav.jsx
  ToProducts, CartNavImageDiv,
  // Item.jsx
  ItemRow, ProductInfo, ItemImg, ImgDiv, ItemName, AmountDiv, PriceDiv, AddAndDelete, DeleteItemBtn,
  // PaymentMethod.jsx
  ContentWrapper, ChoosePaymentMethodForm, PaperBillOption, CardPaymentOption,
  PaymentMethodInput, PaperBillImg, CardImg, PurchaseBtn, ImgWrapperDiv,
  // PaymentMethodNav.jsx
  BackToCartLink, NavImgDiv
 };
