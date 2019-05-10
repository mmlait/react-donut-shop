import React from 'react';
import styled from 'styled-components';

import colors from '../colors';


const AppFooter = styled.footer`
  background-color: ${colors.footerBg};
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  padding-top: 50px;
`

const Footer = () => {
  return (
    <AppFooter>
      <span>&copy;2019 Miia Laitinen</span>
    </AppFooter>
  );
}

export default Footer;
