const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');
let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    if (value === '=') {
      try {
        currentInput = eval(currentInput); // Tente avaliar a expressão
        display.value = currentInput;
      } catch (error) {
        // Exibe mensagem de erro caso a expressão seja inválida
        display.value = "Erro";
      }
    } else if (value === 'C') {
      currentInput = '';
      display.value = '';
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});