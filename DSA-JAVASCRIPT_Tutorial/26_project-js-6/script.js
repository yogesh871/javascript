
let images = [
    { "id": 1, "image": 'https://wowslider.com/sliders/demo-74/data1/images/newyorkcity336475_1280.jpg' },
    { "id": 2, "image": 'https://wowslider.com/sliders/demo-7/data/images/barpark.jpg' },
    { "id": 3, "image": 'https://wowslider.com/sliders/demo-32/data1/images/alder.jpg' },
    { "id": 4, "image": 'https://wowslider.com/sliders/demo-7/data/images/gate.jpg' },
    { "id": 5, "image": 'https://wowslider.com/sliders/demo-46/data1/images/blue_ocean.jpg' },
    { "id": 6, "image": 'https://wowslider.com/sliders/demo-45/data1/images/stones.jpg' },
    { "id": 7, "image": 'https://wowslider.com/sliders/demo-46/data1/images/beach.jpg' },
    { "id": 8, "image": 'https://wowslider.com/sliders/demo-51/data1/images/landscape.jpg' },
    { "id": 9, "image": 'https://wowslider.com/sliders/demo-51/data1/images/stone_tree.jpg' },
    { "id": 10, "image": 'https://www.w3schools.com/howto/img_snow_wide.jpg' }
];


let index = 0;

function previmg() {
    index = (index == 0) ? (images.length - 1) : (index - 1) % images.length;
    loaddata(index);
}

function nextimg() {
    index = (index + 1) % images.length;
    loaddata(index);
}

function loaddata(id) {
    const imageElement = document.getElementById("image");
    imageElement.style.opacity = 0;

    setTimeout(() => {
        imageElement.setAttribute('src', images[id].image);
        imageElement.style.opacity = 1;
    }, 500);
}

loaddata(index);
