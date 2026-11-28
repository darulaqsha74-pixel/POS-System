const addProducBtn = document.getElementById("addProductBtn");
const productPopup = document.getElementById("productPopup");
const closeBtn = document.getElementById("closePopup");

addProducBtn.addEventListener("click", function(event) {
    event.preventDefault();
    productPopup.style.display = "flex";
});

closeBtn.addEventListener("click", function() {
    productPopup.style.display = "none";
});

const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productImage = document.getElementById("productImage");

const saveBtn = document.getElementById("saveProduct");

let divItem = document.querySelector(".itemPanel");

saveBtn.addEventListener("click", function() {

    const name = productName.value.trim();
    const price = productPrice.value;
    const image = productImage.files[0];

    if (name === "" || price === "" || !image) {
        alert("Please fill all product details!");
        return;
    }

    const imageUrl = URL.createObjectURL(image);

    let body = `
        <div class="box">
            <img src="${imageUrl}" alt="${name}" height="200px" width="200px">
            <h4>${name}</h4>
            <h5>Rs.${price}</h5>
            <button class="cart-btn">Add</button>
        </div>
    `;

    divItem.insertAdjacentHTML("beforeend", body);

    productName.value = "";
    productPrice.value = "";
    productImage.value = "";

    productPopup.style.display = "none";

    alert("Product Added Successfully!");
});


// ADD TO CART

let cartItems = document.getElementById("cartItems");
let itemPanel = document.querySelector(".itemPanel");

itemPanel.addEventListener("click", function(event) {

    if (event.target.classList.contains("cart-btn")) {

        let productCard = event.target.closest(".box");

        let price = productCard.querySelector("h5").innerText;
        let image = productCard.querySelector("img").src;

        let body = `
            <div class="item">

                <span>
                    <img src="${image}" alt="product"
                    height="50px" width="50px">
                </span>

                <div class="quantity">
                    <button>+</button>
                    <span>1</span>
                    <button>-</button>
                </div>

                <div class="quantity">
                    <span>${price}</span>
                </div>

            </div>
        `;

        cartItems.innerHTML += body;

    }

});