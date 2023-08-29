// Dependiendo de cómo se llame a una función, devuelve cierto tipo de resultado
function suma(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
