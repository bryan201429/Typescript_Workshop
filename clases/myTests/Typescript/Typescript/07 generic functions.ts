let arr=[1,2,3,4];
let arrayStrings=['a','b','c'];


function firsElement<Type>(arr: Type[]):Type{               //El elemento que guarda el resultado de la función adopta el parámetro de la función   
    return arr[0];
}

let elemento=firsElement(arr);      //implicito el declarado de tipo

let elementoString=firsElement<string>(arrayStrings);       //Explícito


//!

function merge <U extends object, V extends object>(obj1:U,obj2:V){
    return{
        ...obj1,
        ...obj2
    }
}