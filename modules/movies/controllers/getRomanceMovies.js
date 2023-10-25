const getMoviesByGenreId = require("../../../utils/getMoviesByGenreId");

// genre_id: 14 - Fantasy
const getRomanceMovies = async (req, res) => {
  const comedyMovies = await getMoviesByGenreId(10749);

  res.status(200).json({
    status: "success",
    data: comedyMovies,
  });
};

module.exports = getRomanceMovies;
