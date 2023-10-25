const getMoviesByGenreId = require("../../../utils/getMoviesByGenreId");

// genre_id: 878 - Science Fiction
const getScienceFictionMovies = async (req, res) => {
  const comedyMovies = await getMoviesByGenreId(878);

  res.status(200).json({
    status: "success",
    data: comedyMovies,
  });
};

module.exports = getScienceFictionMovies;
