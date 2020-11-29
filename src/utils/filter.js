import { findMinMax } from 'utils/utils';

export const buildFIlterConfig = (data, type, gender) => {
  const filterOfdata = data.filter(elem => {
    if (type === undefined || type === 'sale') return true;
    return elem.type === type;
  });

  const brandsList = {};
  filterOfdata
    .map(product => product.brand)
    .forEach(brand => {
      brandsList[brand] = true;
    });

  const sizesList = {};
  filterOfdata
    .reduce((acc, product) => acc.concat(product.availableSizes), [])
    .forEach(size => {
      if (size) sizesList[size] = true;
    });

  const pricesRange = findMinMax(data.map(product => product.price));

  return {
    brandsList,
    pricesRange,
    sizesList,
    gender,
    search: '',
    sortOrder: 'init'
  };
};

export const filterData = (data, filterConfig) => {
  const {
    type,
    gender,
    search,
    pricesRange,
    sortOrder,
    sizesList,
    brandsList
  } = filterConfig;

  const showOnlyWithDiscount = type === 'sale';
  const productType = type !== 'sale' ? type : null;
  const [min, max] = pricesRange;
  const filtredData = data
    .filter(product => {
      const itemSearch = `${product.brand} ${product.title} ${product.style}`;
      const price = product.price * (1 - product.discount / 100);
      const hasDiscount = product.discount !== 0;
      return (
        (productType ? product.type === productType : true) && // filter by type
        (gender ? product.gender.includes(gender) : true) && // filter gender
        (showOnlyWithDiscount ? hasDiscount : true) && // filter by disounts
        (product.type !== 'lifestyle'
          ? product.availableSizes.some(size => sizesList[size])
          : true) && // filter by sizes
        itemSearch.toLowerCase().includes(search.toLowerCase()) && // searchbar
        price >= min &&
        price <= max && // filter by prices
        brandsList[product.brand] // filter by brands
      );
    })
    .sort((a, b) => {
      if (sortOrder === 'init') return true;
      const priceA = a.price * (1 - a.discount / 100);
      const priceB = b.price * (1 - b.discount / 100);
      return sortOrder === 'min' ? priceA - priceB : priceB - priceA;
    }); // sort by prices

  return filtredData;
};
