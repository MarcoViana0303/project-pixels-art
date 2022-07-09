let copiarBlack = window.document.querySelector(".black");
let copiarCyan = window.document.querySelector(".cyan");
let copiarPurple = window.document.querySelector(".purple");
let copiarGreen = window.document.querySelector(".green");
const botaoLimpar = document.getElementById("clear-board");
const pixels = document.getElementsByClassName("pixel");
const divMae = document.querySelector("#pixel-board")
const palette = document.getElementsByClassName("color")

let cor = undefined;

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
   
   
    for (let index = 0; index < 25; index += 1) {
        const divFilha = document.createElement("div");
        divFilha.className ="pixel";
        divMae.appendChild(divFilha);
        
    }
}
adicionarDiv();

    // Pinta algum pixel
    
    divMae.addEventListener("click", function pintarPixel(event) {
        event.target.style.backgroundColor = cor;
    });
 
    // Limpa as cores do pixel e retorna ao branco
  
    function limparCor() {
        
          
        for (let index = 0; index < pixels.length; index += 1) {
            pixels[index].style.backgroundColor = "white";
        }
    }
    botaoLimpar.addEventListener("click", limparCor);



// Pega a cor de algum background do palette
    function pegarCor() {
        
        for (let index = 0; index < palette.length; index+= 1) {
            palette[index].addEventListener("click", function () {
                cor = window.getComputedStyle(palette[index]).backgroundColor;
               
            })
              }
            }    
pegarCor();

// Cor inicial
window.onload = function () {
    cor = window.getComputedStyle(palette[0]).backgroundColor 
}

