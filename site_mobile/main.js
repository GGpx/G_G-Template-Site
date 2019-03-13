// Fonction pour afficher le menu quand on scroll
window.onscroll = function () {
    scroll()
};

function scroll() {
    if (document.documentElement.scrollTop > 820) {
        // POUR LE MENU HEADER
        document.getElementById('header_menu').className = "header";

        // POUR LE TITRE DU HEADER
        document.getElementById('titre_header').style.color = "rgb(22, 22, 22)";

        // POUR LES LIENS SUR LE HEADER
        var tab = document.getElementsByClassName('liens_header');
        for (i = 0; i < tab.length; i++) {
            tab[i].style.color = "rgb(22, 22, 22)";
            tab[0].style.textDecoration = "underline"
        }

    } else {
        // POUR LE MENU HEADER
        document.getElementById('titre_header').style.color = "";

        // POUR LE TITRE DU HEADER
        document.getElementById('header_menu').className = "";

        // POUR LES LIENS SUR LE HEADER
        var tab = document.getElementsByClassName('liens_header');
        for (i = 0; i < tab.length; i++) {
            tab[i].style.color = "white";
            tab[0].style.textDecoration = "none"
    }
}
}


// FONCTION POUR LE MENU BURGER

function menu() {
    var monmenu = document.getElementById('nav_burger');
    if (monmenu.style.visibility == "initial") {
        monmenu.style.visibility = "hidden";
    } else {
        monmenu.style.visibility = "initial";
    }
}
