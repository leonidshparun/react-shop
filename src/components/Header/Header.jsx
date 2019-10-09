import React, { Component } from 'react';

import Logo from 'shared/Logo/Logo';

import Navigation from './Navigation/Navigation';

import Tip from './Tip/Tip';
import CartButton from './CartButton/CartButton';

import {
  Wrapper,
  TipWrapper,
  LogoWrapper,
  CartBtnWrapper,
  NavWrapper
} from './style';

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
      document.body.scrollTop > 60 ||
      document.documentElement.scrollTop > 60
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
        <TipWrapper isFull={isFull}>
          <Tip />
        </TipWrapper>

        <LogoWrapper isFull={isFull}>
          <Logo />
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
