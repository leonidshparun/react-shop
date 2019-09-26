import React, { Component } from 'react';

import styled from 'styled-components';
import { connect } from 'react-redux';

import Brands from './Brands/Brands';
import Prices from './Prices/Prices';
import Sizes from './Sizes/Sizes';

import {
  updateBrands,
  updatePrices,
  updateSizes
} from '../../../store/actions/actions';

const FilterContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`;

class FilterConnected extends Component {
  constructor(props) {
    super(props);
    const { sizes } = props;
    this.sizes = Object.keys(sizes);
  }

  handleBrandChange = brand => {
    const { brands, updateFIltersBrands } = this.props;
    const copyBrands = { ...brands };
    if (brand) {
      copyBrands[brand] = !brands[brand];
    } else {
      Object.keys(copyBrands).forEach(key => {
        copyBrands[key] = false;
      });
    }
    updateFIltersBrands(copyBrands);
  };

  handlePriceChange = (e, type) => {
    const { prices, updateFIltersPrices } = this.props;
    const copyPrices = [...prices];
    copyPrices[type] = e.target.value;
    updateFIltersPrices(copyPrices);
  };

  handleSizeChange = size => {
    const { updateFIltersSizes } = this.props;
    const sizes = {};
    if (size) {
      sizes[size] = true;
    } else {
      Object.keys(this.sizes).forEach(key => {
        sizes[key] = true;
      });
    }
    updateFIltersSizes(sizes);
  };

  render() {
    const { brands, prices, sizes } = this.props;
    return (
      <FilterContainer>
        <Brands brands={brands} change={this.handleBrandChange} />

        <Prices prices={prices} change={this.handlePriceChange} />

        <Sizes
          initial={this.sizes}
          sizes={sizes}
          change={this.handleSizeChange}
        />
      </FilterContainer>
    );
  }
}

const mapStateToProps = state => ({
  ...state.filter
});

const mapDispatchToProps = dispatch => ({
  updateFIltersBrands: brands => dispatch(updateBrands(brands)),
  updateFIltersPrices: prices => dispatch(updatePrices(prices)),
  updateFIltersSizes: sizes => dispatch(updateSizes(sizes))
});

const Filter = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterConnected);

export default Filter;
