// emulate server

import { filterData } from 'utils/filter';

import storage from './firebase';
import axios from './axios';

class Server {
  constructor() {
    this.data = null;
    this.timer = null;
    this.requestData();
  }

  fetchData = () =>
    this.requestData()
      .then(this.addImageUrls)
      .then(this.onLoad);

  onLoad = content => {
    this.data = content;
    this.timer = null;
  };

  getData = async () => {
    if (!this.data) await this.fetchData();
    return this.data;
  };

  requestData = async () => {
    const response = await axios.get('/products.json');
    return response.data;
  };

  addImageUrls = products => {
    const withURL = products.map(async item => {
      const imageURL = await storage.getImageURL(item.id);
      return { ...item, imageURL };
    });
    return Promise.all(withURL);
  };

  getProduct = async (id, size, quantity) => {
    if (!this.data) await this.fetchData(500);
    const product = { ...this.data[id], size, quantity };
    return product;
  };

  getFiltredContent = async (filter, match) => {
    if (!this.data) await this.fetchData(500);
    console.log('VERY HARD CALC');
    const { type, gender } = match.params;
    const filterConfig = {
      ...filter.config,
      type,
      gender
    };
    return filterData(this.data, filterConfig);
  };
}

export default new Server();
