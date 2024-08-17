const hamburger =document.querySelector(".hamburger");
const navMenu =document.querySelector(".nav_menu_list");


hamburger.addEventListener("click",() =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})