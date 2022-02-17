/* Crie uma função que recebe o array alunos e um número que irá representar a média final;
Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno. */

const alunos = [
    {
        nome: 'Ricardo',
        nota: 6,
        turma: '1b'
    },
    {
        nome: 'Biel',
        nota: 3,
        turma: '2b'
    },
    {
        nome: 'Julia',
        nota: 8.5,
        turma: '3a'
    },
]

function aprovados(array, media) {
    let aprovados = [];
    for (let index = 0; index < array.length; index++) {

        const { nota, nome } = array[index];

        if (nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(aprovados(alunos, 5));