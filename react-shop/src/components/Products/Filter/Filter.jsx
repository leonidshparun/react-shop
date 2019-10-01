import React from 'react';

import styled from 'styled-components';

import FilterBrands from './FilterBrands/FilterBrands';
import FilterPrices from './FilterPrices/FilterPrices';
import FilterSearch from './FilterSearch/FilterSearch';
import FilterSizes from './FilterSizes/FilterSizes';
import SortPrices from './SortPrices/SortPrices';

const Filters = styled.div`
  margin-top: 20px;
  position: relative;
  display: grid;
  grid-template-columns: 100px 160px 220px 30px 150px;
  grid-gap: 10px;
  grid-template-areas:
    'sc sc aa qq st'
    'ti mn pr sz sz';
`;

const Title = styled.p`
  grid-area: ti;
  font-size: 18px;
  font-weight: 800;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Filter = () => {
  return (
    <Filters>
      <FilterSearch />
      <FilterBrands />
      <Title>FILTERS:</Title>
      <FilterPrices />
      <FilterSizes />
      <SortPrices />
    </Filters>
  );
};

export default Filter;
