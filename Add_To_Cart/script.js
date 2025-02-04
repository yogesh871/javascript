document.querySelector("#ProductForm").addEventListener("submit", (event) => {
    event.preventDefault();

    let productName = document.getElementById("Product_name").value;
    let productImage = document.getElementById("Product_image").value;
    let price = document.getElementById("Price").value;
    let description = document.getElementById("Description").value;

    let formData = {
        Product_name: productName,
        Product_image: productImage,
        Price: price,
        Description: description,
    };

    let products = JSON.parse(localStorage.getItem("Product")) || [];
    products.push(formData);

    localStorage.setItem("Product", JSON.stringify(products));
    document.querySelector("form").reset();

    loadData();
});

function loadData() {
    let allData = JSON.parse(localStorage.getItem("Product")) || [];

    let result = "";
    allData.forEach((record, index) => {
        let row = `
            <div class="product-card" data-index="${index}">
                <div class="product-card__image">
                    <img src="${record.Product_image}" alt="${record.Product_name}" width="100">
                </div>
                <div class="product-card__info">
                    <h2 class="product-card__title">${record.Product_name}</h2>
                    <p class="product-card__description">${record.Description}</p>
                    <div class="product-card__price-row">
                        <span class="product-card__price">${record.Price}</span>
                        <button class="product-card__btn">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        result = result + row;
    });

    document.querySelector(".cont").innerHTML = result;

    document.querySelectorAll(".product-card__btn").forEach((btn, index) => {
        btn.addEventListener("click", () => addToCart(index));
    });
}




function addToCart(index) {
    let products = JSON.parse(localStorage.getItem("Product")) || [];
    let cartProducts = JSON.parse(localStorage.getItem("CartProducts")) || [];

    let productToAdd = products[index];
    cartProducts.push(productToAdd);

    localStorage.setItem("CartProducts", JSON.stringify(cartProducts));

    alert(`${productToAdd.Product_name} added to cart`);
}

loadData();


