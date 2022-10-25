
window.onload = function() {
    console.log("Window loaded");
    let myButtonUrl = document.getElementById("ButtonUrl");
    myButtonUrl.addEventListener("click", URLShow);

}

function URLShow(){


    alert(window.location.href);
}