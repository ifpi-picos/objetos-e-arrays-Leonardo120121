//Escreva um programa que solicita ao usuário o nome de 5 filmes e armazene em um array. Em seguida, exiba no console os filmes informados.

let filmes = [];

var f1 = prompt("Digite o nome de um filme");
var f2 = prompt("Digite o nome de um filme");
var f3 = prompt("Digite o nome de um filme");
var f4 = prompt("Digite o nome de um filme");
var f5 = prompt("Digite o nome de um filme");

filmes.push(f1, f2, f3, f4, f5);

console.log("Os filmes informados foram:");
filmes.forEach(filme => console.log(filme));