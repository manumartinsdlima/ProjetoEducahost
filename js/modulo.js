const containerModuloResponsivo = document.querySelector(".modulo-responsivo")

const containerModulo = document.querySelector(".container-modulo")
const containerAtividade = document.querySelector(".container-atividade")

let contadorContainerIndex = 0

window.addEventListener("resize", () => {
    const larguraTela = window.innerWidth

    if (larguraTela > 770){
        contadorContainerIndex = 0
        containerModuloResponsivo.style.margin = "0 0 0 -" + contadorContainerIndex * 100 + "%"
    }
})

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

function irAtividade1(){
    window.location.href = "atividade1.html"
}

function irAtividade2(){
    window.location.href = "atividade2.html"
}

function irAtividade3(){
    window.location.href = "atividade3.html"
}

function irAtividade4(){
    window.location.href = "atividade4.html"
}