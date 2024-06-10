let nome
let email
let senha
let confirmar_senha

let email_login
let senha_login

let btnIrCadastro = document.getElementById("btn-ir-cadastro")
let btnVoltar = document.querySelector(".input-btn.voltar")
let btnCadastrar = document.querySelector(".input-btn.cadastrar")
let containerLogin = document.querySelector(".container-input-login")
let containerCadastro = document.querySelector(".container-input-cadastro")

btnIrCadastro.addEventListener("click", ()=> containerCadastro.classList.toggle("ativo") )
btnIrCadastro.addEventListener("click", ()=> containerLogin.classList.toggle("inativo") )

btnVoltar.addEventListener("click", ()=> containerCadastro.classList.toggle("ativo") )
btnVoltar.addEventListener("click", ()=> containerLogin.classList.toggle("inativo") )

function cadastrar(){
    nome = document.getElementById("nome-cadastro").value 
    email = document.getElementById("email-cadastro").value
    senha = document.getElementById("senha-cadastro").value 
    confirmar_senha = document.getElementById("confirmar-senha-cadastro").value 

    if(nome == "" || email == "" || senha == "" || confirmar_senha == ""){
        alert("Preencha todos os campos de cadastro!")
    } else if(senha != confirmar_senha){
        alert("A senha de confirmação é diferente da senha cadastrada! Por favor, corrija")
    } else{
        alert("Cadastro efetuado com sucesso!")
        containerCadastro.classList.toggle("ativo")
        containerLogin.classList.toggle("inativo")
    }
}

function logar(){
    email_login = document.getElementById("email").value
    senha_login = document.getElementById("senha").value

   if(email_login == "" || senha_login == ""){
    alert("É preciso preencher os campos para logar!")
   } else if (email_login == email && senha_login == senha){
    alert("Login efetuado com sucesso!")
    window.location.href = "ProjetoEducahost/index.html"
   } else {
    alert("Usuário inválido!")
   }
}