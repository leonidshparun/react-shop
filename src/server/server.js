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

  getProduct = async id => {
    if (!this.data) await this.fetchData(3000);
    return this.data[id];
  };

  getFiltredContent = async filter => {
    if (!this.data) await this.fetchData(2000);
    console.log('VERY HARD CALC from server');

    const [min, max] = filter.prices;
    let { search } = filter;
    search = search.toLowerCase();
    const { showOnlyDiscounts } = filter;
    const result = this.data
      .filter(product => {
        const itemSearch = `${product.brand} ${product.title} ${product.style}`.toLowerCase();
        const price = product.price * (1 - product.discount / 100);
        const hasDiscount = product.discount !== 0;
        return (
          (showOnlyDiscounts ? hasDiscount : true) &&
          itemSearch.includes(search) && // searchbar
          product.availableSizes.some(size => filter.sizes[size]) && // filter by sizes
          (price >= min && price <= max) && // filter by prices
          filter.brands[product.brand] // filter by brands
        );
      })
      .sort((a, b) => {
        const priceA = a.price * (1 - a.discount / 100);
        const priceB = b.price * (1 - b.discount / 100);
        if (filter.sortPrices === 'init') return true;
        return filter.sortPrices === 'min' ? priceA - priceB : priceB - priceA;
      }); // sort by prices

    console.log('server delay emulation');
    return new Promise(resolve => {
      this.timer = setTimeout(() => {
        resolve(result);
      }, 500);
    });
  };
}

export default new Server();