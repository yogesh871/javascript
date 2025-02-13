const apiURL = "https://api.rootnet.in/covid19-in/stats/history";

function fetchCovidData() {
    return fetch(apiURL)  
        .then(response => response.json()) 
        .then(data => data.data) 

        .catch(error => {
            console.error("Error fetching data:", error);
            return [];
        });
}

function searchData() {
    const searchDate = document.getElementById("searchDate").value;
    if (!searchDate) {
        alert("Please select a date!");
        return;
    }

    fetchCovidData().then(historyData => {
        const result = historyData.find(day => day.day === searchDate);
        if (result) {
            
            const stateDataContainer = document.getElementById("stateData");
          
            
            result.regional.forEach(state => {
              const stateElement = document.createElement("div");
                stateElement.innerHTML = `
                <div class="state-card">
                <h1> State Name : ${state.loc}</h1>
               <p> Cases :  ${state.totalConfirmed} </p>
               <p> Deaths : ${state.deaths}</p>
               <p>  Recovered :  ${state.discharged}</p>
                </div>
            
                `
                stateDataContainer.appendChild(stateElement);
            });
            console.log(result);
            
        } else {
            alert("No data found!");
   }
 });
}


