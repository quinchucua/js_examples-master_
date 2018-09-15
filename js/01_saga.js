
var sagas = [];
var heroe = unHeroe();
var nuevaSaga = function() {
    var crimen = unCrimen();
    sagas.push( function() {
        var poder = unPoder();
        var trama = [heroe,poder,crimen];
        console.warn(trama.join(" "));
    });
};

nuevaSaga();
sagas[0]();
sagas[0]();
nuevaSaga();
sagas[0]();
sagas[1]();
sagas[0]();

/**
 * Genera heroes aleatorios;
 */
function unHeroe() {
    var heroes = ["batman", "spiderman", "iron man", "super man", "hulk"];
    var numeroAleatorio = unNumeroAleatorio(heroes);    
    return heroes[numeroAleatorio] ;
}
/**
 * Genera poderes aleatorios;
 */
function unPoder() {
    var poderes = ["volar", "fuerza", "rapidez", "ojos", "salto", "hielo"];
    var numeroAleatorio = unNumeroAleatorio(poderes);
    //console.warn("aDeed random", randomNum);
    return poderes[numeroAleatorio];    
}

/**
 * Genera crimenes aleatorios
 */
function unCrimen() {
    var crimenes = ["asaltar", "matar", "maltrato", "sobornar"];
    var numeroAleatorio = unNumeroAleatorio(crimenes);    
    return crimenes[numeroAleatorio];
}

/**
 * Genera un número aleatorio de 0 a el tamaño del arreglo.
 * @param {Object} arr 
 */
function unNumeroAleatorio(arr) {
    return Math.floor(Math.random() * arr.length );
}