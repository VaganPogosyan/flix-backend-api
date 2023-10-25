const getMoviesByGenreId = require("../../../utils/getMoviesByGenreId");

// genre_id: 28 - Action
const getActionMovies = async (req, res) => {
  const actionMovies = await getMoviesByGenreId(28);

  res.status(200).json({
    status: "success",
    data: actionMovies,
  });
};

module.exports = getActionMovies;

// const example = {
//   adult: false,
//   backdrop_path: "/4DpVWbDmYanToTTkTp2SQLQX1p4.jpg",
//   id: 807172,
//   title: "The Exorcist: Believer",
//   original_language: "en",
//   original_title: "The Exorcist: Believer",
//   overview:
//     "When his daughter, Angela, and her friend Katherine, show signs of demonic possession, it unleashes a chain of events that forces single father Victor Fielding to confront the nadir of evil. Terrified and desperate, he seeks out Chris MacNeil, the only person alive who's witnessed anything like it before.",
//   poster_path: "/lxRLC3WOFM2INoyEa3bFGIUApvn.jpg",
//   media_type: "movie",
//   genre_ids: [27],
//   popularity: 502.673,
//   release_date: "2023-10-04",
//   video: false,
//   vote_average: 5.4,
//   vote_count: 143,
// };
