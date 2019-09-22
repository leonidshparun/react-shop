import React from 'react';

import Prices from './Prices/Prices';

import styled from 'styled-components';

import { connect } from "react-redux";

import {
	updateSortPrices,
} from "../../../store/actions/actions";

const SortContainer = styled.div`
		display: flex;
		flex-flow: row;
		justify-content: flex-start;
		align-items: center;
		border: 1px solid #9e9e6e50;
		height: 50px;
		padding: 10px;
	`

const SortConnected = ({ prices, updateSortPrices }) =>
	<SortContainer>
		<Prices
			prices={prices}
			change={updateSortPrices} />
	</SortContainer >

const mapStateToProps = (state) => {
	return {
		...state.sort,
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateSortPrices: type => dispatch(updateSortPrices(type)),
	};
}

const Sort = connect(mapStateToProps, mapDispatchToProps)(SortConnected);

export default Sort;