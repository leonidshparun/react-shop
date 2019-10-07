import React from 'react';

import uniqid from 'uniqid';

import { NavLink } from 'react-router-dom';

import { NavContainer, NavItem, activeLink } from './style';

const links = [
  { title: 'NEW', path: '/' },
  { title: 'MEN SNEAKERS', path: '/men' },
  { title: 'WOMEN SNEAKERS', path: '/women' },
  { title: 'CLOTHING', path: '/clothing' },
  { title: 'LIFESTYLE', path: '/lifestyle' },
  { title: 'SALE', path: '/sale' }
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
