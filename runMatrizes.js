var matrizLib = require("./matriz");

console.log(matrizLib.crearMatriz(5,2,5));

var sum = matrizLib.sumaMatriz(matrizLib.crearMatriz(5,2,5),matrizLib.crearMatriz(5,2,5));

var producto = matrizLib.ProductoNumeroMatriz(2,matrizLib.crearMatriz(5,2,5));

var resta = matrizLib.restaMatriz(matrizLib.crearMatriz(5,2,5),matrizLib.crearMatriz(5,2,5));

var productoM = matrizLib.productoMatriz(matrizLib.crearMatriz(5,2,5),matrizLib.crearMatriz(5,2,5));