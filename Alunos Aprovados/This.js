/* Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade! */

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: "Joãozinho",
    idade: 18
}

const pessoa2 = {
    nome: "Miguel",
    idade: 37
}

const animal = {
    nome: "Malu",
    idade: 2,
    raca: "Vira-lata"
}

console.log(calculaIdade.call(pessoa2, 30));
console.log(calculaIdade.call(animal, 7));
console.log(calculaIdade.apply(pessoa1, [30]));