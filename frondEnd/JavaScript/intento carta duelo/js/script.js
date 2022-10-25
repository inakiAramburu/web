window.onload = function() {
    let tops = document.getElementsByClassName("top");
    for(let top of tops){
        top.classList.add("colorBlancoTransparente");
    }
    let captions = document.getElementsByTagName("figcaption");
    for(let cap of captions){
        cap.classList.add("colorBlancoTransparente");
    }
}