import React from 'react';

import FilterBrands from './FilterBrands/FilterBrands';
import FilterPrices from './FilterPrices/FilterPrices';
import FilterSearch from './FilterSearch/FilterSearch';
import FilterSizes from './FilterSizes/FilterSizes';
import SortPrices from './SortPrices/SortPrices';

import { Container, Title } from './style';

const Filters = () => (
  <Container>
    <FilterSearch />
    <Title>FILTERS:</Title>
    <FilterBrands />
    <FilterPrices />
    <FilterSizes />
    <SortPrices />
  </Container>
);

export default Filters;
