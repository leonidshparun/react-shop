import React, { Component } from 'react';

import styled from 'styled-components';
import Pagination from './Pagination/Pagination';

const Container = styled.div`
	display: flex;
	width: 100%;
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
			itemsPerPage: 6,
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
					click={this.changePageHandler} />
			</div>
		)
	}
}

export default Content