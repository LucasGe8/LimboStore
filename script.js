const items = document.querySelector(".item-container");
const cart = document.querySelector(".cart");

cart.onclick = function(){
    cart.classList.toggle("active");
}