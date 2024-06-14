const emojis = ["😊", "😊", "😂", "😂", "❤️", "❤️", "👌", "👌", "😁", "😁", "👍", "👍", "🙌", "🙌", "😎", "😎"]

let emojiEscolhido = emojis.sort(() => (Math.random() > .5) ? 2 : -1)

for(let i = 0; i < emojis.length ; i++){
   let box = document.createElement("div")
    box.className = "box"
    box.innerHTML = emojiEscolhido[i]

    box.onclick = function(){
        this.classList.add("box-aberta")

        setTimeout(function(){
            if(document.querySelectorAll(".box-aberta").length > 1){
                if(document.querySelectorAll(".box-aberta")[0].innerHTML == document.querySelectorAll(".box-aberta")[1].innerHTML){
                    document.querySelectorAll(".box-aberta")[0].classList.add("box-match")
                    document.querySelectorAll(".box-aberta")[1].classList.add("box-match")

                    document.querySelectorAll(".box-aberta")[1].classList.remove("box-aberta")
                    document.querySelectorAll(".box-aberta")[0].classList.remove("box-aberta")

                    if(document.querySelectorAll(".box-match").length == emojis.length){
                        alert("Você venceu!")
                    }
                } else{
                    document.querySelectorAll(".box-aberta")[1].classList.remove("box-aberta")
                    document.querySelectorAll(".box-aberta")[0].classList.remove("box-aberta")
                }
            }
        }, 500)
    }

    document.querySelector(".container-box").appendChild(box)
}


