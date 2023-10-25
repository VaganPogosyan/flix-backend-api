const getMoviesByGenreId = require("../../../utils/getMoviesByGenreId");

// genre_id: 10751 - Family
const getFamilyMovies = async (req, res) => {
  const comedyMovies = await getMoviesByGenreId(10751);

  res.status(200).json({
    status: "success",
    data: comedyMovies,
  });
};

module.exports = getFamilyMovies;
