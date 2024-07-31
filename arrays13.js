//Crie um array de objetos representando carros, cada um com propriedades nome e ano, e use filter para criar um novo array contendo apenas os carros fabricados após o ano 2010.

const carros = [
    { nome: 'Fiat Uno', ano: 2010 },
    { nome: 'Chevrolet Onix', ano: 2012 },
    { nome: 'Ford Ka', ano: 2008 },
    { nome: 'Toyota Corolla', ano: 2015 },
    { nome: 'Honda Civic', ano: 2011 }
];

const carrosApos2010 = carros.filter(carro => carro.ano > 2010);

console.log(carrosApos2010);
