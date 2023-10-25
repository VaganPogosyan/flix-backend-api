const getMoviesByGenreId = require("../../../utils/getMoviesByGenreId");

// genre_id: 35 - Comedy
const getComedyMovies = async (req, res) => {
  const comedyMovies = await getMoviesByGenreId(35);

  res.status(200).json({
    status: "success",
    data: comedyMovies,
  });
};

module.exports = getComedyMovies;
