
// let compteur=2;

// function maFonction()

// {
//     let myVar =456;
//     console.log("myVar:"+myVar);

//     console.log("myVar fonction :"+myVar);
// }



// if(compteur>1)

// {
// let myVar2="Wazaa!";
// console.log("myVar2:"+myVar2);
// }

// console.log("myVar fin:"+myVar);


/*la methode write ()*/
//let age=35;
//document.write(age);
//document.write("Votre age est"+ age);
//document.write("<b>"+"Votre age est"+"</b>" +age);
//document.write("<b>"+"Votre age est"+"</b>"+age);


/*la Methode Alert()
myVar="Bonjour";
window.alert(myVar);
window.alert("chaine de caractères");
windows.alert(myVar+"chaine de caractères");
*/


/*Methode prompt()*/
/*let reponse1=window.prompt("Saisissez votre nom");
let reponse2=window.prompt("Saisissez votre prénom");
let sexe;



/*la methode confirme()
if(window.confirm("Etes-vous un homme?")==true)
{
    sexe="Mr";
}
else{
    sexe= "Mme";
}
alert("Bonjour "+ sexe + " " + reponse2 + " " + reponse1 + ". Bienvenue sur notre site web!");
*/



/* les operateurs de calcul Jscript

let x=11;
let addition= x+3;//14
console.log(x+3);

let x=11;
let difference=x-3;//11
console.log(x-3);


let x=11;
let product=x*2;//22
console.log(x*2);

let x=11;
let quotient=x/2;//5.5
console.log(x/2);


let x=11;
let remainder=5%2;//1
console.log(x%2);
*/
//demander un nombre  à l'utilisateur
/*let nombre=prompt("Veuillez entrer un nombre:");
//Verifier si le nombre est pair ou impair
if(nombre %2===0)
{
    console.log("nombre pair");
}else{
    console.log("nombre impair");
}
    


//Demande l'année de naissance à l'utilisateur
let anneeNaissance=prompt("Veuillez entrer votre de naissance:");

//Convertir l'entrée en entier
anneeNaissance=Number(anneeNaissance);

//Obtenir l'année actuelle
let anneeActuelle=newDate().getFullYear();
                                                                                                          
// Verifier si l'entrer est valide
if(isNaN(anneeNaissance)||
anneeNaissance<1900||
anneeNaissance> new Date().getFullYear())
{
    alert("Veuillez entrer une année de naissance valide");
}

 //Obtenir l'année actuelle

let age=anneeCourante-anneeNaissance; //Calcul l'âge

//Afficher l'âge de l'utilisateur
alert("Vous avez " +age + "ans.");

if(age>=18){
    console.log("Vous êtes majeur.");
}else{
    console.log(" Vous êtes mineur.");
}
    */
/*
//Tableau pour stocker les prénoms saisis
let prenoms = [];

function saisirPrenoms() {
    let prenom = document.getElementById("prenom").value;
    if (prenom !== "") {
        prenoms.push(prenom);
        console.log(`Prénom ajouté : ${prenom}`);
        // Effacer le champ de texte pour la saisie suivante
        document.getElementById("prenom").value = "";
    } else {
        // Si le champ est vide, afficher le nombre de prénoms et les prénoms saisis
        console.log(`Nombre de prénoms saisis : ${prenoms.length}`);
        console.log("Prénoms saisis :", prenoms);

        // Optionnel : effacer le tableau pour une nouvelle saisie
        prenoms = [];
    }
}
*/

/*
        // Fonction pour saisir des prénoms jusqu'à ce que l'utilisateur laisse le champ vide
        function saisirPrenoms() {
            let prenoms = [];
            let prenom;

            // Boucle pour demander des prénoms à l'utilisateur
            while (true) {
                prenom = prompt("Entrez un prénom (laisser vide pour arrêter la saisie) :");

                // Si le prénom est vide, sortir de la boucle
                if (prenom === "") {
                    break;
                }

                // Ajouter le prénom au tableau des prénoms
                prenoms.push(prenom);
            }

            // Afficher le nombre de prénoms et les prénoms saisis dans la console
            console.log(`Nombre de prénoms saisis : ${prenoms.length}`);
            console.log("Prénoms saisis :", prenoms);
        }
*/

/*
        // Fonction pour afficher les nombres inférieurs à N
        function afficherNombresInferieurs() {
            // Demande à l'utilisateur de saisir la valeur de N
            let N = parseInt(prompt("Entrez un nombre N : "), 10);
            
            // Vérification si la saisie est un nombre valide
            if (isNaN(N)) {
                console.log("Veuillez entrer un nombre valide.");
                return;
            }
            
            console.log(`Les nombres inférieurs à ${N} sont :`);
            
            // Boucle pour afficher tous les nombres inférieurs à N
            for (let i = 0; i < N; i++) {
                console.log(i);
            }
        }
 
*/

        // Fonction pour calculer la somme des entiers entre n1 et n2
        function calculerSommeIntervalle() {
            // Demander à l'utilisateur de saisir les valeurs de n1 et n2
            let n1 = parseInt(prompt("Entrez le premier nombre (n1) : "), 10);
            let n2 = parseInt(prompt("Entrez le deuxième nombre (n2) : "), 10);

            // Vérification si les saisies sont des nombres valides
            if (isNaN(n1) && isNaN(n2)) {
                console.log("Veuillez entrer des nombres valides.");
                return;
            }

            // Initialisation de la somme
            let somme = 0;

            // Si n1 est supérieur à n2, échanger les valeurs pour s'assurer que n1 est inférieur ou égal à n2
            if (n1 > n2) {
                let temp = n1;
                n1 = n2;
                n2 = temp;
            }

            // Boucle pour calculer la somme des entiers de n1 à n2
            for (let i = n1; i <= n2; i++) {
                somme += i;
            }

            // Afficher la somme dans la console
            console.log(`La somme des entiers de ${n1} à ${n2} est : ${somme}`);
        }
