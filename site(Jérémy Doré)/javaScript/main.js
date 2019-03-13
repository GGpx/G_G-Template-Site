// Fonction pour afficher le menu quand on scroll
window.onscroll = function () { scroll() };

function scroll() {
    if (document.documentElement.scrollTop > 605) {
        document.getElementById('header_menu').className = "nav";
    } else {
        document.getElementById('header_menu').className = "";
    }
}


//   Fonction pour les liens cliquables qui sont surligner au survoles de ceux-ci
var survole = document.getElementsByClassName("lien_header")
survole.addEventListener("focusin", myFocusFunction);
survole.addEventListener("focusout", myBlurFunction);

function myFocusFunction() {
    document.getElementsByClassName("lien_header").className = "lien_headerJS";
}

function myBlurFunction() {
    document.getElementsByClassName("lien_header").className = "";
}

