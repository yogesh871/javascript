
document.querySelector("button").addEventListener("click", () => {

    let fetchRes = fetch("https://dog.ceo/api/breeds/image/random");
    fetchRes
        .then(res => res.json())
        .then(data => {
            console.log(data);

            let imageUrl = data.message;
            let div = document.createElement('div');
            div.innerHTML = `
      <img src="${imageUrl}" />
      `;
            const all = document.getElementById('Fatch');
            all.prepend(div);

        })

        .catch(error => {
            console.error("Error fetching dog image:", error);
        });

})




