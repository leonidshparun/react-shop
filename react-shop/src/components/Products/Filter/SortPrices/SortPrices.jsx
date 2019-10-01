import React, { Component } from 'react';

import styled from 'styled-components';
import { connect } from 'react-redux';

import { updateSortPrices } from 'store/actions/actions';

import img from 'static/icons/order.png';

const Container = styled.div`
  grid-area: st;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 15px;
  padding: 3px;
  padding-left: 10px;
  width: -webkit-fill-available;
`;

class SortPricesConnected extends Component {
  constructor(props) {
    super(props);
    this.state = { sortPrices: 'init' };
  }

  handleChange = () => {
    const { updateSort } = this.props;
    const { sortPrices } = this.state;
    let value;
    if (sortPrices === 'init') {
      value = 'max';
    } else if (sortPrices === 'max') {
      value = 'min';
    } else {
      value = 'max';
    }
    this.setState({ sortPrices: value });
    updateSort(value);
  };

  render() {
    const { sortPrices } = this.state;
    const angle = sortPrices === 'max' ? 0 : 180;
    const icon = (
      <img
        style={{
          transform: `rotate(${angle}deg)`,
          transition: 'transform 0.5s'
        }}
        src={img}
        width={16}
        alt="sort prices"
      />
    );
    return (
      <Container>
        <span>Sort by price</span>
        <button
          style={{
            width: 25,
            height: 25
          }}
          type="button"
          onClick={this.handleChange}
        >
          {icon}
        </button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  sortPrices: state.filter.sortPrices
});

const mapDispatchToProps = dispatch => ({
  updateSort: type => dispatch(updateSortPrices(type))
});

const SortPrices = connect(
  mapStateToProps,
  mapDispatchToProps
)(SortPricesConnected);

export default SortPrices;
