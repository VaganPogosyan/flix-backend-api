const { fetchTopRatedMovies } = require("../../../utils/fetchMovies");

const getTopRatedMovies = async (req, res) => {
  const moviesJson = await fetchTopRatedMovies();

  res.status(200).json({
    status: "success",
    data: moviesJson.results,
  });
};

module.exports = getTopRatedMovies;
