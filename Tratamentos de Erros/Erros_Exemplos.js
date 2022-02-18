/*O objetivo é que a função receba um array e retorne ele caso o seu tamanho corresponda ao número enviado como parâmetro na função. Caso contrário, um erro será lançado.

Crie uma função que recebe um array e um número
Realize as seguintes validações
Se os parâmetros não forem enviados, lance um erro do tipo ReferenceError
Se o array não for do tipo 'object', lance um erro do tipo TypeError
Se o número não for do tipo 'number', lance um erro do tipo TypeError
Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro do tipo RangeError
Utilize a declaração try...catch
Filtre as chamadas de catch por cada tipo de erro utilizando o operador instanceof */

function validar(array, num) {
    try {
        if (!array && !num) throw new ReferenceError("Envie os parâmetros corretos");

        if (typeof array !== "object") throw new TypeError("O array precisa ser do tipo object");

        if (typeof num !== "number") throw new TypeError("Insira um número válido");

        if (array.length !== num) throw new RangeError("Tamanho incompatível");

        return array;
        
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Reference error: " + e.message);
        } else if (e instanceof TypeError) {
            console.log("Type Error: " + e.message);
        } else if (e instanceof RangeError){
            console.log("RangeError: " + e.message);
        } else {
            console.log("Tipo de erro inesperado: " + e.message);
        }
    }
}

console.log(validar([2, 2], 2));