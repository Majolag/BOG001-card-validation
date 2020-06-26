const validator = {

  isValid: cardNumber => {

    /* Es una expresión regular, valida que se ingresen numeros del 0 al 9. el signo  + es para que evalue si vienen
    más números dentro de la cadena, el test valida que la expresión !cardNumber, en este caso dice que si no hay
    numero o no se ingresa el numero retorne false */
    
    if (/[0-9]+/.test(!cardNumber) || cardNumber == "") return false;

    // Evento adgoritmo luhn
    
    let sumaTotal = 0,
        bEven = false;

    for (var n = cardNumber.length - 1; n >= 0; n--) {

      //Obtener el caracter del string cardNumber.lenght - 1. para que comience desde el ultimo digito

      var nCaracter = cardNumber.charAt(n),

      // Convierte el string a un entero, 

        nEntero = parseInt(nCaracter, 10);



      if (bEven && (nEntero *= 2) > 9) nEntero -= 9;

      sumaTotal += nEntero;
      bEven = !bEven;
    }

    return (sumaTotal % 10) == 0;
  },

  // Enmascarado de numeros

  maskify: cardNumber => {

    let mask_simbol = '#';

    if (cardNumber.length >= 4) {
      let lastDigit = cardNumber.slice(-4);
      let masked_str = mask_simbol.repeat(cardNumber.length - 4) + lastDigit;

      return cardNumber = masked_str;

    } else {
      return cardNumber;
    }
  }
};

export default validator;
