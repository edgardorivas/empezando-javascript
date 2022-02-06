let valorUno = parseInt(prompt('valor del primer termino', ''));
let valorDos = parseInt(prompt('valor del segundo termino', ''));
let result;

if (valorUno > valorDos) {
  result = 'el mayor es ' + valorUno;
} else {
  result = 'el mayor es ' + valorDos;

}

alert(result);