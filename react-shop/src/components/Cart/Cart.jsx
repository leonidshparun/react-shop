import React, { Component } from 'react';

import { connect } from "react-redux";

import uniqid from 'uniqid';

import styled from 'styled-components';

import data from '../../static/products/products.json';

import Item from './Item/Item';
import Checkout from './Checkout/Checkout';

import { removeItemFromCart } from '../../store/actions/actions';

const CartContainer = styled.div`
	width: 460px;
	background-color: #607D8B;
	height: 100%;
	position: fixed;
	top: 0;
	display: flex;
	flex-flow: column;
	justify-content: space-between;
	right: ${props => props.show ? 0 : '-460px'};
	transition: right 0.5s;
`;

const Items = styled.div`
		height: calc(100vh - 160px);
    overflow: auto;
		::-webkit-scrollbar { 
    display: none; 
	}
`;

const ToggleIcon = styled.button`
		position: absolute;
		left: -40px;
		top: 0;
		height: 40px;
		width: 40px;
		background-color: gold;
		font-size: 30px;
`;

class CartConnected extends Component {
	state = {
		visible: false,
	}

	toggleCart = () => {
		this.setState({ visible: !this.state.visible })
	}

	removeItem = (idx) => {
		const items = [...this.props.items];
		const updatedItems = [...items.slice(0, idx), ...items.slice(idx + 1)];
		this.props.removeItemFromCart(updatedItems);
	}

	render() {
		const items = this.props.items;
		let total = 0;
		return (
			<CartContainer show={this.state.visible}>
				<ToggleIcon onClick={this.toggleCart}>€</ToggleIcon>
				<Items>
					{items.map((item, idx) => {
						const product = data.products[item.id - 1];
						total += product.price;
						return <Item
							remove={() => this.removeItem(idx)}
							key={uniqid()}
							product={product}
							item={item} />
					})}
				</Items>
				<Checkout total={total} />
			</CartContainer >
		);
	}

}

const mapStateToProps = (state) => {
	return {
		items: [...state.cart],
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		removeItemFromCart: items => dispatch(removeItemFromCart(items)),
	};
}

const Cart = connect(mapStateToProps, mapDispatchToProps)(CartConnected);

export default Cart;