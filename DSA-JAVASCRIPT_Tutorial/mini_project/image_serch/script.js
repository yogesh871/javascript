

let accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";

let formEl = document.querySelector("form");
let searchInputEl = document.getElementById("search-input");
let searchResultsEl = document.querySelector(".search-results");
let showMoreButtonEl = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

async function searchImages() {
  inputData = searchInputEl.value.trim();
  if (inputData === "") return;

  let url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

  try {
    let response = await fetch(url);
    let data = await response.json();

    if (page === 1) {
      searchResultsEl.innerHTML = "";
    }

    let results = data.results;

    if (results.length === 0 && page === 1) {
      searchResultsEl.innerHTML = "<p>No images found. Try a different search term.</p>";
      showMoreButtonEl.style.display = "none";
      return;
    }

    results.forEach((result) => {
      let imageWrapper = document.createElement("div");
      imageWrapper.classList.add("search-result");

      let image = document.createElement("img");
      image.src = result.urls.small;
      image.alt = result.alt_description || "Image from Unsplash";

      let imageLink = document.createElement("a");
      imageLink.href = result.links.html;
      imageLink.target = "_blank";
      imageLink.textContent = result.alt_description || "View Image";

      imageWrapper.appendChild(image);
      imageWrapper.appendChild(imageLink);
      searchResultsEl.appendChild(imageWrapper);
    });

    page++;

    showMoreButtonEl.style.display = results.length > 0 ? "block" : "none";

  } catch (error) {
    console.error("Error fetching images:", error);
    searchResultsEl.innerHTML = "<p>Failed to load images. Please try again later.</p>";
    showMoreButtonEl.style.display = "none";
  }
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImages();
});

showMoreButtonEl.addEventListener("click", () => {
  searchImages();
});
