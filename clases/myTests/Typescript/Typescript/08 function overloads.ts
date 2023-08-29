// Dependiendo de cómo se llame a una función, devuelve cierto tipo de resultado

function suma(a: number, b: string): string;
function suma(a: string, b: string): string;
function suma(a: string, b: number): string;
function suma(a: number, b: number): number;

function suma(a: any, b: any): any {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } else {
        return a.toString() + b.toString();
    }
}
