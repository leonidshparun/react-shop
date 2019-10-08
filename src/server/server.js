// emulate server

import data from 'static/products/products.json';

class Server {
  constructor() {
    this.data = data.products;
  }

  getData = () => this.data;

  getProduct = id => this.data[id];
}

export default new Server();
