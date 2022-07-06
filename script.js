let copiarBlack = window.document.querySelector(".black");
let copiarCyan = window.document.querySelector(".cyan");
let copiarPurple = window.document.querySelector(".purple");
let copiarGreen = window.document.querySelector(".green");
const botaoLimpar = document.getElementById("clear-board");
const pixels = document.getElementsByClassName("pixel");

// Caso selecione a cor preta
copiarBlack.addEventListener("click", function () {
    copiarCyan.classList.remove("selected");
    copiarPurple.classList.remove("selected");
    copiarGreen.classList.remove("selected");
    copiarBlack.classList.add("selected");
})

// Caso selecione a cor cyan
copiarCyan.addEventListener("click", function () {
    copiarBlack.classList.remove("selected");
    copiarPurple.classList.remove("selected");
    copiarGreen.classList.remove("selected");
    copiarCyan.classList.add("selected");
})

// Caso selecione a cor purple
copiarPurple.addEventListener("click", function () {
    copiarCyan.classList.remove("selected");
    copiarBlack.classList.remove("selected");
    copiarGreen.classList.remove("selected");
    copiarPurple.classList.add("selected");
})

// Caso selecione a cor green
copiarGreen.addEventListener("click", function () {
    copiarCyan.classList.remove("selected");
    copiarPurple.classList.remove("selected");
    copiarBlack.classList.remove("selected");
    copiarGreen.classList.add("selected");
})

// Adicionando 25 pixel à div
function adicionarDiv() {
   
   
    for (let index = 1; index < 25; index += 1) {
        const divFilha = document.createElement("div");
        divFilha.className ="pixel";
       const divMae = document.querySelector("#pixel-board")
        divMae.appendChild(divFilha);
        
    }
}
adicionarDiv();

    // Deixa a cor do click inicialmente preta
    

 
    // Limpa as cores do pixel e retorna ao branco
    function limparCor() {
        
          
        for (let index = 0; index < pixels.length; index += 1) {
            pixels[i].style.backgroundColor = "white";
        }
    }
      





