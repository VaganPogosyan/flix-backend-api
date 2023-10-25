const fetch = require("node-fetch");

const getGenres = async (req, res) => {
  //   const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const url = "https://api.themoviedb.org/3/genre/tv/list?language=en";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWIwNTJkYjI1MGFiNjE1ZGQ5M2ZlN2IzNTQxODVjYyIsInN1YiI6IjY1MzdlZTZlN2ZjYWIzMDBhZDdlNTRkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3D7KrS8A99Ir5mvfWNUT0qjBLLVGqhwVb8Iw8aqB_Cg",
    },
  };

  let response = await fetch(url, options);
  let json = await response.json();
  console.log(json);

  res.status(200).json({
    json,
  });
};

const movieGenres = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  //   { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  //   { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  //   { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  //   { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];

const tvGenres = [
  // { id: 10759, name: "Action & Adventure" },
  // { id: 16, name: "Animation" },
  // { id: 35, name: "Comedy" },
  // { id: 80, name: "Crime" },
  // { id: 99, name: "Documentary" },
  // { id: 18, name: "Drama" },
  // { id: 10751, name: "Family" },
  // { id: 10762, name: "Kids" },
  // { id: 9648, name: "Mystery" },
  // { id: 10763, name: "News" },
  // { id: 10764, name: "Reality" },
  // { id: 10765, name: "Sci-Fi & Fantasy" },
  // { id: 10766, name: "Soap" },
  // { id: 10767, name: "Talk" },
  //   { id: 10768, name: "War & Politics" },
  // { id: 37, name: "Western" },
];

module.exports = getGenres;
