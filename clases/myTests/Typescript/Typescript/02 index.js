var Fases;
(function (Fases) {
    Fases[Fases["Primera"] = 0] = "Primera";
    Fases[Fases["Segunda"] = 1] = "Segunda";
    Fases[Fases["Tercera"] = 2] = "Tercera";
})(Fases || (Fases = {}));
console.log(Fases.Primera);
var Numero = null;
var number = null;
var texto = 'Este es un texto';
var str1 = 'Texto x';
var str3 = 'Texto 3';
var str4 = 'Texto 4';
//Variable con tipo desconocido:
var unkValue = 'Desconocido';
//! let str:string = unkValue;   No es correcto
var str2 = unkValue;
var anyValue = "Juan"; //? Cuando declaramos con any, deshabilita tods los chequeso de TS
//! anyValue.method();
//! console.log(anyValue.method());
//! Cuando se declara como any, no hay errores al compilar, pero si al ejecutar
//! Debemos desactivar la declaración any en el config
//? ///////////////// ARRAY ////////////////////////
var tennis = [15, 20, 30];
var tennis2 = [15, 30, 40];
// Array + Any 
var dynamicList = ["Franco", 25, true];
//? ///////////////// TUPLAS ////////////////////////
var tupla = ["Mati", 30];
// En esta declaracion siempre se debe mantener el orden de string y number, y la cantidad de elementos
tupla = ['Franco', 30];
// Array de Tuplas
var tupleArray = [[25, 'Juan']];
tupleArray.push([30, 'Carlos']);
console.log(tupleArray);
var tupleArray2 = [];
tupleArray2.push([32, 'Teo']);
console.log(tupleArray2);
//*npx tsc index.ts         COMPILA EL ARCHIVO TS Y GENERA UNO .JS PARA SU EJECUCIONNPM  
