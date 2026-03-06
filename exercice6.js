let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;
let defaut = "valeur par défaut";

console.log("Partie A");
console.log("nom ?? valeur par défaut ->", nom ?? defaut);
console.log("age ?? valeur par défaut ->", age ?? defaut);
console.log("ville ?? valeur par défaut ->", ville ?? defaut);
console.log("score ?? valeur par défaut ->", score ?? defaut);
console.log("actif ?? valeur par défaut ->", actif ?? defaut);
console.log("\nPartie B");
console.log("nom || valeur par défaut ->", nom || defaut);
console.log("age || valeur par défaut ->", age || defaut);
console.log("ville || valeur par défaut ->", ville || defaut);
console.log("score || valeur par défautt ->", score || defaut);
console.log("actif || valeur par défaut ->", actif || defaut);

console.log("\nPartie C");
if ((nom ?? defaut) === (nom || defaut))
    console.log("nom : ?? et || -> même résultat");
else
    console.log("nom : ?? et || -> résultat différent");

if ((age ?? defaut) === (age || defaut))
    console.log("age : ?? et || -> même résultat");
else
    console.log("age : ?? et || -> résultat différent");

if ((ville ?? defaut) === (ville || defaut))
    console.log("ville : ?? et || -> même résultat");
else
    console.log("ville : ?? et || -> résultat différent");

if ((score ?? defaut) === (score || defaut))
    console.log("score : ?? et || -> même résultat");
else
    console.log("score : ?? et || -> résultat différent");

if ((actif ?? defaut) === (actif || defaut))
    console.log("actif : ?? et || -> même résultat");
else
    console.log("actif : ?? et || -> résultat différent");