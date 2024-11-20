'use strict';

const movieNode = document.querySelector('.js-movie-details');

const params = new URLSearchParams(location.search);
const movieId = params.get('id');

function aboutSelectedMovie (id) {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=b905e25f`)
        .then (response => response.json())
        .then(movie => {
            if(movie.Response === 'True'){
                movieNode.innerHTML = `
                <div class='about-movie'>
                    <div class="movie-wrapper">
                        <img class="movie-img" src="${movie.Poster}" alt="Poster of ${movie.Title}">
                        <div class="movie-details">
                            <h2 class="movie-title">${movie.Title}</h2>
                            <p class="movie">Year: <span class='movie-main'>${movie.Year}</span></p>
                            <p class="movie">Rating: <span class='movie-main'>${movie.Rated}</span></p>
                            <p class="movie">Released: <span class='movie-main'>${movie.Released}</span></p>
                            <p class="movie">Duration: <span class='movie-main'>${movie.Runtime}</span></p>
                            <p class="movie">Genre: <span class='movie-main'>${movie.Genre}</span></p>
                            <p class="movie">Director: <span class='movie-main'>${movie.Director}</span></p>
                            <p class="movie">Writer: <span class='movie-main'>${movie.Writer}</span></p>
                            <p class="movie">Actors: <span class='movie-main'>${movie.Actors}</span></p>
                        </div>
                    </div>
                    <div class='movie-description'>${movie.Plot}</div>
                </div>`
                ;
            }
        })
}

if(movieId) {
    aboutSelectedMovie(movieId);
}
