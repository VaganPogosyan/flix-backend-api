const { fetchMoviesWithPage } = require("./fetchMovies");

// const getMoviesByGenreId = async (genre_id) => {
//   const randomPage = Math.ceil(Math.random() * 100);
//   const movies = await fetchMoviesWithPage(randomPage);
//   const data = movies.results;
//   return data;

//   for (let i = 0; i < data.length; i++) {
//     if (data[i].genre_ids.includes(genre_id)) {
//       moviesByGenre.push(data[i]);
//       if (moviesByGenre.length >= AMOUNT_OF_MOVIES) break;
//     }
//   }

//   return moviesByGenre;
// };

const getMoviesByGenreId = async (genre_id) => {
  const moviesByGenre = [];
  const AMOUNT_OF_MOVIES = 10;

  let page = Math.ceil(Math.random() * 10);
  while (moviesByGenre.length < AMOUNT_OF_MOVIES) {
    // const randomPage = Math.ceil(Math.random * 100)
    const movies = await fetchMoviesWithPage(page);
    const data = movies.results;

    for (let i = 0; i < data.length; i++) {
      if (data[i].genre_ids.includes(genre_id)) {
        moviesByGenre.push(data[i]);
        if (moviesByGenre.length >= AMOUNT_OF_MOVIES) break;
      }
    }

    page++;
  }
  return moviesByGenre;
};

module.exports = getMoviesByGenreId;
