const getMoviesByGenreId = require("../../../utils/getMoviesByGenreId");

const getSciFiFantasyTVShows = async (req, res) => {
  const comedyMovies = await getMoviesByGenreId(10765);

  res.status(200).json({
    status: "success",
    data: comedyMovies,
  });
};

module.exports = getSciFiFantasyTVShows;
