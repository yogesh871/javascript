

document.querySelector("button").addEventListener("click", () => {
  
    axios.get("https://dog.ceo/api/breeds/image/random")
      .then(response => {
        let imageUrl = response.data.message;
        let div = document.createElement('div');
        div.innerHTML = `
          <img src="${imageUrl}" />
        `;
        let all = document.getElementById('Fatch');
        all.prepend(div);
      })
      .catch(error => {
        console.error("Error fetching dog image:", error);
      });
  
  });
  