const section = document.querySelector(".section");
const menuBtn = document.querySelector(".menu-btn");

const toggleScreen = () => {
    section.classList.toggle("show-tarefas");
};
menuBtn.addEventListener("click", toggleScreen);