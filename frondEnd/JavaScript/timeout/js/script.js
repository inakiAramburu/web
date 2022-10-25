var inTimeout = false;
var timeout;
window.onload = function () {
    console.log("Window loaded");
    let create = document.getElementById("create");
    create.addEventListener("click", createTimeout);
    let cancel = document.getElementById("cancel");
    cancel.addEventListener("click", cancelTimeout);
}

function createTimeout() {
    if (!inTimeout) {
        inTimeout = true;
        let secs = document.getElementById("numInput").value * 1000;
        timeout = setTimeout(consolear, secs);
        document.getElementById("output").value = "Waiting " + secs + "ms";
    }
}

function consolear() {
    console.log("finish");
    document.getElementById("output").value = "Timeout callback called";
    inTimeout = false;
}

function cancelTimeout() {
    clearTimeout(timeout);
    console.log("Timeout cancelled");
    document.getElementById("output").value = "Timeout cancelled";
    inTimeout = false;
}