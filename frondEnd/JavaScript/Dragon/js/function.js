function openTab(evt, Name) {
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent
    tabcontent = document.getElementsByClassName("tabcontent");
    // Hide all tab content
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(Name).style.display = "block";
    evt.currentTarget.className += " active";
}

function seeAll(evt){

     // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    document.getElementById("DragonBall").style.display = "block";
    document.getElementById("DragonBallZ").style.display = "block";
    document.getElementById("DragonBallGT").style.display = "block";
    evt.currentTarget.className += " active";
}
    