const getMoviesByGenreId = require("../../../utils/getMoviesByGenreId");

// genre_id: 53 - Thriller
const getThrillerMovies = async (req, res) => {
  const comedyMovies = await getMoviesByGenreId(53);

  res.status(200).json({
    status: "success",
    data: comedyMovies,
  });
};

module.exports = getThrillerMovies;
