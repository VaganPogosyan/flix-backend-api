const getMoviesByGenreId = require("../../../utils/getMoviesByGenreId");

// genre_id: 80 - Crime
const getDramaMovies = async (req, res) => {
  const comedyMovies = await getMoviesByGenreId(18);

  res.status(200).json({
    status: "success",
    data: comedyMovies,
  });
};

module.exports = getDramaMovies;
