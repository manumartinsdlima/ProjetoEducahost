const logoMenuIdioma = document.querySelector(".logo-menu-idioma")
const btnMenuIdiomaAbrir = document.querySelector(".btn-menu-idioma.abrir")
const btnMenuIdiomaFechar = document.querySelector(".btn-menu-idioma.fechar")
const menuIdioma = document.querySelector(".menu-idioma")

let posicaoLogoMenu = logoMenuIdioma.getBoundingClientRect()

window.addEventListener("resize", () => {
    menuIdioma.style.top = posicaoLogoMenu.top
})

function abrirMenuIdioma(){
    btnMenuIdiomaAbrir.style.display = "none"
    btnMenuIdiomaFechar.style.display = "flex"
    menuIdioma.classList.add("ativo")
}

function fecharMenuIdioma(){
    btnMenuIdiomaFechar.style.display = "none"
    btnMenuIdiomaAbrir.style.display = "flex"
    menuIdioma.classList.remove("ativo")
}



