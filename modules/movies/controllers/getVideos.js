const { fetchVideos } = require("../../../utils/fetchMovies");

const getVideos = async (req, res) => {
  const { results } = await fetchVideos(
    req.params.movie_id,
    req.params.movie_or_tv
  );

  const clip = results.find((video) => video.type === "Clip");

  await res.status(200).json({
    status: "success",
    data: clip?.key || results[0].key,
  });
};

module.exports = getVideos;
