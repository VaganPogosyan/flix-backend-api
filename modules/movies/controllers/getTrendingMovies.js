const { fetchTrendingMovies } = require("../../../utils/fetchMovies");

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
