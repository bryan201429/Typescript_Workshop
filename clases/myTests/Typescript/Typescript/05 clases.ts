
class Persona{
    nombre:string;
    private edad:number;    //*Variable privada solo puede usarla esta clase
    protected email:string; //*Protected se puede usar solo en esta y sus clases hijas
    constructor(nombre:string,edad:number,email:string){
        this.nombre=nombre;
        this.edad=edad;
        this.email=email;
    }
    getEdad(){
        return 'mi edad es: ' +this.edad
    }
}


class Estudiante extends Persona{
    isActive:boolean;
    constructor(nombre:string,edad:number,email:string){
        super(nombre,edad,email)
        this.isActive=false;
        }
        functionPrueba(){
            this.email;
    }
}


let mati = new Persona('matias',29,'mati@gmail.com')
console.log(mati.nombre)        //! Variable pública
//!console.log(mati.edad)      //! Al ser una variable privda no se puede acceder desde afuera de la clase
console.log(mati.getEdad())

let fede=new Persona('fede',30,'fede@gmail.com')
//!console.log(fede.email) No se puede porque es protected!