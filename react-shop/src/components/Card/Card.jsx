import React, { Component } from 'react';

import Button from '../UI/Button/Button';

import Selector from './../UI/Selector/Selector';

import styled from 'styled-components';

const CardContainer = styled.div`
	height: 400px;
	width: 260px;
	margin: 20px;
	border: thin solid #9e9e6e50;
	padding: 3px;

	display: flex;
	flex-flow: column;
	justify-content: space-between;
	align-items: center;
	user-select: none;
	transition: border-color 0.2s;
	position: relative;
	background-color: ${props => props.show ? 'honeydew' : ''};
	
	:hover {
		border: thin solid #009288;
	}
`;

const Heading = styled.p`
	font-weight: 600;
	text-align: center;
	height: 50px;
	display: flex;
	align-items: center;
`;

const Price = styled.p`
	font-size: 24px;
	font-weight: 600;
	color: #0b5a53;
`;

const Tip = styled.div`
	background-color: #009688d1;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	height: calc(100% - 6px);
	width: calc(100% - 6px);    
	visibility: ${props => props.show ? 'visible' : 'hidden'};

	p {
		width: 100%;
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    color: white;
    background: #FFC107;
    padding: 10px;
	}
`;

class Card extends Component {
	state = {
		tipText: 'Select size',
		showTip: false,
		selectedSize: [],
	}

	handleChange = (size) => {
		this.setState({ selectedSize: [size] });
	}

	handleSubmit = (event) => {
		event.preventDefault();
		if (!this.state.selectedSize[0]) {
			this.setState({ showTip: true });
			setTimeout(() => this.setState({ showTip: false, tipText: 'Select size' }), 900);
		} else {
			this.props.add({ id: this.props.data.id, size: this.state.selectedSize[0] });
			this.setState({ showTip: true, tipText: 'Added' });
			setTimeout(() => this.setState({ showTip: false }), 500);
		};
	}

	render() {
		return (
			<CardContainer show={this.state.showTip}>
				<Tip show={this.state.showTip}>
					<p>{this.state.tipText}</p>
				</Tip>
				<img
					src={require(`../../static/img/item${this.props.data.id}.jpg`)}
					alt={this.props.data.title}
					width='250px' />

				<Heading>
					{`${this.props.data.brand} ${this.props.data.title} - ${this.props.data.style}`}
				</Heading>

				<Selector
					selected={this.state.selectedSize}
					data={this.props.data.availableSizes}
					select={(size) => this.handleChange(size)}
				/>

				<Price>
					{`${this.props.data.price} €`}
				</Price>

				<Button
					width='100%'
					active={this.state.selectedSize}
					onClick={this.handleSubmit}>ADD TO CART
				</Button>

			</CardContainer >
		);
	}
}

export default Card;