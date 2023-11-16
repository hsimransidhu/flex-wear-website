"use strict";

// Utility functions
function onEvent(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
  return parent.querySelector(selector);
}

function getElement(selector, parent = document) {
  return parent.getElementById(selector);
}

function selectAll(selector, parent = document) {
  return parent.querySelectorAll(selector);
}

// Selections
let productImg = getElement("product-img");
let smallImg = selectAll(".small-img");
let MenuItems = getElement("MenuItems");

// Main Code
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

    getElement("loginModal").style.display = "flex";
  }
  getElement("loginModal").style.display = "flex";
}

function closeModal() {
  getElement("loginModal").style.display = "none";
}

function login() {
  getElement("loginModal").style.display = "none";
}

// Image selection
smallImg[0].onclick = function () {
  productImg.src = smallImg[0].src;
};
smallImg[1].onclick = function () {
  productImg.src = smallImg[1].src;
};
smallImg[2].onclick = function () {
  productImg.src = smallImg[2].src;
};
smallImg[3].onclick = function () {
  productImg.src = smallImg[3].src;
};
