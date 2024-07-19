//Sintáxis Arrow(Flecha)
//REGLAS:
//1.Si el bloque de codigo de la función flecha 
//  solo tiene una linea, 
//  no hace falta ponerlo con corchetes.

//  2.Si la función flecha tiene un solo parametro,
//    se puede omitir el parentesis de los parametros.

//   3.Si el bloque de codigo de la función flecha solo tiene una linea,
//     y esta linea debe retornar un valor, es posible omitir el return,
//     pero solo si se aplica la regla 1 (omitir corchetes)

const saludo = nombre =>
    `Holaaaa ${nombre}, desde la función flecha`
 

//Invocar a la función flecha
console.log(saludo("Sara"));