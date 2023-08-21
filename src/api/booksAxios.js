import api from "./api";

export const fetchAuth = (userData) => {
  return api.post(`/auth/register`, userData);
};

export const fetchLogin = (loginData) => {
  return api.post(`/auth/login`, loginData);
};

export const fetchAddBook = (bookData) => {
  console.log(bookData);
  return api.post(`/book`, bookData);
};

export const fetchDeleteBooks = (bookId) => {
  return api.delete(`/book/${bookId}`);
};

// export const fetchBooksById = (bookId) => {
//   return axios.get(`/book/${bookId}`);
// };

// export const fetchFilterBooks = (characterFilter) => {
//   return axios.get(`${URL}?name=${characterFilter}`);
// };
