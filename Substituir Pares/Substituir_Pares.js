/* Troque todos os elementos pares e diferentes de
zero de um array pelo numero 0. Se o array for
vazio retorne -1 */

function substituir(array) {
    if (!(array.length)) {
        return -1;
    }

    for (let index = 0; index < array.length; index++) {
        if (array[index] !== 0 && array[index] % 2 === 0) {
            array[index] = 0;
        }
    }
    return array;
}

let array = [10, 0, 3, 2, 1, 12, 17];
let arrayDois = [];

console.log(substituir(array));
console.log(substituir(arrayDois));