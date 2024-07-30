//Crie um array de números de 1 a 10 e use forEach para imprimir cada número no console.


const numeros = Array.from({ length: 10 }, (_, index) => index + 1);


numeros.forEach(numero => {
    console.log(numero);
});
