document.querySelector("#search-btn").addEventListener('click', () => {
    let weatherData = document.querySelector("#search-input");
    let weatherDetails = document.querySelector('.weather');
    let weatherIconUrl = "";

    weatherDetails.style.transition = "all 1s";
    weatherDetails.innerHTML = "";



    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherData.value}&APPID=583324e03ae850c3564d60006371da2b&units=metric`)
        .then(res => res.json())
        .then(data => {
            console.log(data); 

            if (data.weather[0].main == 'Clouds' ) {
                weatherIconUrl = "images/clouds.png";}
            if (data.weather[0].main == 'Haze' ) {
                weatherIconUrl = "images/drizzle.png";
            } else if (data.weather[0].main == 'Clear') {
                weatherIconUrl = "images/clear.png";
            } else if (data.weather[0].main == 'Smoke') {
                weatherIconUrl = "images/mist.png";
            } else if (data.weather[0].main == 'Rain') {
                weatherIconUrl = "images/rain.png";
            } else if (data.weather[0].main == 'Drizzle') {
                weatherIconUrl = "images/drizzle.png";
            } else if (data.weather[0].main == 'Mist') {
                weatherIconUrl = "images/mist.png";
            } 

            let currentDate = new Date;
            let date = currentDate.toLocaleDateString();
            let time = currentDate.toLocaleTimeString();

            let show = `
        <div class=""card>
            <img src="${weatherIconUrl}" alt="Weather Icon" class="weather_icon">
            <div class="temps">
            <h1 class="temp">${Math.round(data.main.temp)}</h1>
            <p>°C </p>
            </div>
            <h2 class="city">${data.name}</h2>
            <div class="details">
                <div class="col">
                     <img src="images/humidity.png" alt="">
                     <div>
                          <p class="humidity">${data.main.humidity}%</p>
                          <p>Humidity</p>      
                     </div>  
                </div>        
                <div class="col">
                    <img src="images/wind.png" alt="">
                    <div>
                         <p class="wind">${data.wind.speed} km/h</p>
                         <p>Wind speed</p>
                    </div>
               </div>
            </div>
            <div class="date_time">
            <span>${date}  </span>
            <span> ${time} </span>
            </div>

        </div> `;

            weatherDetails.innerHTML = show;
        })
        .catch(err => console.log(err));
});
