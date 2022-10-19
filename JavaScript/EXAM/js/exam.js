
let timeout;
var inTimeout = false;
window.onload = function() {

    console.log("Window loaded");
    let articles = document.getElementsByClassName("subjetArticle");
    let unselect = document.getElementById("unselect");
    let Hide = document.getElementById("Hide");
    let cancel = document.getElementById("cancel");

    for(let Articles of articles) {
        Articles.addEventListener('click', select); 
    }

    

    cancel.addEventListener('click', cancelar);
    

    Hide.addEventListener('click', contador);
    unselect.addEventListener('click', aparecer); 

}

function select(event){

    event.currentTarget.classList.toggle("selected");
}

function ocultar(){
    inTimeout = false;
    let selectedArticles = document.querySelectorAll('.selected');
    console.log("Size: "+selectedArticles.length);
    for(let article of selectedArticles){
        article.classList.add('hidden');
    }

}


function aparecer(){
    cancelar();
    let selectedArticles = document.querySelectorAll('.selected');
    console.log("Size: "+selectedArticles.length);
    for(let article of selectedArticles){
        article.classList.remove('selected');
        article.classList.remove('hidden');
    }
}


function contador(){

    if (!inTimeout) {
        inTimeout = true;
        timeout = setTimeout(ocultar, 5000);
        console.log("Waiting 5s");
    }
}


function cancelar(){
    clearTimeout(timeout);
    console.log("Timeout cancelled");
    inTimeout = false;
}

