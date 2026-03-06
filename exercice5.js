let nombres = [0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0]
for (let i = 0; i < nombres.length; i++) {
    let valeur = nombres[i];
    if (Number.isNaN(valeur)) {
        console.log(valeur + " -> INVALIDE");
    }
    else if (valeur === Infinity || valeur === -Infinity) {
        console.log(valeur + " -> INFINI");
    }
    else if (valeur === 0 && 1 / valeur === -Infinity) {
        console.log("0 -> ZERO NEGATIF");
    }
    else if (Number.isInteger(valeur) && Math.abs(valeur) <= Number.MAX_SAFE_INTEGER) {
        console.log(valeur + " -> ENTIER SUR");
    }
    else if (Number.isInteger(valeur) && Math.abs(valeur) > Number.MAX_SAFE_INTEGER) {
        console.log(valeur + " -> ENTIER HORS LIMITES");
    }
    else {
        console.log(valeur + " -> DECIMAL");
    }
}
