const logo = document.querySelector(".logo-menu-responsivo")

const menu = document.querySelector(".menu")

logo.addEventListener("click", () =>
    menu.classList.toggle("ativo"))

logo.addEventListener("click", () => logo.classList.toggle("fechar"))