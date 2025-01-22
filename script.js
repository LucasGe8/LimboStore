const items = document.querySelector(".item-container");
const cart = document.querySelector(".cart");
const addItem = document.querySelector(".addItem")


cart.onclick = function(){
    cart.classList.toggle("active");
}

