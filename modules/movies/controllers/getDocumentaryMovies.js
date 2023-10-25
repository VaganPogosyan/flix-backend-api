const getMoviesByGenreId = require("../../../utils/getMoviesByGenreId");

// genre_id: 80 - Crime
const getDocumentaryMovies = async (req, res) => {
  const comedyMovies = await getMoviesByGenreId(99);

  res.status(200).json({
    status: "success",
    data: comedyMovies,
  });
};

module.exports = getDocumentaryMovies;
