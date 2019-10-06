import React from 'react';

import styled from 'styled-components';
import uniqid from 'uniqid';

import { NavLink } from 'react-router-dom';

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  ul {
    display: flex;
    flex-flow: row;
    max-width: 700px;
    width: 100%;
    justify-content: space-around;
  }
`;

const NavItem = styled.li`
  a {
    text-decoration: none;
    display: flex;
    padding: 15px 5px 15px;
    font-family: 'Montserrat', Roboto, sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 1;
    color: #222;
    outline: none;
    border-bottom: 1px solid transparent;
    transition: all 0.25s ease-in;
    font-stretch: expanded;
    :hover {
      border-bottom: 1px solid purple;
    }
  }
`;

const activeLink = {
  color: '#a40000'
};

const links = [
  { title: 'Home', path: '/' },
  { title: 'Order', path: '/order' },
  { title: 'Other', path: '/other' }
];

const Navigation = () => {
  return (
    <NavContainer>
      <ul>
        {links.map(link => (
          <NavItem key={uniqid()}>
            <NavLink activeStyle={activeLink} exact to={link.path}>
              {link.title.toUpperCase()}
            </NavLink>
          </NavItem>
        ))}
      </ul>
    </NavContainer>
  );
};

export default Navigation;
