function demande(){
    x=prompt("Aimez vous les voiture ?", "réponse")
    return x
}

let monPopup = window.open("securite.html", "popup_perso", "width=120, height=150, left=300, top=200");

function ouvrirMonPopup() {
    monPopup = window.open("securite.html", "popup_perso", "width=100%");
}

function fermerMonPopup() {
    if (monPopup === null) {
        console.log("Le popup n'existe pas. En ouvrir un nouveau par clic !");
    } else {
        console.log("Le popup existe : on peut le fermer");
        monPopup.close();
    }
}
