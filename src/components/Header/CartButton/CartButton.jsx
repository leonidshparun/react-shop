import React from 'react';

import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 12px;
  line-height: 1.2;
  text-transform: uppercase;
  font-weight: bold;
  display: ${props => (props.isFull ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  padding-right: 5px;
`;

const Icon = styled.svg`
  width: ${props => (props.isFull ? '36px' : '30px')};
  height: ${props => (props.isFull ? '36px' : '30px')};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;

  @keyframes a {
    15% {
      transform: translateX(6px);
    }
    30% {
      transform: translateX(-6px);
    }
    40% {
      transform: translateX(4px);
    }
    50% {
      transform: translateX(-4px);
    }
    65% {
      transform: translateX(2px);
    }
    100% {
      transform: translateX(0);
    }
  }

  :hover {
    animation: a 0.7s ease;
    animation-iteration-count: 1;
  }
`;

const Chip = styled.span`
  background: #222222;
  color: #fff;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  position: absolute;
  right: -6px;
  top: -3px;
  text-align: center;
  line-height: 18px;
  font-size: 10px;
`;

const CartButtonConnected = ({ isFull, items }) => {
  return (
    <Wrapper>
      <Title isFull={isFull}>My cart</Title>
      <NavLink exact to="/order" style={{ position: 'relative' }}>
        <Icon viewBox="0 0 40 40">
          <path d="M37,10.87H3a1,1,0,0,0-1,1V17.2a1,1,0,0,0,1,1h.13V33.87a1,1,0,0,0,1,1H35.87a1,1,0,0,0,1-1V18.2H37a1,1,0,0,0,1-1V11.87A1,1,0,0,0,37,10.87Zm-33,2H36V16.2H4Zm30.87,20H5.13V18.2H34.87Z" />
          <path d="M17.36,22.5H22a.5.5,0,0,0,0-1H17.36a.5.5,0,0,0,0,1Z" />
        </Icon>
        {items !== 0 ? <Chip isFull={isFull}>{items}</Chip> : null}
      </NavLink>
    </Wrapper>
  );
};

const mapStateToProps = state => ({
  items: state.cart.length
});

const CartButton = connect(mapStateToProps)(CartButtonConnected);

export default CartButton;
