function cadastrarFormulario(){
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let mensagem = document.getElementById("mensagem").value
    
    console.log(nome, email, mensagem)

    if(nome == "" || email == "" || mensagem == ""){
        alert("Os campos não podem estar vazios para poder enviar o formulário!")
    }
}