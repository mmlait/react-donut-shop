import React from 'react';
import styled from 'styled-components';


const AppFooter = styled.footer`
  background-color: #007984;
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
