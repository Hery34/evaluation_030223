//fonction collapse du menu
document.getElementById("collapse").addEventListener("click", function() {// récupération de l'id Collapse
    var liste_menu =document.getElementById("liste_menu"); //initialisation de la varibale menu
   if (liste_menu.style.display === "none") {// mise en place de la condition qui vérifie quel display est actif pour swifter)
    liste_menu.style.display ="block";
   } else {
    liste_menu.style.display = "none";
   }
});

let menu_apparent = document.getElementsByClassName("menu_top");
let menu_result = document.getElementsByClassName("bloc_menu");
// // fonction apparition de l'image au survol Menu 1

let links = document.getElementsByClassName("liens"); // récupération des liens dans une variable

for (i = 0; i < links.length; i++) {   // initialisation de la boucle pour parcourir la variable
    links[i].addEventListener("mouseover", function(e) { // mise en place de l'eventlistener "mouseover"
        let targetIndex = Array.from(links).indexOf(e.target); // la methode array.from permet de convertir les liens en un tableau JS et la methode indexof de cibler l'index précis
        switch (targetIndex) { // utilisation de la methode switch car nous connaissons le nombre précis de possibilité avec les résultats attendus
            case 0:
                let image = document.getElementById("engrenage"); 
                image.style.display = "block";
                break;
            case 1:
                let image1 = document.getElementById("engrenage1"); 
                image1.style.display = "block";
                break;
            case 2:
                let image2 = document.getElementById("engrenage2"); 
                image2.style.display = "block";
                break;
        }
    });
    links[i].addEventListener("mouseout", function(e) { // reproduction de la précédente methode avec le changement de quelques paramaètres
        let targetIndex = Array.from(links).indexOf(e.target);
        switch (targetIndex) {
            case 0:
                let image = document.getElementById("engrenage");
                image.style.display = "none";
                break;
            case 1:
                let image1 = document.getElementById("engrenage1");
                image1.style.display = "none";
                break;
            case 2:
                let image2 = document.getElementById("engrenage2");
                image2.style.display = "none";
                break;
        }
    });
}


add_data.addEventListener("click", function() {
    let nom = document.getElementById("nom").value ; // initialisation de la variable nom à partir de l'input
    let prenom = document.getElementById("prenom").value ; // initialisation de la variable prénom à partir de l'input
    let tableau = document.getElementById("identite"); // récupération du tableau à remplir
    let ligne = tableau.insertRow(-1); // on ajoute une ligne au tableau à la ligne -1 pour le mettre à la suite du dernier élément rentré
    let colonne1 = ligne.insertCell(0); // insertion de la cellule du prénom 
         colonne1.innerHTML += nom; // imputation de la donnée prénom
    let colonne2 = ligne.insertCell(1); // insertion de la cellule du nom 
         colonne2.innerHTML += prenom; // imputation de la donnée nom

})

//fonction pour changer de style Menu3
style_menu3.addEventListener("change", function() {
    let choix = style_menu3.value; //mise en place de la variable de choix qui sera la base des cases du Switch
    let p = document.querySelector('p'); //création de la variable p qui récupère le paragraphe à syliser
    p.className = "";// initialise les class à nul avant chaque attribution de classe.
    switch (choix) { //methode choisie pour le choix entre les 3 styles
      case "style1":
        p.classList.add("style1");
        break;
      case "style2":
       p.classList.add("style2");
        break;
      case "style3":
      p.classList.add("style3");
        break;
        case "default":
            p.className = "";
            break;
    }
  });
  //fonction pour inverser l'ordre de la liste
  let liste_puces = document.getElementsByClassName("values"); // récupérationn de l'id #value ul
let up = document.getElementById("up"); // récupération du bouton up
let down = document.getElementById("down"); // récupération du bouton down
function inversersion_liste(liste_puces, reverse = false) { // mise en place de la fonction pour inverser les valeurs et initiaisation de la valeur par défaut de reverse à false
    let liste_def = [];
    for (let i = 0; i < liste_puces.length; i++) {
      liste_def.push(liste_puces[i].textContent); // creation du tableau contenant la liste_puces
    }
    let inversion = Array.from(liste_def); //definition de la variable inversion qui sera un tableau 
    if (reverse) {// verification de la valeur de reverse
      inversion.reverse(); // on applique à la variable inversion la methode reverse
    }
    for (let i = 0; i < inversion.length; i++) {
      liste_puces[i].textContent = inversion[i]; // on démarre une boucle pour que remplacec les valeurs à l'index i du tableau liste_puces par les valeurs inversées du tableau inversion
    }
  }
  
  up.addEventListener("click", function () { // application de la fonction invesion_liste 
    inversersion_liste(liste_puces, true); //on applique la valeur pour changer la valeur par défaut false, c'est ce boléeen qui va permettre le toggle sur le bouton
  });
  
  down.addEventListener("click", function () {// idem que la l'appel de la fonction précédente
    inversersion_liste(liste_puces, true);
  });

  // Menu 5 
  // fonction pour récupérer d'abord tous les labels qui ont une option cochée.
  let option_choisie = document.getElementById("check_boite").getElementsByTagName("input"); // récupération de tous les éléments cochés de l'id check_boite et ayant un tagName input
  let selectedOptions = [];  // initialisation du tableau qui contiendra la liste des éléments cochés
  for (let i = 0; i < option_choisie.length; i++) {
    if (option_choisie[i].type === "checkbox" && option_choisie[i].checked === true) { // mise en place d'une boucle qui vérifie les éléments de type checkbox qui sont cochés grace à un boléen
      let optionLabel = option_choisie[i].nextElementSibling; //récupération du label correspondant aux options checkées grace à la methode nextElementSibling 
      selectedOptions.push(optionLabel.textContent);// création du tableau avec les données récupérées
    }
  }
  // console.log(selectedOptions);
 // creation de la div qui contient les éléments séléctionnés
let div_opt = document.getElementById("div_opt"); //Mise en place de la variable div_opt qui appelle le bouton avec l'iddiv_opt
div_opt.addEventListener("change", function() { //création de la fonction qui va se déclencher lorsque l'on va cocher le radio div
  let contenu = selectedOptions.join(", ");  // création de la variable contenu qui sera une concaténation des données selectedOptions séparées par une virgule et un espace via la propriété join
  let new_div = document.createElement("div"); // initialisation de la varibale new_div qui correspond à la création d'une nouvelle div
  new_div.appendChild(document.createTextNode(contenu)); // rattachement de la variable contenu à la variable new_div
  let div_parent = document.getElementById("cloture"); // creation de la variable div_parent qu'on a créé sur le HTML pour avoir un point d'ancrage
  while (div_parent.firstChild) { // pour pouvoir réinitialiser la fonction, on enlève systématiquement les premiers enfants de la div_parent
    div_parent.removeChild(div_parent.firstChild);
  }  
  div_parent.appendChild(new_div);//finalment on rattache new_div à div_parent.
});

// let opt_opt = getElementById("opt_opt");
// opt_opt.addEventListener("change", function () {

// })
