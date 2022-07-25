import axios from 'axios';

const baseURL = 'http://www.omdbapi.com';
// REAL KEY HERE FROM ENV
const urlAPI = '&apikey=';

export const getMovie = (id) => axios.get(`${baseURL}/?${urlAPI}&i=${id}`);

export const getMovies = (search) => axios.get(`${baseURL}/?${urlAPI}&s=${search}`);
