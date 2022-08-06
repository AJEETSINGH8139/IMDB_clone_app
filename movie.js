let favm = document.getElementById("movie-detail");

// Function for detail button
function renderMovie(){
    let movieList = document.querySelector("#movie-detail");
    if(movieList) movieList.innerHTML = "";
    let favmovie = localStorage.getItem("current_movie");
    let savedMovie = JSON.parse(favmovie);
    if(savedMovie == null){
        favmovie = [];
    }
    else{
        const avatar = savedMovie.Title;
        const imgsrc = savedMovie.Poster;
        const plot = savedMovie.Plot;
        const released = savedMovie.released;
        const imdb = savedMovie.imdbRating;
        favm.innerHTML += `
        <div class="container">
        <div class="card cen" style="width: 25rem;">
            <img src="${imgsrc}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Title: ${avatar}</h5>
                <p class="card-text">Plot: ${plot}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ImdbRtaing: ${imbd}</li>
                <li class="list-group-item">Year of release: ${released}</li>
            </ul>
        </div>
    </div>`
    }
}

renderMovie();