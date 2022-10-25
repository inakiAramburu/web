let punto=false;
let berdin=false;
window.onload = function() {
    

    console.log("Window loaded");
    let asideImgs = document.getElementsByClassName("botones");

    let display =  document.getElementById("display");
    let resultado =document.getElementById("resultado");

    for(let asideImg of asideImgs) {
        asideImg.addEventListener('click', updateDisplay); //
    }
    

}

function updateDisplay(event){
	console.log(event.target.innerHTML);

    let pulsado=event.target.innerHTML;

    if(berdin){
        display.innerHTML="";
        resultado.innerHTML="";
        berdin=false;
    }
    
    if(chectNumer(pulsado)){
        if(chect0()){
            display.innerHTML = pulsado;
        }else{
            display.innerHTML = display.innerHTML + pulsado;
        }
    }else if(pulsado=="c"){
        display.innerHTML="0";
        resultado.innerHTML="0";
        punto=false;
    }else if(pulsado=="." && !punto){
        if(!chect0()){
            punto = true;
            display.innerHTML = display.innerHTML + pulsado;
            console.log();
        }
    }else if(pulsado=="DEL"){
        
        if(!chect0()){
            display.innerHTML = display.innerHTML.slice(0,-1);
            if(display.innerHTML==""){
                display.innerHTML="0";
            }
        }
    }else if (pulsado=="="){
        display.innerHTML=eval(display.innerHTML);
        berdin=true;
    }else if (pulsado=="+" || pulsado=="-" || pulsado=="*" || pulsado=="/"){
        if(!chect0()){
            display.innerHTML = display.innerHTML + pulsado;
            punto=false;
        }
    }
    
    resultado.innerHTML=eval(display.innerHTML);
    
}

function chect0(){
    if(display.innerHTML=="0"){
        return true;
    }else{
        return false;
    }
}

function chectNumer(numer){
    
    if(numer=="0" || numer=="1" || numer=="2" || numer=="3" || numer=="4" || numer=="5" || numer=="6" || numer=="7" || numer=="8" || numer=="9"){
        return true;
    }else{
        return false;
    }




}