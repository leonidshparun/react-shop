import React, { Component } from 'react';

import Checkbox from './../../UI/CheckBox/Checkbox';

import styled from 'styled-components';

import { connect } from "react-redux";
import {
	updateBrands,
	updatePrices,
} from "../../../store/actions/actions";

const FilterContainer = styled.div`
		display: flex;
		flex-flow: column;
		justify-content: flex-start;
		align-items: center;
		min-width: 160px;
	`

const Brands = styled.div`
		display: flex;
		flex-flow: column;
		border: 1px solid grey;
		padding: 10px;
		margin: 10px;
	`

const Prices = styled.div`
		display: flex;
		flex-flow: column;
		border: 1px solid grey;
		padding: 10px;
		margin: 10px;
		input {
			width: 100px;
		}
	`

class FilterConnected extends Component {

	handleBrandChange = (brand) => {
		const brands = { ...this.props.brands };
		brands[brand] = !this.props.brands[brand];
		this.props.updateBrands(brands);
	}

	handlePriceChange = (e, type) => {
		const prices = [...this.props.prices];
		prices[type] = e.target.value;
		this.props.updatePrices(prices);
	}

	render() {
		return (
			<FilterContainer>
				<Brands>
					{Object.keys(this.props.brands).map((brand) =>
						<label key={brand}>
							<Checkbox
								checked={this.props.brands[brand]}
								onChange={() => this.handleBrandChange(brand)}
							/>
							<span style={{ marginLeft: 8, fontSize: 18 }}>
								{brand}
							</span>
						</label>)}
				</Brands>
				<Prices>
					<label>
						from:
          <input
							type="text"
							value={this.props.prices[0]}
							onChange={(e) => this.handlePriceChange(e, 0)} />
					</label>
					<label>
						to:
						<input
							type="text"
							value={this.props.prices[1]}
							onChange={(e) => this.handlePriceChange(e, 1)} />
					</label>
				</Prices>
				{/* <p>
				{params.prices}
			</p>
			<p>
				{params.sizes}
			</p> */}
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
	};
}

const Filter = connect(mapStateToProps, mapDispatchToProps)(FilterConnected);

export default Filter;