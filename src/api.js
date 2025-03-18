import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000', // Địa chỉ backend
  withCredentials: true, // Nếu backend có sử dụng cookie hoặc session
  headers: {
    'Content-Type': 'application/json'
  }
});

export default API;
