import React from 'react';

import uniqid from 'uniqid';

import { NavLink } from 'react-router-dom';

import { NavContainer, NavItem, activeLink } from './style';

const links = [
  { title: 'All', path: '/prod/' },
  { title: 'NEW', path: '/prod/sneakers' },
  { title: 'MEN SNEAKERS', path: '/prod/sneakers/men' },
  { title: 'WOMEN SNEAKERS', path: '/prod/sneakers/women' },
  { title: 'CLOTHING', path: '/prod/clothing' },
  { title: 'LIFESTYLE', path: '/prod/lifestyle' },
  { title: 'SALE', path: '/prod/sale' }
];

const Navigation = () => (
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

export default Navigation;
