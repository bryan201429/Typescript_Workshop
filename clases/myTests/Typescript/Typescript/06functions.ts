//            a:type , b:type  :return type
function suma(a:number,b:number, c?:number ):number{              //c? será un parámetro opcional
    return a+b;
}

function consologear():void{
    console.log('algo');
    //! No se puede poner return porque es un tipo void, no tiene retorno!
    //*Usado en React para setear un estado
}


function throwError(msg:string):never{     //? Solo se usa el tipo never si y solo si tiramos un error, nunca acaba la función se termina su ejecución 
    throw new Error(msg);
    console.log('un valor')                //*No se va a ejecutar nunca
}
//En este momento el return le transfiere el tipado a la variable en la que se define:
let resultado=suma(2,2);



function sumaNarrowing(a:number | string ,b:number|string, c?:number ):number|string|void{              //c? será un parámetro opcional
    if(typeof a === 'number' && typeof b ==='number') return a+b
    if(typeof a === 'string' && typeof b ==='string') return a+b
}

let resultado2= sumaNarrowing(2,2);

function sumaNarrowingtoNumber(a:string|number, b:string|number):number{
    if(typeof(a)==='string') a=parseInt(a);
    if(typeof(b)==='string') b=parseInt(b);
    return a+b;
}

console.log(sumaNarrowingtoNumber('2',3))