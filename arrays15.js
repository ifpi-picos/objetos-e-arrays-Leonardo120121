//Crie um array de objetos representando pessoas com nome e idade, e use find para encontrar a primeira pessoa com idade maior que 18.

const pessoas = [
    { nome: 'Ana', idade: 17 },
    { nome: 'Andressa', idade: 24 },
    { nome: 'Carla', idade: 16 },
    { nome: 'Leonardo', idade: 19 },
    { nome: 'Eva', idade: 15 }
];

const primeiraPessoaMaiorDe18 = pessoas.find(pessoa => pessoa.idade > 18);

console.log(primeiraPessoaMaiorDe18);
