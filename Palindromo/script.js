// Primeira Possibilidade
function palindromo(string) {
    if (!'string') return;
    return string.split("").reverse().join("") === string;
}

// Segunda Possibilidade
function palindromoSegundaOpcao(string) {
    if (!'string') return;
    for (let index = 0; index < string.length / 2; index++) {
        if (string[index] !== string[string.length - 1 - index]) {
            return false;
        }
    }
    return true;
}

console.log(palindromo('ovo'));
console.log(palindromoSegundaOpcao('madam'));