// let tabFilms = [
//     {titre: "film 1", duree: 120, affiche:""}, 
//     {titre: "film 2", duree: 120, affiche:""}, 
//     {titre: "film 3", duree: 120, affiche:""},
//     {titre: "film 4", duree: 120, affiche:""},
//     {titre: "film 5", duree: 120, affiche:""},
//     {titre: "film 6", duree: 120, affiche:""},
//     {titre: "film 7", duree: 120, affiche:""},
//     {titre: "film 8", duree: 120, affiche:""},
//     {titre: "film 9", duree: 120, affiche:""},
// ];

const apiKey = '214eda37174bc3fb074893f03d073475'

let films = async() => await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
.then(function(response) {
    if (response.ok) {
        return response.json();
    }
    throw new Error("Erreur lors de la requête");
})
.then(function(data){
    console.log(data.results);
    return data.results;
});
// console.log(tabFilms);

let main = document.querySelector("#liste-films");

films().then(films => films.map((film) => {
  let filmCard = document.createElement("div");
  console.log(film.overview);
  filmCard.innerHTML = `
    <div class="max-w-[200px] m-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="http://localhost:4000/film.php?id=${film.id}">
            <img class="rounded-t-lg" src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/${film.backdrop_path}" alt="" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${film.original_title}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${film.overview.split(" ").slice(0, 12).join(" ")}...</p>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                 <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
    `;
  // filmCard.classList.add("film-card");
  main.appendChild(filmCard);
}))



// console.log(main);