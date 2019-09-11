import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import Filter from './Filter/Filter';

import data from '../../static/products/products.json';

import styled from 'styled-components';
import { connect } from "react-redux";

const ProductsContainer = styled.div`
		display: flex;
		flex-flow: row;
		width: 100%;
	`

class ProductsConnected extends Component {


	render() {
		const filtredList = data.products
			.filter(product => this.props.brands[product.brand])
			.filter(product => {
				const [min, max] = this.props.prices;
				return (product.price >= min && product.price <= max)
			})
			.filter(product => product.availableSizes.some(size => this.props.sizes.includes(size)))
			.map(product => <Card
				key={product.id}
				data={product}
			/>)

		return (
			<ProductsContainer>
				<Filter />
				<div style={{ display: 'flex', flexWrap: 'wrap' }}>
					{filtredList}
				</div>
			</ProductsContainer>
		);
	}

}

const mapStateToProps = (state) => {
	return {
		...state.filter,
	};
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		updateBrands: brands => dispatch(updateBrands(brands)),
// 	};
// }

const Products = connect(mapStateToProps)(ProductsConnected);

export default Products;