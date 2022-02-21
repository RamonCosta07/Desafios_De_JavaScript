/* Some todos os números de um array */

function soma(array) {
    return array.reduce(function (prev, current) {
        return prev + current;
    }, 0) // 0 é opcional. Pode ser setado outro valor inicial
}

const array = [3, 4, 10];
console.log(soma(array));