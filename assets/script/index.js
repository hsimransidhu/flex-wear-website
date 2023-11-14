document.getElementById('login').addEventListener('click', openModal);
function openModal() {
    document.getElementById('loginModal').style.display = 'flex';
}

// Add this function to close the login modal
function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
}
 