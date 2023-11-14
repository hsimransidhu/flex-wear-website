'use strict';

function select(selector, parent = document) {
    return parent.querySelectorAll(selector);
}

let ProductImg = document.getElementById("product-img");
let SmallImg = select(".small-img");

SmallImg[0].onclick = function() {
    ProductImg.src = SmallImg[0].src;
}
SmallImg[1].onclick = function() {
    ProductImg.src = SmallImg[1].src;
}
SmallImg[2].onclick = function() {
    ProductImg.src = SmallImg[2].src;
}
SmallImg[3].onclick = function() {
    ProductImg.src = SmallImg[3].src;
}