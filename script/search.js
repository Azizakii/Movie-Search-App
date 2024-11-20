'use strict';

const inputNode = document.querySelector('.js-movies__input');
const buttonNode = document.querySelector('.js-movies__btn');
const listNode = document.querySelector('.js-movies__list');


const params = new URLSearchParams(location.search);
const movieTitle = params.get('title');


function searchMovie (title) {
    fetch(`https://www.omdbapi.com/?s=${title}&apikey=b905e25f`)
        .then(response => response.json())
        .then((res) => {
            listNode.innerHTML = '';

            if (res.Response === 'True'){
                res.Search.forEach(movie => {
                    listNode.innerHTML += `<li class="movies__item">
                    <a class='movie__link' href='movie.html?id=${movie.imdbID}'>
                        <img class='movies__item-img' src='${movie.Poster}' alt="movie's poster">
                        <div class='movies__item-description'>
                            <p class='movies__item-title'>${movie.Title}</p>
                            <p class='movies__item-year'>${movie.Year}</p>
                            <p class='movies__item-type'>${movie.Type}</p>
                        </div>
                    </a>
                    </li>`
                });
            } else {
                listNode.innerText = 'Фильмы не найдены';
            }
        })
}





buttonNode.addEventListener('click', function(){
    const movieName = inputNode.value;
    if (movieName) {
        searchMovie(movieName);
    }
});