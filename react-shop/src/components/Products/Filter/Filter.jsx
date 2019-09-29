import React from 'react';

import styled from 'styled-components';

import FilterBrands from './FilterBrands/FilterBrands';
import FilterPrices from './FilterPrices/FilterPrices';
import FilterSearch from './FilterSearch/FilterSearch';
import FilterSizes from './FilterSizes/FilterSizes';
import SortPrices from './SortPrices/SortPrices';

import Content from '../Content/Content';

const FilterContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`;

const Filters = styled.div`
  display: flex;
  flex-flow: row;
  position: relative;
  height: 90px;
`;

const Filter = () => {
  return (
    <FilterContainer>
      <Filters>
        <FilterSearch />
        <FilterBrands />
        <FilterPrices />
        <FilterSizes />
        <SortPrices />
      </Filters>
      <Content />
    </FilterContainer>
  );
};

export default Filter;
