const carrito = [
    {
        nombre : "Lenovo ThinkPad",
        descripcion : "Laptop para oficina",
        tipoProducto : "Computador Portátil",
        modelo : "VG6",
        precio : {
            minimoVenta : 30000,
            compra : 100000
        },
        caracteristicas:{
            dimensiones:{
                alto: 25,
                ancho: "50cm",
                largo: "30cm"
            },
            fabricacion:{
                pais: "Taiwan",
                fecha : new Date(`2017-01-02`)
            }
        },
        obtenerPrecioCompra : function(){
            return this.precio.compra; 
        }
    },
    {
        nombre : "Audifonos Beat",
        descripcion : "Audifocnos de alta fidelidad",
        tipoProducto : "Audifonos",
        modelo : "VG6",
        precio : {
            minimoVenta : 3000000,
            compra : 200000
        },
        caracteristicas:{
            dimensiones:{
                alto: 90,
                ancho: "0,5cm",
                largo: "5cm"
            },
            fabricacion:{
                pais: "China",
                fecha : new Date(`2020-01-02`)
            }
        },
        obtenerPrecioCompra : function(){
            return this.precio.compra; 
        }
    },
    {
        nombre : "Tablet Yoga",
        descripcion : "Tablet de alto rendimiento oficina",
        tipoProducto : "Tablet",
        modelo : "VG6",
        precio : {
            minimoVenta : 500,
            compra : 300000
        },
        caracteristicas:{
            dimensiones:{
                alto: 900,
                ancho: "30cm",
                largo: "20cm"
            },
            fabricacion:{
                pais: "Corea",
                fecha : new Date(`2018-01-02`)
            }
        },
        obtenerPrecioCompra : function(){
            return this.precio.compra; 
        }
    },
    {
        nombre : "Samsung",
        descripcion : "Celular normalito",
        tipoProducto : "Celular",
        modelo : "A22",
        precio : {
            minimoVenta : 3000000,
            compra : 400000
        },
        caracteristicas:{
            dimensiones:{
                alto: 200,
                ancho: "8cm",
                largo: "12cm"
            },
            fabricacion:{
                pais: "Taiwan",
                fecha : new Date(`2021-05-26`)
            }
        },
        obtenerPrecioCompra : function(){
            return this.precio.compra; 
        }
    },
    {
        nombre : "Asus",
        descripcion : "Laptop para estudio",
        tipoProducto : "Computador Portátil",
        modelo : "VG6",
        precio : {
            minimoVenta : 2000000,
            compra : 5000000
        },
        caracteristicas:{
            dimensiones:{
                alto: 300,
                ancho: "50cm",
                largo: "30cm"
            },
            fabricacion:{
                pais: "China",
                fecha : new Date(`2010-05-02`)
            }
        },
        obtenerPrecioCompra : function(){
            return this.precio.compra; 
        }
    }

]

//Recorrer carrito de compras
//Metodo forEach
//no retorna un nuevo arreglo
carrito.forEach(producto =>{
    if(producto.caracteristicas.fabricacion.pais === "Taiwan")
    console.log(producto.nombre);
})
//Ejecutar el metodo: ObtenerPrecioCompra:
//  console.log(carrito[0].obtenerPrecioCompra())

//Imprimir nombre:
// console.log(carrito[0].nombre)

// console.log(carrito[0].caracteristicas.dimensiones.alto)


//Metodo de transormación map:
let preciosCompra = carrito.map((producto) => {
    return producto.precio.compra
})
//Filter : recorrer el arreglo buscando los elementos 
//         que concuerden con la condicional establecida 
//         en el filtro creando un nuevo arreglo con los
//         objetos que cumplen dicho criterio
let productosTaiwan = carrito.filter((producto) => {
    return producto.caracteristicas.fabricacion.pais === `Taiwan`
})
console.log(productosTaiwan)


//Calculo del total del inventario
let total = 0
carrito.forEach(producto =>
    //Acumular el valor de compra de cada producto recorrido en la variable total
    total += producto.precio.compra
)
console.log(`El valor del inventario es:${total}`)

//Utilizando el method reduce: reduce a un solo valor 
//                             el arreglo, con base en una expresión
let inventario = carrito.reduce((total, producto)=>{
    return total + producto.precio.compra
},0)
console.log(`El valor del inventario es:${inventario}`)



for(const producto of carrito ){ 
    console.log("nombre: " + producto.nombre + 
        " Tipo: " + producto.tipoProducto + 
        " Modelo: " + producto.modelo +
        " Dimensiones(Largo): " + producto.caracteristicas.dimensiones.largo +
        " País de fabricación: " + producto.caracteristicas.fabricacion.pais)
    }
carrito.forEach(producto =>{
    if(producto.caracteristicas.fabricacion.pais === "China")
    console.log("Producto de China: " + producto.nombre);
})

carrito.forEach(producto =>{
    if(producto.caracteristicas.dimensiones.alto > 200)
    console.log("Producto de mas altos de 2 metros: " + producto.nombre);
})

carrito.forEach(producto =>{
    if(producto.precio.minimoVenta <="1000")
    console.log("precio mínimo de venta inferior a COP 1000: " + producto.nombre);
})
