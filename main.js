var trenutna = document.getElementById("trenutna");
var ostale = document.getElementsByClassName("ostale");
    for (var i = 0; i < ostale.length; i++) {
        ostale[i].addEventListener("click", prikazi);
        
    }
    function prikazi(){
        var sl = this.getAttribute("src");
        trenutna.setAttribute("src", sl);
    }