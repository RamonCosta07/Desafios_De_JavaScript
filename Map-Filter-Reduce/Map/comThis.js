/* Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele. */

const livro = {
    value: 2,
};

const mesa = {
    value: 3,
};

function mapThis(array, thisArg) {
    return array.map(function(item) {
        return item * this.value;
    }, thisArg);
}

const array = [1, 2];

console.log('this => livro', mapThis(array, livro));
console.log('this => mesa', mapThis(array, mesa));
