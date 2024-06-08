function logar(){
   let email = document.getElementById("email").value 
   let senha = document.getElementById("senha").value 

   if(email == "" || senha == ""){
    alert("É preciso preencher os campos para logar!")
   } else {
    alert("Login efetuado com sucesso!")
   }
}