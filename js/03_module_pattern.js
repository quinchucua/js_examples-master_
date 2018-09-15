/**
 * En los ejemplos anteriores cada closure ha tenido su propio entorno, aqui
 * creamos un único entorno compartido para tres funciones
 * Counter.increment, Counter.decrement y Counter.value.
 */
var Counter = (function() { 
    //función anónima que se ejecuta en el momento que se define.

    var privateCounter = 0;//variable privada
    
    function changeBy(val) { //función privada
      privateCounter += val;
    }

    return {
      increment: function() { //publica
        changeBy(1);
      },
      decrement: function() { //publica
        changeBy(-1);
      },
      value: function() { //publica
        return privateCounter;
      }
    }
  })();
  
  alert(Counter.value()); 
  Counter.increment();
  Counter.increment();
  alert(Counter.value()); 
  Counter.decrement();
  alert(Counter.value()); 

  /**
   * Si se crean varios contadores, cada uno de ellos mantiene la independencia del otro,
   * Su entorno durante la llamada de la función makeCounter() es diferente cada vez.
   * Y la variable privada (private counter), contiene una instancia diferente cada vez
   */

  /*var Counter1 = makeCounter();
  var Counter2 = makeCounter();
  alert(Counter1.value());
  Counter1.increment();
  Counter1.increment();
  alert(Counter1.value()); 
  Counter1.decrement();
  alert(Counter1.value()); 
  alert(Counter2.value()); */