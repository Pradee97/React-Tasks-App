// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.punkapi.com/v2/',
});

export const fetchBeers = (page, beforePage, afterPage) => {
  return api.get('/beers', {
    params: {
      page,
      per_page: 10,
      brewed_before: beforePage,
      brewed_after: afterPage,
    },
  });
};
