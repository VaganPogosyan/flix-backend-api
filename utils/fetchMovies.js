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

const fetchMovieById = async (movie_id) =>
  await fetchMovies(
    `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`
  );

const fetchTrendingMovies = async () =>
  await fetchMovies(
    "https://api.themoviedb.org/3/trending/all/day?language=en-US&page=1"
  );

const fetchTopRatedMovies = async () => {
  const randomPage = Math.ceil(Math.random() * 10);
  return await fetchMovies(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${randomPage}`
  );
};

const fetchPopularMovies = async () => {
  const randomPage = Math.ceil(Math.random() * 10);
  return await fetchMovies(
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${randomPage}`
  );
};

const fetchPopularTVShows = async () => {
  const randomPage = Math.ceil(Math.random() * 10);
  return await fetchMovies(
    `https://api.themoviedb.org/3/tv/popular?language=en-US&page=${randomPage}`
  );
};
// await fetchMovies(
//   "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1"
// );

const fetchTopRatedTVShows = async () => {
  const randomPage = Math.ceil(Math.random() * 10);
  return await fetchMovies(
    `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=${randomPage}`
  );
};

// await fetchMovies(
//   "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1"
// );

// By Genre
const fetchMoviesWithPage = async (pageNumber) => {
  return await fetchMovies(
    `https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${pageNumber}`
  );
};

// Search for a movie by name
const searchMovieByName = async (name, pageNumber) =>
  await fetchMovies(
    `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=${pageNumber}`
  );

// Get videso for a movie by movie_id
const fetchVideos = async (movie_id, movie_or_tv) => {
  const media_type = movie_or_tv;
  return await fetchMovies(
    `https://api.themoviedb.org/3/${media_type}/${movie_id}/videos?language=en-US`
  );
};

const url = "https://api.themoviedb.org/3/movie/945729/videos?language=en-US";

module.exports = {
  fetchTrendingMovies,
  fetchTopRatedMovies,
  fetchPopularMovies,
  fetchTopRatedTVShows,
  fetchPopularTVShows,
  // By Genre
  fetchMoviesWithPage,
  // Search
  searchMovieByName,
  // By ID
  fetchMovieById,
  // Get videos for movie
  fetchVideos,
};
