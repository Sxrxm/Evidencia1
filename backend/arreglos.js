//Defininir un arreglo de nombres de producto 
const nombres = ["Asus", "Hp", "Lenovo"];
console.log(nombres)
//Agregar elementos al arreglo:
nombres[3] = "Apple"
console.log(nombres[1])
//Agregar un elemento al final:
nombres.push("Pollito");
//Agregar elementos al principio:
nombres.unshift("Nada de nada");
console.table(nombres);
for( let i=0; i<nombres.length ; i++ ){
    console.log(nombres[i])
}