const btnMenu = document.getElementById("menu_btn");
const navLinks = document.getElementById("nav_links");
const btnMenuIcon = btnMenu.querySelector("i");

btnMenu.addEventListener("click",(e)=>{
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    btnMenuIcon.setAttribute("class",isOpen?"ri-close-line":"ri-menu-line");
});

navLinks.addEventListener("click",(e)=>{
    navLinks.classList.remove("open");
    btnMenuIcon.setAttribute("class","ri-menu-line");
})

// console.log(navLinks);
// console.log(navLinks.classList);
// console.log(navLinks.classList.toggle("open"));
// console.log(navLinks.classList.contains("open"));
