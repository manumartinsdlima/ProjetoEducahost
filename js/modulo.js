const containerModuloResponsivo = document.querySelector(".modulo-responsivo")

const containerModulo = document.querySelector(".container-modulo")
const containerAtividade = document.querySelector(".container-atividade")

let contadorContainerIndex = 0

function passarEsquerda(){
    contadorContainerIndex = contadorContainerIndex - 1
    if(contadorContainerIndex == -1){
        contadorContainerIndex = 2
    }
    containerModuloResponsivo.style.margin = "0 0 0 -" + contadorContainerIndex * 100 + "%"
}

function passarDireita(){
    contadorContainerIndex = contadorContainerIndex + 1
    if(contadorContainerIndex == 3){
        contadorContainerIndex = 0
    }
    containerModuloResponsivo.style.margin = "0 0 0 -" + contadorContainerIndex * 100 + "%"
}

function abrirContainerAtividade(){
    containerModulo.style.display = "none"
    containerAtividade.style.display = "flex"
}

function fecharContainerAtividade(){
    containerModulo.style.display = "flex"
    containerAtividade.style.display = "none"
}

function irJogo(){
    window.location.href = "jogo.html"
}