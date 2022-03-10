const ham = document.querySelector(".hamburgur");
const close = document.querySelector(".close");
const sideBar = document.querySelector(".sidebar");

ham.onclick = function() {
    sideBar.classList.remove("active")
}
close.onclick = function() {
    sideBar.classList.add("active")
}
