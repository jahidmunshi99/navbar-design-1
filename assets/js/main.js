

const dropDownToggle1 = document.querySelector("#dropdown1");
const dropDownToggle2 = document.querySelector("#dropdown2");
const dropDownMenu = document.querySelector(".dorpdown-menu")
const searchField = document.querySelector(".search-field");
const searchToggle = document.querySelector("#search-smalldevice");


dropDownToggle1.addEventListener("click", ()=>{
    dropDownToggle1.classList.toggle("active");
})

dropDownToggle2.addEventListener("click", ()=>{
    dropDownToggle2.classList.toggle("active");
})

searchToggle.addEventListener("click", ()=>{
    searchField.classList.toggle("active");
})