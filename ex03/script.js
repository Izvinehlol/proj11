let numeros = [];
let contador = 0;

for (let i = 0; i < 10; i++) {

    numeros[i] = prompt("Digite o " + (i + 1) + "º número:");
}

let numeroBusca = prompt("Digite um número para buscar no vetor:");

for (let i = 0; i < 10; i++) {

    if (numeros[i] == numeroBusca) {
        contador++;
    }
}

console.log("Vetor:", numeros);
console.log("O número " + numeroBusca + " aparece " + contador + " vez(es).");