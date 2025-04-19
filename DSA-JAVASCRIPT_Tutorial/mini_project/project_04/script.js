async function getData() {
    const url = "https://dummyjson.com/products/category/groceries";
    const data = await fetch(url).then((res) => res.json());
  
    return Promise.resolve(data);
  }
  
  getData().then((data) => {
    const products = data.products;
    const productCardContainer = document.getElementById("productCardContainer");
    const itemList = document.getElementById("itemList");
    const totalPriceElement = document.getElementById("totalPrice"); let totalPrice = 0;
    const form = document.getElementById("orderForm");
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product__card";
  
      const productImg = document.createElement("img");
      productImg.src = product.thumbnail;
      productImg.alt = product.title;
      productImg.className = "productCard__img";
  
      const productTitle = document.createElement("span");
      productTitle.className = "productCard__tittle";
      productTitle.textContent = product.title;
  
      const priceZone = document.createElement("div");
      priceZone.className = "productCard__priceZone";
  
      const productPrice = document.createElement("span");
      productPrice.className = "productCard__price";
      productPrice.textContent = `$ ${product.price.toFixed(2)}`;
  
      const productButton = document.createElement("button");
      productButton.className = "productCard__button";
      productButton.innerHTML =
        '<ion-icon name="cart" class="priceZone__icon"></ion-icon>';
  
      productButton.addEventListener("click", () => {
        const listItem = document.createElement("li");
        listItem.textContent = `${
        
          product.title
        } $ ${product.price.toFixed(2)}`;
        itemList.appendChild(listItem);
        totalPrice += product.price;
        totalPriceElement.textContent = `Total: $ ${totalPrice.toFixed(2)}`;
        
        const hiddenInput = document.createElement("input");
        hiddenInput.type = "hidden";
        hiddenInput.name = "products[]";
        hiddenInput.value = JSON.stringify({
          id: product.id,
          title: product.title,
          price: product.price
        });
  
        form.appendChild(hiddenInput);
      });
  
      priceZone.appendChild(productPrice);
      priceZone.appendChild(productButton);
      productCard.appendChild(productImg);
      productCard.appendChild(productTitle);
      productCard.appendChild(priceZone);
      productCardContainer.appendChild(productCard);
    });
  });
  