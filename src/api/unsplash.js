import axios from 'axios';
import {config} from 'dotenv';

config();

const url = 'https://api.unsplash.com/';

export const fetchPhotos = async (perPage = 8) => {
  const response = await axios.get(`${url}photos?per_page=${perPage}`, {
    headers: {
      Authorization: `Client-ID ${process.env.VUE_APP_CLIENT_ID}`
    },
  });

  return response;
};

export const searchPhotos = async (query = '', perPage = 8) => {
  const response = await axios.get(`${url}search/photos?query=${query}&per_page=${perPage}`, {
    headers: {
      Authorization: `Client-ID ${process.env.VUE_APP_CLIENT_ID}`
    },
  });

  return response;
};

