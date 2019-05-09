import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Switch, Route } from 'react-router-dom'

import Products from './Products.jsx';
import LinkToShoppingCart from './StartNav.jsx';
import ShoppingCart from './ShoppingCart.jsx';
import LinkToProducts from './ShoppingCartNav.jsx';
import PaymentMethod from './PaymentMethod.jsx';
import BackToCart from './PaymentMethodNav.jsx';
import Footer from './Footer.jsx';
import colors from '../colors';


export const GlobalStyle = createGlobalStyle`
  html, body, #root {
     background-color: #38F2F2;
     margin: 0;
     padding: 0;
     height: 100%;
     color: ${colors.text};
     font-family: "Segoe UI", "Helvetica Neue";
  }
`

const AppWrapper = styled.div`
  min-height: 100%;
  position: relative;
`

const TopBar = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: #007984;
  min-height: 80px;
  padding-top: 25px;
  text-align: center;
  margin: 0 auto;
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

class App extends Component {
  render() {
    return (
      <AppWrapper>
      <GlobalStyle />
        <TopBar>
          <TopBarSection>
            <Route exact path='/shoppingCart' component={LinkToProducts}/>
            <Route exact path='/paymentMethod' component={BackToCart}/>
          </TopBarSection>
          <TopBarSection>
            <ShopName>Donut Shop</ShopName>
          </TopBarSection>
          <TopBarSection>
            <Route exact path='/' component={LinkToShoppingCart}/>
          </TopBarSection>
        </TopBar>
        <MainContent>
          <Switch>
            <Route exact path='/' component={Products}/>
            <Route path='/shoppingCart' component={ShoppingCart}/>
            <Route path='/paymentMethod' component={PaymentMethod}/>
          </Switch>
        </MainContent>
        <Footer />
      </AppWrapper>
    );
  }
}

export default App;
