let vetorOriginal = [];
let vetorSemDuplicados = [];
let repetido;
let posicao = 0;

for (let i = 0; i < 10; i++) {

    vetorOriginal[i] = prompt("Digite um número:");
}

for (let i = 0; i < 10; i++) {

    repetido = false;

    for (let j = 0; j < posicao; j++) {

        if (vetorOriginal[i] == vetorSemDuplicados[j]) {

            repetido = true;
        }
    }

    if (repetido == false) {

        vetorSemDuplicados[posicao] = vetorOriginal[i];
        posicao++;
    }
}

console.log("Vetor original:");

for (let i = 0; i < 10; i++) {

    console.log(vetorOriginal[i]);
}

console.log("Vetor sem duplicados:");

for (let i = 0; i < posicao; i++) {

    console.log(vetorSemDuplicados[i]);
}
