const questoes = [
    {
        questao: "Qual é o maior animal do mundo?",
        alternativa: [
            {
                enunciado: "Jaguatirica",
                correto: false
            },
            {
                enunciado: "Elefante",
                correto: false
            },
            {
                enunciado: "Baleia Azul",
                correto: true
            },
            {
                enunciado: "Formiga",
                correto: false
            }
        ]
    },
    {
        questao: "Qual é o menor mamífero do mundo?",
        alternativa: [
            {
                enunciado: "Musaranho-pigmeu",
                correto: true
            },
            {
                enunciado: "Formiga",
                correto: false
            },
            {
                enunciado: "Cavalo-marinho",
                correto: false
            },
            {
                enunciado: "Vírus",
                correto: false
            }
        ]
    },
    {
        questao: "Qual é o mais populoso mamífero do mundo?",
        alternativa: [
            {
                enunciado: "Porco",
                correto: false
            },
            {
                enunciado: "Ovelha",
                correto: false
            },
            {
                enunciado: "Vaca",
                correto: false
            },
            {
                enunciado: "Ser humano",
                correto: true
            }
        ]
    }
]

const questaoEnunciado = document.getElementById("questao")
const containerAlternativa = document.getElementById("container-alternativa")
const btnProximaQuestao = document.getElementById("btn-proxima-questao")

let questaoIndex = 0
let pontuacao = 0

function comecarQuestionario() {
    questaoIndex = 0
    pontuacao = 0

    btnProximaQuestao.innerHTML = "Próximo"
    const iconeBtnProximo = document.createElement("i")
    iconeBtnProximo.classList.add("fa-solid")
    iconeBtnProximo.classList.add("fa-arrow-right")
    btnProximaQuestao.appendChild(iconeBtnProximo)

    mostrarQuestionario()
}

function mostrarQuestionario() {
    resetarQuestionario()

    let questaoAtual = questoes[questaoIndex]
    let numeroQuestao = questaoIndex + 1

    questaoEnunciado.innerHTML = numeroQuestao + ". " + questaoAtual.questao

    questaoAtual.alternativa.forEach(alternativa => {

        const btnAlternativa = document.createElement("button")

        btnAlternativa.innerHTML = alternativa.enunciado
        btnAlternativa.classList.add("btn-alternativa")
        containerAlternativa.appendChild(btnAlternativa)

        if (alternativa.correto) {
            btnAlternativa.dataset.correto = alternativa.correto
        }

        btnAlternativa.addEventListener("click", selecionarResposta)
    })
}

function resetarQuestionario() {
    btnProximaQuestao.style.display = "none"
    while (containerAlternativa.firstChild) {
        containerAlternativa.removeChild(containerAlternativa.firstChild)
    }
}

function selecionarResposta(e) {
    const alternativaSelecionada = e.target
    const corretoVerdadeiro = alternativaSelecionada.dataset.correto === "true"

    if (corretoVerdadeiro) {
        alternativaSelecionada.classList.add("correto")
        pontuacao++
    } else {
        alternativaSelecionada.classList.add("incorreto")
    }

    Array.from(containerAlternativa.children).forEach(button => {
        if (button.dataset.correto === "true") {
            button.classList.add("correto")
        }

        button.disabled = "true"
    })

    btnProximaQuestao.style.display = "flex"
}


function mostrarPontuacao() {
    resetarQuestionario()

    questaoEnunciado.innerHTML = 'Você pontuou ' + pontuacao + ' questões de ' + questoes.length + ' questões!'
    questaoEnunciado.style.fontSize = "20px"

    btnProximaQuestao.innerHTML = "Jogar novamente"
    btnProximaQuestao.style.display = "flex"
}

function btnProximaQuestaoFuncao() {
    questaoIndex++
    if (questaoIndex < questoes.length) {
        mostrarQuestionario()
    } else {
        mostrarPontuacao()
    }
}

btnProximaQuestao.addEventListener("click", () => {
    if (questaoIndex < questoes.length) {
        btnProximaQuestaoFuncao()
    } else {
        comecarQuestionario()
    }
})

comecarQuestionario()


