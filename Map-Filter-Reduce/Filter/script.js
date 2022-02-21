/* Filtre e retorne todos os números pares de um array.*/

function filtrar(array) {
    return array.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const array = [2, 4, 5, 6, 1, 8];
console.log(filtrar(array));