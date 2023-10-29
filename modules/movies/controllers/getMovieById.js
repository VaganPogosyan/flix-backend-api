const { fetchMovieById } = require("../../../utils/fetchMovies");

const getMovieById = async (req, res) => {
  const foundMovie = await fetchMovieById(req.params.movie_id);

  res.status(200).json({
    status: "success",
    data: foundMovie,
  });
};

module.exports = getMovieById;
