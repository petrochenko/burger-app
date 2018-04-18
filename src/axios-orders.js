import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-app-ebf69.firebaseio.com/'
});

export default instance;
