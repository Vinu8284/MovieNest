import axios from 'axios';

const API_KEY = 'b8d2f16448f04ca0a866837cc0d5e86e'; // Replace with your actual API key
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async (page = 1) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return null;
  }
};

export const fetchTopRatedMovies = async (page = 1) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=${page}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching top rated movies:', error);
    return null;
  }
};

export const fetchUpcomingMovies = async (page = 1) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&page=${page}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    return null;
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};

export const fetchMovieCast = async (movieId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    return response.data.cast;
  } catch (error) {
    console.error('Error fetching movie cast:', error);
    return null;
  }
};

export const searchMovies = async (query, page = 1) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
    );
    return response.data;
  } catch (error) {
    console.error('Error searching movies:', error);
    return null;
  }
};