import React, { Component } from 'react';

import styled from 'styled-components';

const PricesContainer = styled.div`
		span {
			font-size: 18px;
		} 
		select {
			margin: 10px;
			font-size: 18px;
		}
	`;

class Prices extends Component {
	constructor(props) {
		super(props);
		this.state = { value: 'min' };
	}

	handleChange = (event) => {
		this.setState({ value: event.target.value });
		this.props.change(event.target.value);
	}

	render() {
		return (
			<PricesContainer>
				<span>Order by:</span>
				<select value={this.state.value} onChange={this.handleChange}>
					<option value="min">From lowest to highest</option>
					<option value="max">From highest to lowest</option>
				</select>
			</PricesContainer>
		);
	}
}

export default Prices;