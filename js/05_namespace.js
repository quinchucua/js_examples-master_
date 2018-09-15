// namespace global
var MIAPLICACION = MIAPLICACION || {};

// Sub-namespace
MIAPLICACION.event = {} ;

// Creación del contenedor llamado MIAPLICACION.metodoComun de método y propiedades comunes.
MIAPLICACION.metodoComun = {
    regExParaNombre: "", // define regex para la validación del nombre
    regExParaTelefono: "", // define regex para validación del teléfono
    validaNombre: function(nombre){
      // Hace algo con el nombre que usted ingresa a la variable reExParaNombre 
      // usando "this.regExParaNombre"
    },
  
    validaNroTelefono: function (numTelefono){
      // Hace algo con el número de teléfono
    }
  }
  
  // Objeto junto a la declaración del método
  MIAPLICACION.event = {
    addListener: function(el, type, fn){
      // código de relleno
    },
    removeListener: function(el, type, fn){
      // código de relleno
    },
    getEvent: function(e) {
      // código de relleno
    }
  
    // Puedes agregar otras propiedades y métodos
  }
  
  // Sintaxis de utilización del método addListener:
  MIAPLICACION.event.addListener("turel", "tipo", callback);

  function Persona(primerNombre) {
    this.primerNombre = primerNombre;
  }
  
Persona.prototype.diHola = function() {
  alert ('Hola, Soy ' + this.primerNombre);
};