import React from 'react';

import styled from 'styled-components';

import devices from 'utils/responsive';

import FilterBrands from './FilterBrands/FilterBrands';
import FilterPrices from './FilterPrices/FilterPrices';
import FilterSearch from './FilterSearch/FilterSearch';
import FilterSizes from './FilterSizes/FilterSizes';
import SortPrices from './SortPrices/SortPrices';
import FilterDiscounts from './FilterDiscounts/FilterDiscounts';

const Container = styled.div`
  padding: 20px;
  position: relative;
  display: grid;
  justify-content: center;

  grid-template-columns: auto 190px 220px auto 170px 150px;
  grid-gap: 10px;
  grid-template-areas:
    'sc sc aa aa aa aa'
    'ti mn pr dc sz st';

  @media ${devices.laptopM} {
    grid-template-columns: auto 170px 200px auto 140px 140px;
  }

  @media ${devices.laptopS} {
    grid-template-columns: auto 180px auto;

    grid-template-areas:
      'sc st st'
      'ti mn mn'
      'sz pr dc';
  }

  @media ${devices.mobileL} {
    width: 100%;
    grid-template-columns: 60% 30px;

    grid-template-areas:
      'sc sc'
      'st st'
      'ti ti'
      'mn mn'
      'pr dc'
      'sz sz';
  }

  @media ${devices.mobileS} {
    width: 100%;
    grid-template-columns: 80% 30px;

    grid-template-areas:
      'sc sc'
      'st st'
      'ti ti'
      'mn mn'
      'pr dc'
      'sz sz';
  }
`;

const Title = styled.p`
  grid-area: ti;
  font-size: 16px;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Filters = () => (
  <Container>
    <FilterSearch />
    <Title>FILTERS:</Title>
    <FilterBrands />
    <FilterPrices />
    <FilterDiscounts />
    <FilterSizes />
    <SortPrices />
  </Container>
);

export default Filters;
