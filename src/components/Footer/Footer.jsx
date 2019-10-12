import React from 'react';

import { Wrapper } from './style';

import NewsletterForm from './NewsletterForm/NewsletterForm';
import Information from './Information/Information';
import Copyright from './Copyrights/Copyright';

const Footer = () => (
  <Wrapper>
    <NewsletterForm />
    <Information />
    <Copyright />
  </Wrapper>
);

export default Footer;
