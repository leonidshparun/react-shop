import React from 'react';

import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Wrapper, Title, Icon, Chip } from './style';

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
