const logo = document.querySelector(".logo-menu-responsivo")
const menu = document.querySelector(".menu")

logo.addEventListener("click", () => (
    btnMenuIdiomaFechar.style.display = "none",
    btnMenuIdiomaAbrir.style.display = "flex",
    menuIdioma.classList.remove("ativo"),
    menu.classList.toggle("ativo")
))

logo.addEventListener("click", () => logo.classList.toggle("fechar"))

document.addEventListener("scroll", () => {
    menu.classList.remove("ativo"),
    logo.classList.remove("fechar")
})

