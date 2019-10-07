import styled from 'styled-components';
import devices from 'style/responsive';

import { Colors, zIndex } from 'style/constants';

const FullTemplate = `
    'tip aa logo cc cart'
    'qq nav nav nav bb'
`;

const ShrinkTemplate = `
    'logo qq nav tip cart'
`;

const FullTemplateMobile = `
    'logo cart'
    'nav nav'
`;

const ShrinkTemplateMobile = `
    'nav cart'
`;

export const Wrapper = styled.header`
  display: grid;
  justify-content: center;
  justify-items: center;
  align-items: center;
  position: fixed;
  height: ${props => (props.isFull ? '110px' : '45px')};
  width: 100%;
  z-index: ${zIndex.header};
  margin: 0 auto;
  transition: ${props => (!props.isFull ? 'all 0.3s ease-in-out' : 'none')};
  background: ${Colors.backgroundMain};
  border-bottom: 1px solid ${Colors.border};
  grid-template-columns: ${props =>
    props.isFull ? '120px 40px auto 40px 120px' : '120px 40px auto 40px 40px'};
  grid-gap: 10px;
  grid-template-areas: ${props =>
    props.isFull ? FullTemplate : ShrinkTemplate};

  @media ${devices.laptopS} {
    grid-template-columns: ${props =>
      props.isFull ? 'auto 120px' : 'auto  40px'};
    grid-template-areas: ${props =>
      props.isFull ? FullTemplateMobile : ShrinkTemplateMobile};
  }
`;

export const LogoWrapper = styled.div`
  grid-area: logo;

  @media ${devices.laptopS} {
    display: ${props => (props.isFull ? 'flex' : 'none')};
  }
`;

export const CartBtnWrapper = styled.div`
  grid-area: cart;
`;

export const NavWrapper = styled.div`
  grid-area: nav;
`;

export const TipWrapper = styled.div`
  grid-area: tip;
  display: ${props => (props.isFull ? 'flex' : 'none')};

  @media ${devices.laptopS} {
    display: none;
  }
`;
