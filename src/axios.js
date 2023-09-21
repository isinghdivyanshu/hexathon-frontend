import axios from 'axios';
const instance = axios.create({ baseURL: 'https://hexathon-api.dscvit.com' });
export default instance;
