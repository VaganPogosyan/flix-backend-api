const { fetchPopularTVShows } = require("../../../utils/fetchMovies");

const getPopularTVShows = async (req, res) => {
  const moviesJson = await fetchPopularTVShows();

  res.status(200).json({
    status: "success",
    data: moviesJson.results,
  });
};

module.exports = getPopularTVShows;
