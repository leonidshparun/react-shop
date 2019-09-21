import React, { Component } from 'react';

import { connect } from "react-redux";

import uniqid from 'uniqid';

import styled from 'styled-components';

import data from '../../static/products/products.json';

import icon from '../../static/icons/shopping-cart.png'

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
	transition: right 0.2s;
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
		left: -50px;
		top: 0;
		height: 50px;
		width: 50px;
		background-color: gold;
		font-size: 30px;

		p {
			background-color: #FF5722;
			font-size: 16px;
			color: white;
			position: absolute;
			bottom: -2px;
			left: -2px;
			width: 18px;
			height: 18px;
		}
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
				<ToggleIcon onClick={this.toggleCart}>
					<img src={icon} width={30} alt='toggle cart' />
					{items.length !== 0 ? <p>{items.length}</p> : null}
				</ToggleIcon>
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