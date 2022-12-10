const URL = " http://localhost:3000/films";

//Fetch first movie details
function fetchFirstMovie (id) {
    fetch(`${URL}/${id}`)
    .then(response => response.json())
    .then(movie => {
        document.getElementById("poster").src = movie.poster;

        document.getElementById("title").innerHTML = movie.title;

        document.getElementById("runtime").innerHTML = movie.runtime;

        document.getElementById("film-info").innerHTML = movie.description;

        document.getElementById("showtime").innerHTML = movie.showtime;

        document.getElementById("ticket-num").innerHTML = movie.capacity - movie.tickets_sold;
    })
}

//Fetch movie titles
function fetchMovieTitles () {
    return fetch(`${URL}`)
    .then(response => response.json())
}

//Display movie titles
function renderMovieTitles (movieTitles) {
    const movieList = document.getElementById("films");
    const movies = document.createElement("li");
    movies.innerHTML = movieTitles.title.toUpperCase();

    movieList.appendChild(movies);
}

fetchMovieTitles().then(movies => {
    movies.forEach(movie => {
        renderMovieTitles(movie);
    })
})

document.addEventListener("DOMContentLoaded", function () {
    fetchFirstMovie(1);
    fetchMovieTitles();
})