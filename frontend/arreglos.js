const nombres = ["Asus", "Hp", "Lenovo"];
//Agregar elementos al arreglo:
nombres[3] = "Apple"
console.log(nombres[1])
//Agregar un elemento al final:
nombres.push("Pollito");
//Agregar elementos al principio:
nombres.unshift("Nada de nada");
//Eliminar elementos de un arreglo:
delete nombres[2];
//Eliminar elementos del final:
nombres.pop();    
//Eliminar elementos del principio:
nombres.shift();
console.table(nombres);

//Recorrer un arreglo:
for( let i=0; i<nombres.length ; i++ ){
    console.log(nombres[i])
}

//Operador Spread con arreglos:
const nombres2 = [
   "N",
   "S"
]

let productos = [ ...nombres, ...nombres2]
const elemento = "compas"
productos = [ ...productos, elemento]

const regla = "Regla"
productos = [ ...productos, regla]

console.table(productos)
