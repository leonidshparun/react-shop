import styled from 'styled-components';

import { Colors } from 'style/constants';

export const NavContainer = styled.nav`
  ul {
    ::-webkit-scrollbar {
      display: none;
    }
    max-width: 80vw;
    overflow: auto;
    white-space: nowrap;
  }
`;

export const NavItem = styled.li`
  display: inline-block;
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
    color: ${Colors.textMain};
    outline: none;
    border-bottom: 1px solid transparent;
    transition: all 0.25s ease-in;
    font-stretch: expanded;
    :hover {
      border-bottom: 1px solid ${Colors.borderHover};
    }
  }
`;

export const activeLink = {
  color: Colors.activeLink
};
