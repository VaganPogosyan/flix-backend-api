const { fetchTrendingMovies } = require("../../../utils/fetchMovies");

const getTrendingMovies = async (req, res) => {
  // try {
  const moviesJson = await fetchTrendingMovies();

  res.status(200).json({
    status: "success",
    data: moviesJson.results,
  });

  // } catch (error) {
  //   res.status(400).json({
  //     status: "failed",
  //     message: error.message,
  //   });
  // }
};

module.exports = getTrendingMovies;
