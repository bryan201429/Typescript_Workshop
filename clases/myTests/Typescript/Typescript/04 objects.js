//? //////// Definiendo el objeto //////////////////
var Yo = {
    nombre: 'bryan',
    apellido: 'ct',
    edad: 25,
    hobbies: []
};
var Franco = {
    nombre: 'Franco',
    apellido: 'Guevara',
    edad: 15,
    activo: true,
    saluda: function (a) { console.log("Hola"); },
    hobbies: [{ nombre: 'lectura' }]
};
console.log(Franco.hobbies[0].nombre);
Franco.saluda('a');
