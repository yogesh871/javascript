document.querySelector('#MovieBtn').addEventListener('click', () => {
    let moviename = document.querySelector('#movieName')
    let moviedateil = document.querySelector('#moviedateils')
    moviedateil.innerHTML = " "


    fetch (` http://www.omdbapi.com/?t=${moviename.value}&apikey=24b02a46`)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        let show = `
        <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${data.Poster}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${data.Title}</h5>
    <p class="card-text">${data.Plot}</p>
    <p class="card-text">${data.Actors}</p>
    <p class="card-text">${data.Language}</p>
    <p class="card-text">${data.Year}</p>
  </div>
</div>
        `
        moviedateil.innerHTML = show 
    })
    


    .catch(err => (console.log(err)))
})

