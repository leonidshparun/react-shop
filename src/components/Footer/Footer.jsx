import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.footer`
  background: khaki;
`;

const Footer = () => {
  return (
    <Wrapper>
      <p>CONTACT FORM</p>
      <p>OUR OFFER</p>
      <p>INFORMATION</p>
      <p>COPYRIGHTS</p>
    </Wrapper>
  );
};

export default Footer;
