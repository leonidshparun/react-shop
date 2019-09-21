import React, { Component } from 'react';

import styled from 'styled-components';
import Pagination from './Pagination/Pagination';

import Card from './Card/Card';
import { chunk } from '../../utils/utils'

const Container = styled.div`
	display: flex;
	border: 1px solid #9e9e6e50;
	width: 1205px;
	margin: 10px;
	height: 870px;
	flex-wrap: wrap;
	place-content: start;
`;

class Content extends Component {
	constructor(props) {
		super(props);
		this.state = {
			itemsPerPage: 8,
			totalItems: this.props.data.length,
			currentPage: 0,
		}
	}

	changePageHandler = (page) => {
		this.setState({ currentPage: page })
	}

	render() {
		const cards = this.props.data.map(product => <Card
			key={product.id}
			data={product} />);

		const chunks = chunk(cards, this.state.itemsPerPage);

		if (this.state.currentPage >= chunks.length) {
			this.changePageHandler(chunks.length - 1)
		}

		return (
			<div style={{ display: 'flex', flexFlow: 'column' }}>
				<Container>
					{chunks[this.state.currentPage]}
				</Container>
				<Pagination
					pages={chunks.length}
					active={this.state.currentPage}
					click={this.changePageHandler} />
			</div>
		)
	}
}

export default Content;