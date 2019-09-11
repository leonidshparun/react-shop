import React, { Component } from 'react';
import {
	CardContainer,
	Heading,
	Price,
} from './styles';

import Button from '../UI/Button/Button';

import SizeSelector from './SizeSelector/SizeSelector';

class Card extends Component {
	state = {
		selectedSize: []
	}

	handleChange = (size) => {
		this.setState({
			selectedSize: [size],
		});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		if (!this.state.selectedSize[0]) alert(`Choose size, please`);
		else alert(`You chose the ${this.state.selectedSize[0]}.`);
	}

	render() {
		return (
			<CardContainer>
				<img
					src={require(`../../static/img/item${this.props.data.id}.jpg`)}
					alt={this.props.data.title}
					width='260px' />

				<Heading>
					{`${this.props.data.brand} ${this.props.data.title} - ${this.props.data.style}`}
				</Heading>

				<SizeSelector
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