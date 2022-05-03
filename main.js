const API_ENDPOINT = `https://api.themoviedb.org/3/search/movie?api_key=3ccee47bd8e29ef810cf39b3fe5a1810`
const API_POPULAR = `https://api.themoviedb.org/3/movie/top_rated?api_key=3ccee47bd8e29ef810cf39b3fe5a1810&language=es-AR&page=1`
const API_PREMIERES = `https://api.themoviedb.org/3/movie/now_playing?api_key=3ccee47bd8e29ef810cf39b3fe5a1810&language=es-AR&page=1`
const API_COMING_SOON = `https://api.themoviedb.org/3/movie/upcoming?api_key=3ccee47bd8e29ef810cf39b3fe5a1810&language=es-AR&page=1&region=AR`
//buscar pelicula
let moviesDiv = document.getElementById("list");
function searchMovies(query) {
  return fetch(API_ENDPOINT + '&query=' + query)
    .then(response => response.json())
}
//buscar peliculas populares
function searchMoviesPopular() {
    return fetch(API_POPULAR)
      .then(response => response.json())
  }
//buscar peliculas nuevas
function searchMoviesPremiere() {
    return fetch(API_PREMIERES)
      .then(response => response.json())
  }
  function searchMoviesComingSoon() {
    return fetch(API_COMING_SOON)
      .then(response => response.json())
  }
  
//promesa de buscar pelicula
function submitForm() {
  // Get query value
  while (moviesDiv.firstChild){
    moviesDiv.removeChild(moviesDiv.firstChild);
  };
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
//Promesa de peliculas mas populares:
function submitFormPopular() {
  while (moviesDiv.firstChild){
    moviesDiv.removeChild(moviesDiv.firstChild);
  };
    searchMoviesPopular()
      .then((data) => {
        if (data && data.results) {
          data.results.forEach((movie) => {
            renderMovie(movie.original_title, movie.overview, movie.poster_path, movie.release_date, movie.vote_average)
          }) 
        } 
      })
      .catch((err) => {
        console.error(err)
      })
  }
  //Promesa de peliculas en estreno:
function submitFormPremieres() {
  while (moviesDiv.firstChild){
    moviesDiv.removeChild(moviesDiv.firstChild);
  };
    searchMoviesPremiere()
      .then((data) => {
        if (data && data.results) {
          data.results.forEach((movie) => {
            renderMovie(movie.original_title, movie.overview, movie.poster_path, movie.release_date, movie.vote_average)
          }) 
        } 
      })
      .catch((err) => {
        console.error(err)
      })
  }
  //promesa de peliculas proximamente:
  function submitFormComingSoon() {
    while (moviesDiv.firstChild){
      moviesDiv.removeChild(moviesDiv.firstChild);
    };
      searchMoviesComingSoon()
        .then((data) => {
          if (data && data.results) {
            data.results.forEach((movie) => {
              renderMovie(movie.original_title, movie.overview, movie.poster_path, movie.release_date, movie.vote_average)
            }) 
          } 
        })
        .catch((err) => {
          console.error(err)
        })
    }

function renderMovie(title, overview, poster_path, release_date, vote_average) {
  const moviesDiv = document.getElementById("list"); 
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
  moviesDiv.insertAdjacentHTML("afterbegin", html);
}  
