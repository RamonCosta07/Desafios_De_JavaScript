/* Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele. */

function semThis(array) {
    return array.map(function (item) {
        return item * 3;
    })
}

const array = [3, 4, 5, 6];
console.log(semThis(array));