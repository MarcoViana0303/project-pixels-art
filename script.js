function adicionarDiv() {
   
   
    for (let index = 1; index < 25; index += 1) {
        const divFilha = document.createElement("div");
        divFilha.className ="pixel";
       const divMae = document.querySelector("#pixel-board")
        divMae.appendChild(divFilha);
        
    }
}
adicionarDiv();






