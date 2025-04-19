
document.querySelector("#ProductForm").addEventListener("submit", (event) => {
    event.preventDefault();

    let productName = document.querySelector("#Product_name").value;
    let productImg = document.querySelector("#Product_img").value;
    let price = document.querySelector("#Price").value;
    let category = document.querySelector("#category").value;

    let formData = {
        Product_name: productName,
        Product_img: productImg,
        Price: price,
        category: category,
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
            <div class="product-cards" data-index="${index}">
                <div class="product_card">
                    <div class="product-img">
                        <img src="${record.Product_img}" alt="" >
                    </div>
                    <div class="product-info">
                        <div class="product-title">
                            <h4>Name: <span>${record.Product_name}</span></h4>
                        </div>
                        <div class="product-price">
                            <p>Price: <span>${record.Price}</span></p>
                        </div>
                        <div class="product-category">
                            <p>Category: <span>${record.category}</span></p>
                        </div>
                        <div class="product-buttons">
                            <button class="Edit-btn" data-index="${index}" type="button">
                                <img src="img/edit.png">
                            </button>
                            <button class="remove-btn" data-index="${index}" type="button">
                                <img src="img/trash.png">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        result += row;
    });

    document.querySelector(".cont").innerHTML = result;

    document.querySelectorAll(".Edit-btn").forEach((button) => {
        button.addEventListener("click", editProduct);
    });

    document.querySelectorAll(".remove-btn").forEach((button) => {
        button.addEventListener("click", removeProduct);
    });
}

function editProduct(event) {
    let index = event.target.closest(".Edit-btn").dataset.index;
    let products = JSON.parse(localStorage.getItem("Product")) || [];

    let product = products[index];

    document.querySelector("#Product_name").value = product.Product_name;
    document.querySelector("#Product_img").value = product.Product_img;
    document.querySelector("#Price").value = product.Price;
    document.querySelector("#category").value = product.category;

    products.splice(index, 1);
    localStorage.setItem("Product", JSON.stringify(products));

    loadData();
}

function removeProduct(event) {
    let index = event.target.closest(".remove-btn").dataset.index;
    let products = JSON.parse(localStorage.getItem("Product")) || [];

    products.splice(index, 1);
    localStorage.setItem("Product", JSON.stringify(products));

    loadData();
}


loadData();








