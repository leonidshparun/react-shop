import React, { Component } from 'react';

import { connect } from 'react-redux';

import { updateSortPrices } from '../../../../store/actions/actions';

import img from '../../../../static/icons/up-arrow.png';

import Wrapper from '../Filter.styled';

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
    const angle = sortPrices === 'max' ? 180 : 0;
    const icon = (
      <img
        style={{ transform: `rotate(${angle}deg)` }}
        src={img}
        width={16}
        alt="sort prices"
      />
    );
    return (
      <Wrapper>
        <p>Sort by price:</p>
        <button type="button" onClick={this.handleChange}>
          {icon}
        </button>
      </Wrapper>
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
