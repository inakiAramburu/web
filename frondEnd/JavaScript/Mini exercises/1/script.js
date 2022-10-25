

window.onload = function() {
    console.log("Window loaded");
    let myButtonMultiply = document.getElementById("Multiply");
    myButtonMultiply.addEventListener("click", Multiply);
    
    let myButtonDivide = document.getElementById("Divide");
    myButtonDivide.addEventListener("click", Divide);
}



function Multiply(){

    let dos = document.getElementById("dos").value;
    let uno = document.getElementById("uno").value;

    let resultado = dos * uno;

    let string = document.getElementById("resultado");


    string.innerHTML ="Resultado: "+ resultado;
}

function Divide(){

    let dos = document.getElementById("dos").value;
    let uno = document.getElementById("uno").value;

    let resultado =  uno / dos;

    let string = document.getElementById("resultado");



    string.innerHTML ="Resultado: "+ resultado;
}