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
    this.state = { value: 'init' };
  }

  handleChange = event => {
    const { change } = this.props;
    this.setState({ value: event.target.value });
    change(event.target.value);
  };

  render() {
    const { value } = this.state;
    return (
      <PricesContainer>
        <span>Order by:</span>
        <select value={value} onBlur={() => {}} onChange={this.handleChange}>
          <option value="init">Select</option>
          <option value="min">From lowest to highest</option>
          <option value="max">From highest to lowest</option>
        </select>
      </PricesContainer>
    );
  }
}

export default Prices;
