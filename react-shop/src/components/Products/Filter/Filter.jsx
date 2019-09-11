import React, { Component } from 'react';

import Brands from './Brands/Brands';
import Prices from './Prices/Prices';
import Sizes from './Sizes/Sizes';

import styled from 'styled-components';

import { connect } from "react-redux";
import {
	updateBrands,
	updatePrices,
	updateSizes,
} from "../../../store/actions/actions";

const FilterContainer = styled.div`
		display: flex;
		flex-flow: column;
		justify-content: flex-start;
		align-items: center;
	 	min-width: 230px;
		height: 100%;
	`

class FilterConnected extends Component {
	sizes = Object.keys(this.props.sizes);

	handleBrandChange = (brand) => {
		const brands = { ...this.props.brands };
		brands[brand] = !this.props.brands[brand];
		this.props.updateBrands(brands);
	}

	clearBrands = () => {
		const brands = { ...this.props.brands };
		for (const brand in brands) {
			brands[brand] = false;
		}
		this.props.updateBrands(brands);
	}

	handlePriceChange = (e, type) => {
		const prices = [...this.props.prices];
		prices[type] = e.target.value;
		this.props.updatePrices(prices);
	}

	handleSizeChange = (size) => {
		const sizes = {};
		sizes[size] = this.props.sizes.length === 1 ?
			!this.props.sizes[size] :
			true;
		this.props.updateSizes(sizes);
	}

	selectAllSizes = () => {
		const sizes = {};
		for (const size of this.sizes) {
			sizes[size] = true;
		}
		this.props.updateSizes(sizes);
	}

	render() {
		return (
			<FilterContainer>
				<Brands
					brands={this.props.brands}
					change={this.handleBrandChange}
					clear={this.clearBrands} />

				<Prices
					prices={this.props.prices}
					change={this.handlePriceChange} />

				<Sizes
					initial={this.sizes}
					sizes={this.props.sizes}
					change={this.handleSizeChange}
					select={this.selectAllSizes} />
			</FilterContainer >
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
		updateBrands: brands => dispatch(updateBrands(brands)),
		updatePrices: prices => dispatch(updatePrices(prices)),
		updateSizes: sizes => dispatch(updateSizes(sizes)),
	};
}

const Filter = connect(mapStateToProps, mapDispatchToProps)(FilterConnected);

export default Filter;