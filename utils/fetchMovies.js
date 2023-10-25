const fetch = require("node-fetch");

const fetchMovies = async (url) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_AUTH_ACESS_TOKEN}`,
    },
  };

  let response = await fetch(url, options);
  let json = await response.json();
  return json;
};

const fetchTrendingMovies = async () =>
  await fetchMovies(
    "https://api.themoviedb.org/3/trending/all/day?language=en-US&page=1"
  );
const fetchTopRatedMovies = async () =>
  await fetchMovies(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
  );
const fetchPopularMovies = async () =>
  await fetchMovies(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
  );
const fetchPopularTVShows = async () =>
  await fetchMovies(
    "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1"
  );
const fetchTopRatedTVShows = async () =>
  await fetchMovies(
    "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1"
  );

// By Genre
const fetchMoviesWithPage = async (pageNumber) => {
  return await fetchMovies(
    `https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${pageNumber}`
  );
};

module.exports = {
  fetchTrendingMovies,
  fetchTopRatedMovies,
  fetchPopularMovies,
  fetchTopRatedTVShows,
  fetchPopularTVShows,
  // By Genre
  fetchMoviesWithPage,
};
