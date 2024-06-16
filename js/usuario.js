const containerUsuario = document.querySelector(".container-usuario")
const containerPerfil = document.querySelector(".container-perfil")
const containerDados = document.querySelector(".container-informacao")
const containerProgresso = document.querySelector(".container-progresso")

const tituloInformativo = document.querySelector(".titulo-informativo")
const btnVoltarUsuario = document.querySelector(".btn-voltar-usuario")
const btnModulo = document.querySelectorAll(".modulo")
const iconeAbrir = document.querySelector("#icone-abrir")
const iconeFechar = document.querySelector("#icone-fechar")

const containerAtividades = document.querySelectorAll(".container-atividade")

let larguraTela = window.innerWidth

window.addEventListener("resize", () => {
    larguraTela = window.innerWidth

    if (larguraTela > 500){
        containerProgresso.style.display = "none"
        containerPerfil.style.display = "flex"
        containerDados.style.display = "flex"
    } else {
        containerPerfil.style.display = "flex"
        containerDados.style.display = "none"
        containerProgresso.style.display = "none"
    }
})

function mostrarContainerDados(){
    if (larguraTela < 500){
        containerPerfil.style.display = "none"
        containerProgresso.style.display = "none"
        containerDados.style.display = "flex"
        containerDados.style.width = "100%"
    } else {
        containerProgresso.style.display = "none"
        containerDados.style.display = "flex"
    }
}

function mostrarContainerProgresso(){
    if (larguraTela < 500){
        containerPerfil.style.display = "none"
        containerDados.style.display = "none"
        containerProgresso.style.display = "flex"
        containerProgresso.style.width = "100%"
    } else {
        containerDados.style.display = "none"
        containerProgresso.style.display = "flex"
    }
}

function voltarUsuario(){
    containerDados.style.display = "none"
    containerProgresso.style.display = "none"
    containerPerfil.style.display = "flex"
}

function abrirModulo(){
    for(let i = 0; i < btnModulo.length; i++){
        btnModulo[i].addEventListener("click", () => {
            containerAtividades[i].classList.toggle("aberto")
        })
    }
}

abrirModulo()


