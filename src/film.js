let monIdFilm = document.querySelector("#mon-id-film");
console.log(monIdFilm.value);

// création de la page film

// 1- fetch => clg(objet)


const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTRlZGEzNzE3NGJjM2ZiMDc0ODkzZjAzZDA3MzQ3NSIsInN1YiI6IjY1NTVlMGU1YjU0MDAyMTRkMTE2MWY0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4tJgM7uzRDli4pzO6hUQdO-eOC9nHFDEvK6G3W38ceU'
    }
};

fetch(`https://api.themoviedb.org/3/movie/${monIdFilm.value}?external_source=`, options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

  