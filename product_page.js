//Search Bar
let selectedItems = [];
document.getElementById('search-bar').addEventListener('input', function() {
    const searchText = this.value.toLowerCase();
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        const itemName = item.querySelector('h3').textContent.toLowerCase();
        if (itemName.includes(searchText)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});
//---------------------------------------------------
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.querySelector('.hamburger');
    if (sidebar.style.width === '250px') {
        closeSidebar();
    } else {
        openSidebar();
    }
}

function openSidebar() {
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.querySelector('.hamburger');
    sidebar.style.width = '250px';
    hamburger.innerHTML = '&times;'; // Cross icon
    document.addEventListener('click', handleClickOutside);
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.querySelector('.hamburger');
    sidebar.style.width = '0';
    hamburger.innerHTML = '&#9776;'; // Hamburger icon
    document.removeEventListener('click', handleClickOutside);
}

function handleClickOutside(event) {
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.querySelector('.hamburger');
    if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
        closeSidebar();
    }
}
// -------------Loader----------------------
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const preloader_txt = document.querySelector('.preloader__msg');
        preloader_txt.innerHTML="This is taking long. Something’s wrong.";
    },30000);
});