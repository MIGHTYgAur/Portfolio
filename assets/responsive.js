const menuBar=document.querySelector("#menu-btn");
const ul=document.querySelector("nav ul");
const nav=document.querySelector("nav");


menuBar.addEventListener("click",() => {
   
    ul.classList.toggle("show");
});
//clode menu when a link is clicked
const navLink = document.querySelectorAll(".nav-element");

navLink.forEach((link) =>
 
    link.addEventListener("click", () => {
    // console.log("hi");
    ul.classList.remove("show");
  })
);

