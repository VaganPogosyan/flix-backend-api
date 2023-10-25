const getMoviesByGenreId = require("../../../utils/getMoviesByGenreId");

// genre_id: 14 - Fantasy
const getHorrorMovies = async (req, res) => {
  const comedyMovies = await getMoviesByGenreId(27);

  res.status(200).json({
    status: "success",
    data: comedyMovies,
  });
};

module.exports = getHorrorMovies;
