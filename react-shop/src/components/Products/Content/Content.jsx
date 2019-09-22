import React, { Component } from 'react';

import styled from 'styled-components';
import Pagination from './Pagination/Pagination';
import uniqid from 'uniqid';

import data from '../../../static/products/products.json';

import { connect } from "react-redux";
import Card from './Card/Card';
import { chunk } from '../../../utils/utils'

const Container = styled.div`
	display: flex;
	border: 1px solid #9e9e6e50;
	width: 1125px;
	height: 840px;
	flex-wrap: wrap;
	place-content: start;
`;

class ContentConnected extends Component {
	constructor(props) {
		super(props);
		this.state = {
			itemsPerPage: 8,
			currentPage: 0,
			data: null,
		}
	}

	changePageHandler = (page) => {
		this.setState({ currentPage: page })
	}

	componentDidUpdate() {
		const pages = Math.ceil(data.length / this.state.itemsPerPage);
		if (this.state.currentPage >= pages && pages !== 0) {
			this.changePageHandler(pages - 1)
		}
	}



	render() {
		const [min, max] = this.props.filter.prices;
		const filtredList = data.products
			.filter(product => this.props.filter.brands[product.brand]) //filter by brands
			.filter(product => product.price >= min && product.price <= max) //filter by prices
			.filter(product => product.availableSizes.some(size => this.props.filter.sizes[size])) //filter by sizes
			.sort((a, b) => {
				if (this.props.sort.prices === 'init') return true
				else return this.props.sort.prices === 'min' ? a.price - b.price : b.price - a.price
			}); //sort by prices

		const cards = filtredList.map(product => <Card
			key={uniqid()}
			data={product} />);

		const chunks = chunk(cards, this.state.itemsPerPage);

		return chunks.length ?
			<div style={{ display: 'flex', flexFlow: 'column' }}>
				<Container>
					{chunks[this.state.currentPage]}
				</Container>
				<Pagination
					pages={chunks.length}
					active={this.state.currentPage}
					click={this.changePageHandler} />
			</div> :
			<p>NO RESULTS</p>;
	}
}


const mapStateToProps = (state) => {
	return {
		filter: { ...state.filter },
		sort: { ...state.sort },
	};
}

const Content = connect(mapStateToProps)(ContentConnected);

export default Content;