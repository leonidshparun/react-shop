import React, { Component } from 'react';

import styled from 'styled-components';
import devices from 'utils/responsive';

import Navigation from 'components/Navigation/Navigation';

import Logo from 'components/Logo/Logo';

import { zIndex } from 'utils/style.constants';

import Tip from './Tip/Tip';
import CartButton from './CartButton/CartButton';

const typeA = `
    'tip aa logo cc cart'
    'qq nav nav nav bb'
`;

const typeB = `
    'logo qq nav tip cart'
`;

const typeAresp = `
    'logo  cart'
    'nav  nav'
`;

const typeBresp = `
    'nav  cart'
`;

const Wrapper = styled.header`
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
  background: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  grid-template-columns: ${props =>
    props.isFull ? '120px 40px auto 40px 120px' : '120px 40px auto 40px 40px'};
  grid-gap: 10px;
  grid-template-areas: ${props => (props.isFull ? typeA : typeB)};

  @media ${devices.laptopS} {
    grid-template-columns: ${props =>
      props.isFull ? 'auto 120px' : 'auto  40px'};
    grid-template-areas: ${props => (props.isFull ? typeAresp : typeBresp)};
  }
`;

const LogoWrapper = styled.div`
  grid-area: logo;

  @media ${devices.laptopS} {
    display: ${props => (props.isFull ? 'flex' : 'none')};
  }
`;

const CartBtnWrapper = styled.div`
  grid-area: cart;
`;

const NavWrapper = styled.div`
  grid-area: nav;
`;

const TipWrapper = styled.div`
  grid-area: tip;
  @media ${devices.laptopS} {
    display: ${props => (props.isFull ? 'flex' : 'none')};
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFull: true
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { isFull } = this.state;
    if (
      document.body.scrollTop > 180 ||
      document.documentElement.scrollTop > 180
    ) {
      if (isFull === true) {
        this.setState({ isFull: false });
      }
    } else if (isFull === false) {
      this.setState({ isFull: true });
    }
  };

  render() {
    const { isFull } = this.state;
    return (
      <Wrapper isFull={isFull}>
        <TipWrapper>
          <Tip isFull={isFull} />
        </TipWrapper>

        <LogoWrapper isFull={isFull}>
          <Logo width={isFull ? 260 : 140} />
        </LogoWrapper>

        <CartBtnWrapper>
          <CartButton isFull={isFull} />
        </CartBtnWrapper>

        <NavWrapper>
          <Navigation />
        </NavWrapper>
      </Wrapper>
    );
  }
}

export default Header;
