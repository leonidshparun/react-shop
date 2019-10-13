import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-test-50361.firebaseio.com/'
});

export default instance;
