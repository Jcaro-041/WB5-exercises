


document.addEventListener("DOMContentLoaded", () => {

    const imageContainer = document.querySelector("#imageContainer")

    products.forEach(product => {

        // create a div for each product
        const div = document.createElement("div");
        div.classList.add("product") ;
        div.id = "product-" + product.productId ;
        
        // add product heading
        const h4 = document.createElement("h4")
        h4.innerText = product.name;
        div.appendChild(h4);

        // add product image
        const img = document.createElement("img");
        img.src = "images/products/" + product.imageUrl
        div.appendChild(img);

        // add price for product
        const h2 = document.createElement("h2");
        h2.innerText = `$${product.price}`;
        div.appendChild(h2);

        // add description to for the product
        const p = document.createElement("p");
        p.innerText = product.description;
        div.appendChild(p);

        imageContainer.appendChild(div);
        // console.log(div);
    });

})