import React, { Component } from 'react';

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
			<label>
				Order by:
          <select value={this.state.value} onChange={this.handleChange}>
					<option value="min">From lowest to highest</option>
					<option value="max">From highest to lowest</option>
				</select>
			</label>
		);
	}
}

export default Prices;