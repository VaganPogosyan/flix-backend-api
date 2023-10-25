const getMoviesByGenreId = require("../../../utils/getMoviesByGenreId");

// genre_id: 37 - Western
const getWesternMovies = async (req, res) => {
  const comedyMovies = await getMoviesByGenreId(37);

  res.status(200).json({
    status: "success",
    data: comedyMovies,
  });
};

module.exports = getWesternMovies;
