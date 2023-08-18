import axios from "axios";

const BASE_URL = "https://bookread-backend.goit.global";

export const fetchAuth = (userData) => {
  return axios.post(`${BASE_URL}/auth/register`, userData);
};

export const fetchLogin = (loginData) => {
  return axios.post(`${BASE_URL}/auth/login`, loginData);
};

export const fetchAddBook = () => {
  return axios.post(`${BASE_URL}/book`);
};

export const fetchDeleteBooks = (bookId) => {
  return axios.delete(`${BASE_URL}/book/${bookId}`);
};

// export const fetchBooksById = (bookId) => {
//   return axios.get(`${BASE_URL}/book/${bookId}`);
// };

// export const fetchFilterBooks = (characterFilter) => {
//   return axios.get(`${URL}?name=${characterFilter}`);
// };
