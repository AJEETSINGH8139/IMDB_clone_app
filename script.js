let access_token = "9204632f";

const search = document.getElementById("search");
const suggestion = document.getElementById("match-list");
let currentMovie = {};

function favMovie(e){
    const first = e.target.name.split("");
    const movieName = first[0] + first[1];
    if(e.target.innerHTML == "Favourite"){
        let favmovie = JSON.parse(localStorage.getItem("favMovie")) || [];
        let results = JSON.parse(localStorage.getItem("results")) || [];
        favmovie.push(results[Number(e.target.id)]);
        localStorage.setItem("favMovie", JSON.stringify(favmovie));
        e.target.value = " ";
    }
}

function movieDetails(event){
    let results = JSON.parse(localStorage.getItem("results")) || [];
    let current_movie = results[Number(event.target.id)];
    localStorage.setItem("current_movie", JSON.stringify(current_movie));
    window.location.assign("movie.html");
}

// This will fetch the api of words typed by the user whenever it enters the words it input tag
search.addEventListener("input", (e) => {
    const fetchApi = async function(){
        const response = await fetch(
            `https://www.omdbapi.com/?t=${e.target.value}&apikey=${access_token}`
        );
        const data = await response.json();
        let results = JSON.parse(localStorage.getItem("results")) || [];
        results.push(data);
        localStorage.setItem("results", JSON.stringify(results));
        const avatar = data.Title;
        const ingsrc = data.Poster;
        currentMovie = data;
        suggestion.innerHTML += `
        <div class = "card-body">
        <h5 class = "card-title">${avatar}</h5>
        <img src = "${imgsrc}">
        <button class = "btn btn-primary" id = "${results.length - 1}" name = ${JSON.stringify(
            data
        )} onclick = "favMovie(event)">Favourite</button>
        <button class = "btn btn-primary" id = "${
            results.length - 1
        }" onclick = movieDetails(event)>Details</button>
        </div>`;

    };
})