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

// Selections
const productDetail = getElement("product-1");
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

// Open detail page
onEvent("click", productDetail, () => {
  window.location.href = "./detail.html";
});
