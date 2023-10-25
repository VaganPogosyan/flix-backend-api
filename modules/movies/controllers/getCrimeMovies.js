const getMoviesByGenreId = require("../../../utils/getMoviesByGenreId");

// genre_id: 80 - Crime
const getCrimeMovies = async (req, res) => {
  const comedyMovies = await getMoviesByGenreId(80);

  res.status(200).json({
    status: "success",
    data: comedyMovies,
  });
};

module.exports = getCrimeMovies;
