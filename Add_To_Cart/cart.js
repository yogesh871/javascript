function loadCartData() {
    let cartData = JSON.parse(localStorage.getItem("CartProducts")) || [];
    let result = "";

    cartData.forEach((product, index) => {
        result += `
            <div class="product-card" data-index="${index}">
                <div class="product-card__image">
                <div class="Product-card_delete">      
                <img src="img/close.png" style="width: 20px; cursor: pointer;" alt="Delete">
            </div>
                    <img src="${product.Product_image}" alt="${product.Product_name}" width="100">
                </div>
                <div class="product-card__info">
                    <h2 class="product-card__title">${product.Product_name}</h2>
                    <p class="product-card__description">${product.Description}</p>
                    <div class="product-card__price-row">
                        <span class="product-card__price">${product.Price}</span>
                    </div>
                </div>
            </div>
        `;
    });

    document.querySelector(".cont").innerHTML = result;
}
loadCartData();
        