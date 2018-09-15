/**
 * Error: El error sucede porque todos los closures que se han creado en el ciclo for
 * comparten el mismo entorno, es decir todos comparten el mismo valor de la variable item
 * que tiene el valor del último elemento del array helpText luego de finalizar el ciclo for.
 * 
 * @param {} help 
 */

function showHelp(help) {
    document.getElementById('help').innerHTML = help;
  }
  
function setupHelp() {
var helpText = [
    {'id': 'email', 'help': 'Dirección de correo electrónico'},
    {'id': 'name', 'help': 'Nombre completo'},
    {'id': 'age', 'help': 'Edad (debes tener más de 16 años)'}
    ];

for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
    showHelp(item.help);
    }
}
}
  
setupHelp();

//--------------------------------------------------------------------------------------

/**
 * Correcto: En lugar de los tres callbacks (closures) compartiendo el mismo entorno,
 * la función makeHelpCallBack crea un nuevo entorno para cada uno en el que help
 * se refiere a la cadena correspondiente del array helptext (en la iteración dada)
 */

/*function showHelp(help) {
    document.getElementById('help').innerHTML = help;
  }
  
  function makeHelpCallback(help) {
    return function() {
      showHelp(help);
    };
  }
  
  function setupHelp() {
    var helpText = [
        {'id': 'email', 'help': 'Dirección de correo electrónico'},
        {'id': 'name', 'help': 'Nombre completo'},
        {'id': 'age', 'help': 'Edad (debes tener más de 16 años)'}
      ];
  
    for (var i = 0; i < helpText.length; i++) {
      var item = helpText[i];
      document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
    }
  }
  
setupHelp(); */ 

