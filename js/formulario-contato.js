function cadastrarFormulario(){
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let mensagem = document.getElementById("mensagem").value

    if(nome == "" || email == "" || mensagem == ""){
        alert("Os campos não podem estar vazios para poder enviar o formulário!")
    } else{
        alert("Formulário enviado com sucesso! Nome: " + nome + ", email: " + email + ", mensagem: " + mensagem)
    }
}