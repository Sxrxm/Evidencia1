//Ejemplo
//Sintáxis: Declaración de función

//invocar, llamar o ejecutar la función saludo
saludo("Sara")//-> argumento: Sara
function saludo(nombre){
    console.log(`Hola ${nombre}, ¿Cómo estás?`);
}

//Sintáxis: Expresión Función:
//Se asigna a una constante
const saludo2 = function(nombre="Sandra"){//-> parametro por defecto
    console.log(`Hola ${nombre}, ¿Cómo estás?`);
}
//incvocar saludo2
saludo2();