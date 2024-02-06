const section = document.querySelector(".section");
const menuBtn = document.querySelector(".menu-btn");

const toggleScreen = () => {
    section.classList.toggle("mostrar-tarefas");
};
menuBtn.addEventListener("click", toggleScreen);