import React, { Component } from 'react';

import styled from 'styled-components';
import Pagination from './Pagination/Pagination';

const Container = styled.div`
	display: flex;
	border: 1px solid #9e9e6e50;
	width: 1205px;
	margin: 10px;
	height: 870px;
	flex-wrap: wrap;
	place-content: start;
`;

const chunk = (array, size) => {
	const chunked_arr = [];
	let index = 0;
	while (index < array.length) {
		chunked_arr.push(array.slice(index, size + index));
		index += size;
	}
	return chunked_arr;
}

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
		this.setState({
			currentPage: page,
		})
	}

	render() {
		const chunks = chunk(this.props.data, this.state.itemsPerPage)

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

export default Content