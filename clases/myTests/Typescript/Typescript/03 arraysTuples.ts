
//? ///////////////// ARRAY ////////////////////////

let tennis:number[] = [15,20,30 ];
let tennis2:Array<number>=[15,30,40];

// Array + Any 
let dynamicList: any[]=["Franco",25,true];


//? ///////////////// TUPLAS ////////////////////////

let tupla:[string,number]=["Mati",30];
// En esta declaracion siempre se debe mantener el orden de string y number, y la cantidad de elementos
tupla=['Franco',30]

// Array de Tuplas

let tupleArray:[number,string][]=[[25,'Juan']];
tupleArray.push([30,'Carlos']);
console.log(tupleArray)

let tupleArray2:Array<[number,string]>=[]
tupleArray2.push([32,'Teo']);
console.log(tupleArray2)


//*npx tsc nombredelarchivo.ts         COMPILA EL ARCHIVO TS Y GENERA UNO .JS PARA SU EJECUCIONNPM  

