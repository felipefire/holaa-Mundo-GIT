let nombre = "Juan Perez";
let edad = calcularEdad(1986);
console.log("Hola " + nombre);
console.log(nombre +"tiene" + edad+ "años" );

function calcularEdad (anioNacimiento){
    const fechaActual = new Date();
    const anioActual = fechaActual.getFullYear();
    const edad = anioActual - anioNacimiento;
    return edad;
}