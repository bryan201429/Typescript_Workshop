//? //////// Definiendo el objeto //////////////////

interface persona{
     nombre:string,
     apellido:string,
     edad:number,
     hobbies?:Hobby[],
    }

interface Hobby{
    nombre:string
}

let Yo: persona= {
    nombre:'bryan',
    apellido:'ct',
    edad:25,
    hobbies:[]
}

interface estudiante extends persona{
    // nombre:string,           //!Estas props las heredará de persona
    // apellido:string,
    // edad:number,
    activo:boolean,
    saluda:(a:string)=>void
}

let Franco:estudiante={
        nombre:'Franco',
        apellido:'Guevara',
        edad:15,
        activo:true,
        saluda:(a:string)=>{console.log(`Hola`)},
        hobbies:[{nombre:'lectura'}]
}

console.log(Franco.hobbies[0].nombre);
Franco.saluda('a');