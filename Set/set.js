/*Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.*/

function set(array) {
    let mySet = new Set(array);
    return [...mySet];
}

const array = [30, 30, 40, 5, 223, 2049, 3034, 5];

console.log(set(array));