const getMoviesByGenreId = require("../../../utils/getMoviesByGenreId");

// genre_id: 12 - Animation
const getAnimationMovies = async (req, res) => {
  const comedyMovies = await getMoviesByGenreId(12);

  res.status(200).json({
    status: "success",
    data: comedyMovies,
  });
};

module.exports = getAnimationMovies;
