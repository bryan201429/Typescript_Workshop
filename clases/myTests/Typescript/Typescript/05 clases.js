var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.getEdad = function () {
        return 'mi edad es: ' + this.edad;
    };
    return Persona;
}());
var mati = new Persona('matias', 29);
console.log(mati.nombre); //! Variable pública
//!console.log(mati.edad)      //! Al ser una variable privda no se puede acceder desde afuera de la clase
console.log(mati.getEdad());
