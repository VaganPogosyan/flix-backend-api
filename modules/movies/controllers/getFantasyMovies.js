const getMoviesByGenreId = require("../../../utils/getMoviesByGenreId");

// genre_id: 14 - Fantasy
const getFantasyMovies = async (req, res) => {
  const comedyMovies = await getMoviesByGenreId(14);

  res.status(200).json({
    status: "success",
    data: comedyMovies,
  });
};

module.exports = getFantasyMovies;
