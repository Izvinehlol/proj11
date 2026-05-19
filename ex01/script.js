let numeros = [];
let somaPares = 0;

for (let i = 0; i < 10; i++) {
    numeros[i] = parseInt(prompt("Digite o " + (i + 1) + "º número:"));

    if (numeros[i] % 2 === 0) {
        somaPares = somaPares + numeros[i];
    }
}

console.log("Vetor:", numeros);
console.log("Soma dos números pares:", somaPares);