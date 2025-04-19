//  AJAX

let obj = new XMLHttpRequest();
obj.onload = function () {
    let all = document.getElementById("Ajax")
 
    // document.getElementById("Ajax").innerHTML = this.responseText;
 all.responseText; 
    let data = JSON.parse(obj.responseText)

    data.products.forEach(element => {
        console.log(element)

        let div =  document.createElement('div')
        div.innerHTML = `
        <div class="mb">
        <h1>${element.title}</h1>
        <img src=" ${element.images[0]}"  style="width: 200px;" />
        <p>${element.price}</p>
        <p>${element.discription}</p>
        </div>
        
        `
        all.append(div);
        
    });
}

obj.open("GET", "https://dummyjson.com/products", true);

obj.send();



