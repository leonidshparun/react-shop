import React, { Component } from 'react';

import Filter from './Filter/Filter';
import Sort from './Sort/Sort';
import Content from '../Content/Content';

import data from '../../static/products/products.json';

import styled from 'styled-components';
import { connect } from "react-redux";

const ProductsContainer = styled.div`
		display: flex;
		flex-flow: row;
		width: 100%;
	`;

class ProductsConnected extends Component {
	render() {
		const [min, max] = this.props.filter.prices;
		const filtredList = data.products
			.filter(product => this.props.filter.brands[product.brand]) //filter by brands
			.filter(product => product.price >= min && product.price <= max) //filter by prices
			.filter(product => product.availableSizes.some(size => this.props.filter.sizes[size])) //filter by sizes
			.sort((a, b) => this.props.sort.prices === 'min' ? a.price - b.price : b.price - a.price) //sort by prices

		return (
			<ProductsContainer>
				<Sort />
				<Filter />
				<Content
					data={filtredList} />
			</ProductsContainer>
		);
	}

}

const mapStateToProps = (state) => {
	return {
		...state,
	};
}

const Products = connect(mapStateToProps)(ProductsConnected);

export default Products;