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
const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");
const productDetail = getElement('product-1');

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

document.getElementById("login").addEventListener("click", openModal);
function openModal() {
  document.getElementById("loginModal").style.display = "flex";
}

// Add this function to close the login modal
function closeModal() {
  document.getElementById("loginModal").style.display = "none";
}

function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var toggleIcon = document.querySelector(".toggle-password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.innerHTML = "&#x1F441"; // Eye icon open
  } else {
    passwordInput.type = "password";
    toggleIcon.innerHTML = "&#x1F441"; // Eye icon closed
  }
}

// Open detail page
onEvent('click', productDetail, () => {
    window.location.href = './detail.html';
})