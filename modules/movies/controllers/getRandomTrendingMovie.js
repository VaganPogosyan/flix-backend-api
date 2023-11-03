const { fetchTrendingMovies } = require("../../../utils/fetchMovies");

const getRandomTrendingMovie = async (req, res) => {
  const { results } = await fetchTrendingMovies();
  const randomMovie = results[Math.floor(Math.random() * results.length)];

  res.status(200).json({
    status: "success",
    data: randomMovie,
  });
};

module.exports = getRandomTrendingMovie;
