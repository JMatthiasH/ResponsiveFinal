function navFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " respond";
    } else {
        x.className = "navbar";
    }
}