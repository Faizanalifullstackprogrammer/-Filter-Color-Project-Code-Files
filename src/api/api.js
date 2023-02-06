import axios from 'axios';

const axiosParams = {
  baseURL: '/COLORS.json',
};

const axiosInstance = axios.create(axiosParams);

const api = (axios) => ({
  get: (url, config = {}) => axios.get(url, config),
});

export default api(axiosInstance);
