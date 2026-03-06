let nom = "  Fadma ";
let age = "-21";
let email = "f.elyassini7895@uca";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

console.log("===== RAPPORT UTILISATEUR =====");

nom = nom.trim();
if (nom === "") nom = "Inconnu"
console.log('nom : "' + nom + '" (corrigé : espaces supprimés)');

let ageNum = parseInt(age);
if (Number.isNaN(ageNum) || ageNum <= 0) {
    console.log("age : invalide");
} else {
    console.log("age :", ageNum, "(valide)");
}

let positionAt = email.indexOf("@");
let positionPoint = email.indexOf(".", positionAt);

if (positionAt !== -1 && positionPoint !== -1) {
    console.log('email : "' + email + '" (valide)');
} else {
    console.log('email : "' + email + '" (invalide : pas de point après @)');
}

let score = parseInt(scoreJeu);
if (Number.isNaN(score)) score = 0
console.log("scoreJeu :", score, '(extrait depuis "' + scoreJeu + '")');

let admin = estAdmin === "true";
console.log("estAdmin :", admin, '(conversion manuelle)');

let derniere = derniereConnexion ?? "Jamais connecté";
console.log('derniereConnexion : "' + derniere + '"');

let nb = Number(nombreConnexions);

if (nb === 0) {
    console.log('nombreConnexions : "Aucune connexion"');
} else {
    console.log("nombreConnexions :", nb);
}

console.log("================================")
