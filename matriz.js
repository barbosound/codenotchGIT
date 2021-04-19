var vectLib = require("./vectores");

function crearMatriz(n,m,k){
    var m1 = new Array(n);
    for (let i = 0; i < m1.length; i++) {
        m1[i] = vectLib.crearVector(m,k);        
    }
    return m1;
}

function sumaMatriz(m1,m2){
    var vResult = new Array(m1.length); 
    for (let i = 0; i < m1.length; i++) {
        vResult[i] = vectLib.sumaVector(m1[i],m2[i]);
    }
    return vResult;
}

var m = crearMatriz(5,2,5); 
function ProductoNumeroMatriz(n, m){
    var vResult = new Array(m.length); 
    for (let i = 0; i < m.length; i++) {
        vResult[i] = vectLib.ProductoNumeroVector(n,m[i]);
    }
    return vResult;
}

function restaMatriz(m1,m2){
    var vResult = new Array(m1.length); 
    for (let i = 0; i < m1.length; i++) {
        vResult[i] = vectLib.restaVector(m1[i],m2[i]);
    }
    return vResult;
}

function productoMatriz(m1,m2){
    var vResult = new Array(m1.length); 
    for (let i = 0; i < m1.length; i++) {
        vResult[i] = vectLib.productoVector(m1[i],m2[i]);
    }
    return vResult;
}

module.exports = {
    crearMatriz,
    sumaMatriz,
    ProductoNumeroMatriz,
    restaMatriz,
    productoMatriz
}