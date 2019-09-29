import React from 'react';

import { connect } from 'react-redux';
import styled from 'styled-components';

import Wrapper from '../Filter.styled';

import { updatePrices } from '../../../../store/actions/actions';

const Container = styled(Wrapper)`
  input {
    width: 60px;
    border-radius: 15px;
    font-size: 14px;
    border: 1px solid rgb(169, 169, 169);
    padding: 3px;
    padding-left: 10px;
    height: 24px;
  }

  label {
    width: 60px;
    font-size: 14px;
    margin: 3px;
  }

  div {
    display: flex;
    justify-content: center;
  }
`;

const FilterPricesConnected = ({ prices, updateFilter }) => {
  const handlePriceChange = (e, type) => {
    const copyPrices = [...prices];
    copyPrices[type] = +e.target.value;
    updateFilter(copyPrices);
  };

  return (
    <Container>
      <p>Price, €:</p>
      <div>
        <label htmlFor="from">
          from:{' '}
          <input
            id="from"
            type="text"
            value={prices[0]}
            onChange={e => handlePriceChange(e, 0)}
          />
        </label>

        <label htmlFor="to">
          to:{' '}
          <input
            id="to"
            type="text"
            value={prices[1]}
            onChange={e => handlePriceChange(e, 1)}
          />
        </label>
      </div>
    </Container>
  );
};

const mapStateToProps = state => ({
  prices: state.filter.prices
});

const mapDispatchToProps = dispatch => ({
  updateFilter: prices => dispatch(updatePrices(prices))
});

const FilterPrices = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterPricesConnected);

export default FilterPrices;
