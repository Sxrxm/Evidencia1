/*Hola*/
//holaaa
//alert("Hola 2826502")
//let nombre = prompt("por favor ingrese su nombre")
//document.querySelector("div").innerText=nombre
const nombreProducto = new String("Lenovo V4");
console.log(nombreProducto) 

const precioProducto = 26;
const precioProductoStr = "26";
console.log(precioProducto);
console.log(precioProductoStr);
// == compara el valor
console.log(precioProducto == precioProductoStr)

const producto1 = {
    nombre : "Lenovo ThinkPad",
    color : "Red",
    modelo : " IU643",
    descripcion : "Para trabajo liviano",
    precio : 4200000
}
console.log(producto1.descripcion)

const { nombre } = producto1;
console.log(producto1)

//Object constructor:
const Producto = function(nombre, color, precio){
    this.nombre = nombre,
    this.color = color,
    this.precio = precio
}

//2 instancias de Producto
const p1 = new Producto("Compu", "Azul", 20000)
console.log(p1)
    