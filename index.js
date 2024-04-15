window.onload = function() {                     //for website loading//
  
    setTimeout(function() {
        document.getElementById('black-screen').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 2000); 
  };
let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active'); // Remove 'active' class from cart items when menu button is clicked
    console.log("menu-clicked");
}

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active'); // Remove 'active' class from cart items when search button is clicked
}

// document.querySelector('#cart-btn').onclick = () => {
//     cartItem.classList.toggle('active');
//     navbar.classList.remove('active');
//     searchForm.classList.remove('active');
// }

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active'); // Remove 'active' class from cart items when window is scrolled
}
