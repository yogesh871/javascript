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
                <h1> State Name : <span class="state-name"> ${state.loc}</span></h1>
               <p> Cases : <span  class="case-count"> ${state.totalConfirmed} </span> </p>
               <p> Deaths : <span class="death-count"> ${state.deaths}</span></p>
               <p>  Recovered : <span class="recovery-count">  ${state.discharged} </span></p>
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


