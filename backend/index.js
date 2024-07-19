console .log("Carrito de Compras")
//Template String:
//Alternativa a la concatenación
//Permite incrustrar un valor dentro de un String
const nombreProducto = String("Lenovo V4");
console.log(`El producto es: ${nombreProducto}`) 

const precioProducto = 26;
const precioProductoStr = "26";

console.log(precioProducto);
console.log(precioProductoStr);

//=== compara el tipo de dato
console.log(precioProducto === precioProductoStr)

//objeto producto:
//objeto literal:
const producto1 = {
    nombre : "Lenovo ThinkPad",
    color : "Red",
    modelo : " IU643",
    descripcion : "Para trabajo liviano",
    precio : 4200000,
    getModelo : function(){
        console.log(this.modelo);
    }
}

//se peude agregar algo mas, por ejemplo una imagen con
producto1.imagen = "imagen.jpg"
console.log(producto1)
//invocar metodo getModelo:
producto1.getModelo();

//sin desestructuraccion
nombresito = producto1.nombre;
console.log(nombresito)

//con desestructuraccion
const { descripcion } = producto1;
console.log(descripcion)

//Object constructor:
const Producto = function(nombre, color, precio){
    this.nombre = nombre,
    this.color = color,
    this.precio = precio
}

//2 instancias de Producto
const p1 = new Producto("Compu", "Azul", 20000)
console.log(p1);

//operador spread
const medidas = {
    "peso" : "50kg",
    "altura": "15cm",
    "largo" : "50cm"
}
const nuevoProducto = { ...producto1, ...medidas }
console.log(nuevoProducto);


