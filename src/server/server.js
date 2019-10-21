import { filterData } from 'utils/filter';

import storage from './firebase';
import axios from './axios';

class Server {
  constructor() {
    this.data = null;
    this.timer = null;
  }

  fetchData = () =>
    this.requestData()
      .catch(e => this.onError(e))
      .then(this.addImageUrls)
      .then(this.onLoad);

  onLoad = content => {
    this.data = content;
    this.timer = null;
  };

  onError = error => {
    console.log(error.message);
  };

  getData = async () => {
    if (!this.data) await this.fetchData();
    return this.data;
  };

  requestData = async () => {
    const response = await axios.get('/products.json');
    return response.data;
  };

  submitOrder = data => {
    axios
      .post('/orders.json', data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  addEmailSubscription = mail => {
    axios
      .post('/subscriptions.json', mail)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  addImageUrls = products => {
    const withURL = products.map(async item => {
      const imageURL = await storage.getImageURL(item.id);
      return { ...item, imageURL };
    });
    const dataWithImgURLS = Promise.all(withURL);
    return dataWithImgURLS;
  };

  getProduct = async (id, size, quantity) => {
    if (!this.data) await this.fetchData();
    const product = { ...this.data[id - 1], size, quantity };
    return product;
  };

  getFiltredContent = async (filter, match) => {
    if (!this.data) await this.fetchData();
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
