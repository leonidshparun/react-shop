import React, { Component } from 'react';

import Logo from 'shared/Logo/Logo';

import Heading from './Heading/Heading';

import Navigation from './Navigation/Navigation';
import Tip from './Tip/Tip';
import CartButton from './CartButton/CartButton';

import {
  Subheading,
  TipWrapper,
  LogoWrapper,
  CartBtnWrapper,
  NavWrapper,
  HeaderWrapper
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
      document.body.scrollTop > 35 ||
      document.documentElement.scrollTop > 35
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
      <HeaderWrapper>
        <Heading />
        <Subheading isFull={isFull}>
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
        </Subheading>
      </HeaderWrapper>
    );
  }
}

export default Header;
