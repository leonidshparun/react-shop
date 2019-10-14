import { findMinMax } from 'utils/utils';

const buildFIlterConfig = data => {
  const brandsList = {};
  data
    .map(product => product.brand)
    .forEach(brand => {
      brandsList[brand] = true;
    });

  const sizesList = {};
  data
    .reduce((acc, product) => acc.concat(product.availableSizes), [])
    .forEach(size => {
      if (size) sizesList[size] = true;
    });

  const pricesRange = findMinMax(data.map(product => product.price));

  return {
    brandsList,
    pricesRange,
    sizesList,
    search: '',
    sortOrder: 'init'
  };
};

export const filterData = (data, filterConfig) => {
  const { search } = filterConfig;
  const { type, sex } = filterConfig;
  const showOnlyWithDiscount = type === 'sale';
  const productType = type !== 'sale' ? type : null;
  const [min, max] = filterConfig.pricesRange;
  const filtredData = data
    .filter(product => {
      const itemSearch = `${product.brand} ${product.title} ${product.style}`;
      const price = product.price * (1 - product.discount / 100);
      const hasDiscount = product.discount !== 0;
      return (
        (productType ? product.type === productType : true) && // filter by type
        (sex ? product.sex.includes(sex) : true) && // filter sex
        (showOnlyWithDiscount ? hasDiscount : true) && // filter by disounts
        (product.type !== 'lifestyle'
          ? product.availableSizes.some(size => filterConfig.sizesList[size])
          : true) && // filter by sizes
        itemSearch.toLowerCase().includes(search.toLowerCase()) && // searchbar
        (price >= min && price <= max) && // filter by prices
        filterConfig.brandsList[product.brand]
      ); // filter by brands
    })
    .sort((a, b) => {
      if (filterConfig.sortOrder === 'init') return true;
      const priceA = a.price * (1 - a.discount / 100);
      const priceB = b.price * (1 - b.discount / 100);
      return filterConfig.sortOrder === 'min'
        ? priceA - priceB
        : priceB - priceA;
    }); // sort by prices

  return filtredData;
};

export default buildFIlterConfig;
