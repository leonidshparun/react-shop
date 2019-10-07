import React from 'react';

import styled from 'styled-components';
import uniqid from 'uniqid';

import { NavLink } from 'react-router-dom';

const NavContainer = styled.nav`
  ul {
    ::-webkit-scrollbar {
      display: none;
    }
    max-width: 80vw;
    overflow: auto;
    white-space: nowrap;
  }
`;

const NavItem = styled.li`
  display: inline-block;
  color: white;
  text-align: center;
  text-decoration: none;
  a {
    text-decoration: none;
    display: flex;
    padding: 15px 10px;
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
  { title: 'NEW', path: '/' },
  { title: 'MEN SNEAKERS', path: '/' },
  { title: 'WOMEN SNEAKERS', path: '/other' },
  { title: 'CLOTHING', path: '/other' },
  { title: 'LIFESTYLE', path: '/other' },
  { title: 'SALE', path: '/order' }
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
