//            a:type , b:type  :return type
function suma(a, b, c) {
    return a + b;
}
function consologear() {
    console.log('algo');
    //! No se puede poner return porque es un tipo void, no tiene retorno!
    //*Usado en React para setear un estado
}
function throwError(msg) {
    throw new Error(msg);
    console.log('un valor'); //*No se va a ejecutar nunca
}
//En este momento el return le transfiere el tipado a la variable en la que se define:
var resultado = suma(2, 2);
function sumaNarrowing(a, b, c) {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;
    if (typeof a === 'string' && typeof b === 'string')
        return a + b;
}
var resultado2 = sumaNarrowing(2, 2);
function sumaNarrowingtoNumber(a, b) {
    if (typeof (a) === 'string')
        a = parseInt(a);
    if (typeof (b) === 'string')
        b = parseInt(b);
    return a + b;
}
console.log(sumaNarrowingtoNumber('2', 3));
