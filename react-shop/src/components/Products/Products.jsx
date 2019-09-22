import React, { Component } from 'react';

import Filter from './Filter/Filter';
import Sort from './Sort/Sort';
import Content from './Content/Content';

import styled from 'styled-components';

const ProductsContainer = styled.div`
		display: flex;
		flex-flow: row;
		width: 100%;
	`;

class Products extends Component {
	render() {
		return (
			<ProductsContainer>
				<Filter />
				<div>
					<Sort />
					<Content />
				</div>
			</ProductsContainer>
		);
	}
}


export default Products;