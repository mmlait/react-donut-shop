import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Switch, Route } from 'react-router-dom'

import Products from './Products.jsx';
import LinkToShoppingCart from './StartNav.jsx';
import ShoppingCart from './ShoppingCart.jsx';
import LinkToProducts from './ShoppingCartNav.jsx';
import PaymentMethod from './PaymentMethod.jsx';
import BackToCart from './PaymentMethodNav.jsx';
import Footer from './Footer.jsx';
import colors from '../colors';
import { AppWrapper, TopBar, TopBarSection, ShopName, MainContent } from './general/Elements';


export const GlobalStyle = createGlobalStyle`
  html, body, #root {
     background-color: ${colors.appBg};
     margin: 0;
     padding: 0;
     height: 100%;
     color: ${colors.text};
     font-family: "Segoe UI", "Helvetica Neue";
  }
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
