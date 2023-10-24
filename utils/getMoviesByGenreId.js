const { fetchMoviesWithPage } = require("./fetchMovies");

const getMoviesByGenreId = async (genre_id) => {
  const moviesByGenre = [];
  const AMOUNT_OF_MOVIES = 10;

  let page = 1;
  while (moviesByGenre.length < AMOUNT_OF_MOVIES) {
    const movies = await fetchMoviesWithPage(page);
    const data = movies.results;

    for (let i = 0; i < data.length; i++) {
      if (moviesByGenre.length > AMOUNT_OF_MOVIES) break;
      if (data[i].genre_ids.includes(genre_id)) {
        moviesByGenre.push(data[i]);
      }
    }

    page++;
  }
  return moviesByGenre;
};

module.exports = getMoviesByGenreId;
