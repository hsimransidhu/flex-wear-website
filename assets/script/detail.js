'use strict';

function select(selector, parent = document) {
    return parent.querySelectorAll(selector);
}

let productImg = document.getElementById("product-img");
let smallImg = select(".small-img");

smallImg[0].onclick = function() {
    productImg.src = smallImg[0].src;
}
smallImg[1].onclick = function() {
    productImg.src = smallImg[1].src;
}
smallImg[2].onclick = function() {
    productImg.src = smallImg[2].src;
}
smallImg[3].onclick = function() {
    productImg.src = smallImg[3].src;
}


