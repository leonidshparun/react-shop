import React from 'react';

import uniqid from 'uniqid';
import styled from 'styled-components';
import devices from 'style/responsive';

const Container = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;

  @media ${devices.laptopS} {
    flex-flow: column;
  }
`;

const Heading = styled.p`
  font-size: 24px;
  font-family: 'Monserat';
  @media ${devices.laptopS} {
    text-align: center;
    margin-top: 20px;
  }
`;

const LinkList = styled.ul`
  margin: 5px 0;

  li {
    font-family: 'Monserat';
    font-size: 18px;
    padding-bottom: 3px;
  }

  @media ${devices.laptopS} {
    text-align: center;
  }
`;

const who = {
  header: 'WHO?',
  links: [
    { title: 'Contact Us', path: '/' },
    { title: 'About As', path: '/' }
  ]
};

const offer = {
  header: 'OUR OFFER',
  links: [
    { title: 'All', path: '/prod/sneakers' },
    { title: 'Men Sneakers', path: '/prod/sneakers/men' },
    { title: 'Women Sneakers', path: '/prod/sneakers/women' },
    { title: 'Clothing', path: '/prod/clothing' },
    { title: 'Lifestyle', path: '/prod/lifestyle' },
    { title: 'Sale', path: '/prod/sale' }
  ]
};

const information = {
  header: 'INFORMATION',
  links: [
    { title: 'Shipping', path: '/' },
    { title: 'Return', path: '/' },
    { title: 'FAQ', path: '/' },
    { title: 'Secure Payments', path: '/' },
    { title: 'Terms and Conditions', path: '/' }
  ]
};

const Column = ({ data }) => {
  return (
    <div>
      <Heading>{data.header}</Heading>
      <LinkList>
        {data.links.map(link => (
          <li key={uniqid()}>
            <a href={link.path}>{link.title}</a>
          </li>
        ))}
      </LinkList>
    </div>
  );
};

const Links = () => {
  return (
    <Container>
      <Column data={who} />
      <Column data={offer} />
      <Column data={information} />
    </Container>
  );
};

export default Links;
