// Config
const API_ENDPOINT = `https://api.themoviedb.org/3/search/movie?api_key=3ccee47bd8e29ef810cf39b3fe5a1810`
// Make a request to API
function searchMovies(query) {
  return fetch(API_ENDPOINT + '&query=' + query)
    .then(response => response.json())
}

// Handle the submit form action
// Make a request to API and render results
function submitForm() {
  // Get query value
  const query = document.getElementById("query").value;

  // Execute API request
  searchMovies(query)
    .then((data) => {

      // Process results from API
      if (data && data.results) {
        // Iterate list of movies and render each of them
        data.results.forEach((movie) => {
          renderMovie(movie.original_title, movie.overview, movie.poster_path, movie.release_date, movie.vote_average)
        }) 
      } 
    })
    .catch((err) => {
      console.error(err)
    })
}
//function actualizar(renderMovie){
//html.innerHTML = ("");

function renderMovie(title, overview, poster_path, release_date, vote_average) {
  const moviesDiv = document.getElementById("movies-list");
  const html = `
    <div class="movie-box">
      <div class="details">
        <div class="cat"><img src = https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}>
        <div><div class="circulo"><h2>${vote_average}</h2></div>
        <div class="title">${title}</div>
        <div class="overview"><p class="descripcion">${overview}</p></div> 
        <div class="overview"><b>Fecha de lanzamiento: ${release_date}<b></div>
        </div>
        </div>
      </div>
    </div>
    <br>
  `;
  moviesDiv.insertAdjacentHTML("afterend", html);
}
