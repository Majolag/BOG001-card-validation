const validator = {

  isValid: cardNumber => {

    /* Es una expresión regular que valida que se ingresen numeros del 0 al 9 el + es para que evalue si vienen más
    números dentro de la cadena, el test valida que la expresión cardNumber, en este caso dice que si no hay numero
    o no se ingresa el numero retorne false */
    
    if (/[0-9]+/.test(!cardNumber) || cardNumber == "") return false;

    // Evento adgoritmo luhn
    
    let nCheck = 0,
        bEven = false;

    for (var n = cardNumber.length - 1; n >= 0; n--) {
      var cDigit = cardNumber.charAt(n),

        nDigit = parseInt(cDigit, 10);

      if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

      nCheck += nDigit;
      bEven = !bEven;
    }

    return (nCheck % 10) == 0;
  },

  // Enmascarado de numeros

  maskify: cardNumber => {

    let mask_simbol = '*';

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
