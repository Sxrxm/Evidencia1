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
//const productos = { ...nombres, nombres2}
//  console.log(productos)

const productos = [ ...nombres, ...nombres2]
const elemento = "compas"
const productos1 = [ ...productos, elemento]

const regla = "Regla"
productos1 = [ ...productos1, regla]

console.table(productos1)
    