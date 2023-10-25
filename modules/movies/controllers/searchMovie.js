const { searchMovieByName } = require("../../../utils/fetchMovies");

// search?movie_name=miss&page=10
const searchMovie = async (req, res) => {
  //   const queryMovieName = " Mission impossible ";
  //   const queryText = queryMovieName.trim().replace(" ", "+");
  const queryMovieName = req.query.movie_name;
  const queryPage = req.query.page;

  const searchResults = await searchMovieByName(queryMovieName, queryPage);

  res.status(200).json({
    status: "success",
    data: searchResults,
  });
};

module.exports = searchMovie;
