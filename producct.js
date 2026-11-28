const addProducBtn = document.getElementById("addProductBtn");
const productPopup = document.getElementById("productPopup");
const closeBtn = document.getElementById("closePopup");


addProducBtn.addEventListener("click",
    function (event) {
        event.preventDefault();
        productPopup.style.display = "flex";
    }
);


closeBtn.addEventListener("click",
    function (event) {
        productPopup.style.display = "none";
    }
);

const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productImage = document.getElementById("productImage");

const saveBtn = document.getElementById("saveProduct");
let divItem=document.getElementById("itemPanel");
let body="";

saveBtn.addEventListener("click",
    function (event) {
        const name = productName.value;
        const price = productPrice.value;
        const image = productImage.files[0];
        const imageUrl=URL.createObjectURL(image);

        body += `
            <div class="box">
                <img src=${imageUrl} alt="Bag" height="200px" width="200px">
                <h4>${name}</h4>
                <h5>Rs.${price}</h5>
                <button>Add</button>
            </div>
        `
        divItem.insertAdjacentHTML("beforeend",body);
        productPopup.style.display = "none";
    }
);

