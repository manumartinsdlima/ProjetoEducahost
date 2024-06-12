const logoMenuIdioma = document.querySelector(".logo-menu-idioma")
const menuIdioma = document.querySelector(".menu-idioma")
const logoMenu = document.querySelector(".logo-menu-responsivo")


function abrirMenuIdioma(){
    logoMenuIdioma.style.display = "none"
    menuIdioma.style.display = "flex"
}

function fecharMenuIdioma(){
    menuIdioma.style.display = "none"
    logoMenuIdioma.style.display = "flex"
}



