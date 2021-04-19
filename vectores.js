function crearVector(n,m){
    var array = new Array(n);

    for (let index = 0; index < array.length; index++) {
        array[index] = Math.floor(Math.random() * (m + 1));        
    }
    return array;
}

function sumaVector(v1,v2){
    if (v1.length == v2.length) {
        var vResult = Array(v1.length);        
        for (let x = 0; x < vResult.length; x++) {        
            vResult[x] = v1[x] + v2[x];        
        }        
    }
    console.log("vect1: "+v1+ " vect2: "+v2+ " Total: "+vResult);
    return vResult;
}

function ProductoNumeroVector(n,v1){
    var vResult = Array(v1.length);        
    for (let x = 0; x < vResult.length; x++) {        
        vResult[x] = v1[x] * n;        
    }        
    
    console.log("vect1: "+v1+ " Total: "+vResult);
    return vResult;  
}

function restaVector(v1,v2){
    if (v1.length == v2.length) {
        var vResult = Array(v1.length);        
        for (let x = 0; x < vResult.length; x++) {        
            vResult[x] = v1[x] - v2[x];        
        }        
    }
    console.log("vect1: "+v1+ " vect2: "+v2+ " Total: "+vResult);
    return vResult; 
}

function productoVector(v1,v2){
    if (v1.length == v2.length) {
        var vResult = Array(v1.length);        
        for (let x = 0; x < vResult.length; x++) {        
            vResult[x] = v1[x] * v2[x];        
        }        
    }
    console.log("vect1: "+v1+ " vect2: "+v2+ " Total: "+vResult);
    return vResult;
}

module.exports = {
    crearVector,
    sumaVector,
    ProductoNumeroVector,
    restaVector,
    productoVector
}
