import React, { Component } from 'react';

import styled from 'styled-components';
import Pagination from './Pagination/Pagination';

import Card from './Card/Card';
import { chunk } from '../../utils/utils'

const Container = styled.div`
	display: flex;
	border: 1px solid #9e9e6e50;
	width: 1125px;
	height: 840px;
	flex-wrap: wrap;
	place-content: start;
`;

class Content extends Component {
	constructor(props) {
		super(props);
		this.state = {
			itemsPerPage: 8,
			currentPage: 0,
		}
	}

	changePageHandler = (page) => {
		this.setState({ currentPage: page })
	}

	componentDidUpdate() {
		const pages = Math.ceil(this.props.data.length / this.state.itemsPerPage);
		if (this.state.currentPage >= pages && pages !== 0) {
			this.changePageHandler(pages - 1)
		}
	}

	render() {
		const cards = this.props.data.map(product => <Card
			key={product.id}
			data={product} />);

		const chunks = chunk(cards, this.state.itemsPerPage);

		const content = <div style={{ display: 'flex', flexFlow: 'column' }}>
			<Container>
				{chunks[this.state.currentPage]}
			</Container>
			<Pagination
				pages={chunks.length}
				active={this.state.currentPage}
				click={this.changePageHandler} />
		</div>;

		const empty = <p>NO RESULTS</p>;

		return cards.length ? content : empty
	}
}

export default Content;