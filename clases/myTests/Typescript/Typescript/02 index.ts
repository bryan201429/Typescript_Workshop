enum Fases{
    Primera,
    Segunda,
    Tercera
}

console.log(Fases.Primera)

let Numero:null=null
let number:null=null;

let texto:string='Este es un texto'
let str1:string ='Texto x'
let str3:string ='Texto 3'
let str4:string ='Texto 4'

//Variable con tipo desconocido:

let unkValue:unknown ='Desconocido'
//! let str:string = unkValue;   No es correcto
let str2:string=unkValue as string;


let anyValue:any = "Juan"           //? Cuando declaramos con any, deshabilita tods los chequeso de TS


//! anyValue.method();
//! console.log(anyValue.method());
//! Cuando se declara como any, no hay errores al compilar, pero si al ejecutar
//! Debemos desactivar la declaración any en el config

//*npx tsc index.ts         COMPILA EL ARCHIVO TS Y GENERA UNO .JS PARA SU EJECUCIONNPM  

