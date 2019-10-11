// emulate server

import data from 'static/products/products.json';

class Server {
  constructor() {
    this.data = null;
    this.timer = null;
  }

  fetchData = time =>
    new Promise(resolve => {
      this.timer = setTimeout(() => {
        resolve(data.products);
      }, time);
    }).then(this.onLoad);

  onLoad = content => {
    this.data = content;
    this.timer = null;
  };

  getProduct = async (id, size, quantity) => {
    if (!this.data) await this.fetchData(500);
    const product = { ...this.data[id], size, quantity };
    return product;
  };

  getFiltredContent = async (filter, match) => {
    if (!this.data) await this.fetchData(500);
    console.log('VERY HARD CALC from server');

    // filter params
    const { search } = filter;
    const { type, sex } = match.params;
    const productType = type !== 'sale' ? type : null;
    const [min, max] = filter.prices;
    const showOnlyWithDiscount = type === 'sale';

    const filtredData = this.data
      .filter(product => {
        const itemSearch = `${product.brand} ${product.title} ${product.style}`;
        const price = product.price * (1 - product.discount / 100);
        const hasDiscount = product.discount !== 0;
        return (
          (productType ? product.type === productType : true) && // filter by type
          (sex ? product.sex.includes(sex) : true) && // filter sex
          (showOnlyWithDiscount ? hasDiscount : true) && // filter by disounts
          itemSearch.toLowerCase().includes(search.toLowerCase()) && // searchbar
          product.availableSizes.some(size => filter.sizes[size]) && // filter by sizes
          (price >= min && price <= max) && // filter by prices
          filter.brands[product.brand] // filter by brands
        );
      })
      .sort((a, b) => {
        if (filter.sortPrices === 'init') return true;
        const priceA = a.price * (1 - a.discount / 100);
        const priceB = b.price * (1 - b.discount / 100);
        return filter.sortPrices === 'min' ? priceA - priceB : priceB - priceA;
      }); // sort by prices

    console.log('server delay emulation');
    return new Promise(resolve => {
      this.timer = setTimeout(() => {
        resolve(filtredData);
      }, 500);
    });
  };
}

export default new Server();
