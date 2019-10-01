import React, { Component } from 'react';

import { connect } from 'react-redux';
import styled from 'styled-components';

import Range from 'components/UI/Range/Range';

import { debounce } from 'utils/utils';
import { updatePrices } from 'store/actions/actions';

const Container = styled.div`
  grid-area: pr;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  width: -webkit-fill-available;
`;

class FilterPricesConnected extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: props.prices[0],
      max: props.prices[1]
    };
  }

  handleChangeMax = e => {
    const { value } = e.target;
    const { min } = this.state;
    const { updateFilter } = this.props;
    const Amax = Math.max(value, min);
    this.setState({ min, max: Amax });
    updateFilter([min, Amax]);
  };

  handleChangeMin = e => {
    const { value } = e.target;
    const { max } = this.state;
    const { updateFilter } = this.props;
    const Amin = Math.min(value, max);
    this.setState({ min: Amin, max });
    updateFilter([Amin, max]);
  };

  render() {
    const { min, max } = this.state;
    const { init } = this.props;
    return (
      <Container>
        <span style={{ fontSize: 14 }}>{`${min} € - ${max} €`}</span>
        <Range
          update={{ max: this.handleChangeMax, min: this.handleChangeMin }}
          values={{ min, max }}
          init={init}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  prices: state.filter.prices,
  init: state.filter.initialPrices
});

const mapDispatchToProps = dispatch => ({
  updateFilter: debounce(prices => dispatch(updatePrices(prices)), 500)
});

const FilterPrices = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterPricesConnected);

export default FilterPrices;
