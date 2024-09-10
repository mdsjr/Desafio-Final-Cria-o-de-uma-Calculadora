function insert(num) {

    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function back() {

  var resultado = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);

}

/*function calcular() {

    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    } else {
        document.getElementById('resultado').innerHTML = "Nada para calcular";
    }
}
Retirada a função eval() por questões de segurança.
A função eval() permite executar qualquer código JavaScript. 
Isso significa que se um usuário inserir uma expressão maliciosa, 
ela pode ser executada, comprometendo a segurança da aplicação.
Agora temos mais controle sobre o processo de cálculo, podendo implementar validações e otimizações .*/    



function calcular() {
var resultado = document.getElementById('resultado').innerHTML;

var numeros = resultado.split(/[\+\-\*\/]/);
var operadores = resultado.match(/[\+\-\*\/]/g);

if (numeros.length !== operadores.length + 1) {
  document.getElementById('resultado').innerHTML = "Expressão inválida";
  return;
}

var resultadoFinal = parseFloat(numeros[0]);
for (var i = 0; i < operadores.length; i++) {
  var operador = operadores[i];
  var numero = parseFloat(numeros[i + 1]);

  switch (operador) {
    case '+':
      resultadoFinal += numero;
      break;
    case '-':
      resultadoFinal -= numero;
      break;
    case '*':
      resultadoFinal *= numero;
      break;
    case   
'/':
      resultadoFinal /= numero;
      break;
  }
}

document.getElementById('resultado').innerHTML = resultadoFinal;
}