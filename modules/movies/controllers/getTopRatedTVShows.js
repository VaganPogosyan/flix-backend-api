const { fetchTopRatedTVShows } = require("../../../utils/fetchMovies");

const getTopRatedTVShows = async (req, res) => {
  const moviesJson = await fetchTopRatedTVShows();

  res.status(200).json({
    status: "success",
    data: moviesJson.results,
  });
};

module.exports = getTopRatedTVShows;
