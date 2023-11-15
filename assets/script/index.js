'use strict';

const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


document.getElementById('login').addEventListener('click', openModal);
function openModal() {
    document.getElementById('loginModal').style.display = 'flex';
}

// Add this function to close the login modal
function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var toggleIcon = document.querySelector('.toggle-password');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.innerHTML = '&#x1F441'; // Eye icon open
    } else {
        passwordInput.type = 'password';
        toggleIcon.innerHTML = '&#x1F441'; // Eye icon closed
    }
}
 