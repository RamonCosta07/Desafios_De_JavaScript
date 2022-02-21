/* Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada. */

function precos(precos, saldo) {
    return precos.reduce(function (prev, current, index) {
        console.log(`Rodada: ${index + 1}`);
        console.log({ prev });
        console.log({ current });
        return prev - current.preco;
    }, saldo)
}

const lista = [
    {
        nome: 'detergente',
        preco: 12.80
    },

    {
        nome: 'pasta de dente',
        preco: 5.20
    },

    {
        nome: 'bolacha',
        preco: 1.98
    },
];

const saldo = 50.00;

console.log(precos(lista, saldo));