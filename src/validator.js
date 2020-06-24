const validator = {

  isValid: num => {

    /* Es una expresión regular que valida que se ingresen numeros del 0 al 9 el + es para que evalue si vienen más
    números dentro de la cadena, el test valida que la expresión num, en este caso dice que si no hay numero o no se ingresa
    el numero retorne false */

    
    if (/[0-9]+/.test(!num) || num == "") 
    return false;

    // Evento adgoritmo luhn
    
    let nCheck = 0,
        bEven = false;

    num = num.replace(/\D/g);

    for (var n = num.length - 1; n >= 0; n--) {
        var cDigit = num.charAt(n),

        nDigit = parseInt(cDigit, 10);

      if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

      nCheck += nDigit;
      bEven = !bEven;
    }

    return (nCheck % 10) == 0;
  },

  // enmascarado de numeros

  maskify: num => {

    let mask_simbol = '*';
    if (num.length >= 4) {
      let lastDigit = num.slice(-4);
      let masked_str = mask_simbol.repeat(num.length - 4) + lastDigit;
      return num = masked_str;
    } else {
      return num;
    }
  }
};

export default validator;
