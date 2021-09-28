const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8fb01cc22fc8e633a5abbc59a21f4ed3&page=1";

const IMG_PATH = "https://image.tmbd.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=8fb01cc22fc8e633a5abbc59a21f4ed3&query="';

const form = document.getElementById("form");
const search = document.getElementById("search");

// Get initial movies
getMovies(API_URL);
async function getMovies(url) {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data.results);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});
