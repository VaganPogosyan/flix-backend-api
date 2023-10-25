const getMoviesByGenreId = require("../../../utils/getMoviesByGenreId");

// genre_id: 9648 - Mystery
const getMysteryMovies = async (req, res) => {
  const comedyMovies = await getMoviesByGenreId(9648);

  res.status(200).json({
    status: "success",
    data: comedyMovies,
  });
};

module.exports = getMysteryMovies;
