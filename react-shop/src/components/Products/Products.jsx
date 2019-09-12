import React, { Component } from 'react';

import Card from '../../components/Card/Card';
import Filter from './Filter/Filter';
import Content from '../Content/Content';

import data from '../../static/products/products.json';

import styled from 'styled-components';
import { connect } from "react-redux";

import {
	addItemToCart,
} from "../../store/actions/actions";

const ProductsContainer = styled.div`
		display: flex;
		flex-flow: row;
		width: 100%;
	`;

class ProductsConnected extends Component {

	render() {
		const filtredList = data.products
			.filter(product => this.props.brands[product.brand])
			.filter(product => {
				const [min, max] = this.props.prices;
				return (product.price >= min && product.price <= max)
			})
			.filter(product => product.availableSizes.some(size => this.props.sizes[size]))
			.map(product => <Card
				key={product.id}
				data={product}
				add={this.props.addItemToCart}
			/>)

		return (
			<ProductsContainer>
				<Filter />
				<Content data={filtredList} />
			</ProductsContainer>
		);
	}

}

const mapStateToProps = (state) => {
	return {
		...state.filter,
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		addItemToCart: item => dispatch(addItemToCart(item)),
	};
}

const Products = connect(mapStateToProps, mapDispatchToProps)(ProductsConnected);

export default Products;