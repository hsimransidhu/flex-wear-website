'use strict';

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

 