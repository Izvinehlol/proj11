let numeros = [];

for (let i = 0; i < 7; i++) {
    numeros[i] = Math.floor(Math.random() * 100);
}

console.log("Números gerados:");

for (let i = 0; i < 7; i++) {
    console.log(numeros[i]);
}