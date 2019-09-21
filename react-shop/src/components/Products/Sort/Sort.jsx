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
	 	min-width: 230px;
		height: 100%;
	`

const SortConnected = (props) =>
	<SortContainer>
		<Prices
			prices={props.prices}
			change={props.updateSortPrices} />
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