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

let MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px";
    } else {
        MenuItems.style.maxHeight = "0px";
    }
}

function openModal() {
    if (window.innerWidth <= 600) {
        menutoggle();
        // Hide the menu when opening the modal on smaller screens
        MenuItems.style.maxHeight = "0px";
    
        document.getElementById('loginModal').style.display = 'flex';
    }
    document.getElementById('loginModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
}

function login() {
    document.getElementById('loginModal').style.display = 'none';
}

 

