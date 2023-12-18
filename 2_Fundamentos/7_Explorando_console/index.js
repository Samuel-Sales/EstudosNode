// Mais de um valor
const x = 10;
const y = 'Samuel';
const z = [1, 2];

console.log(x, y, z);

// Contagem de impressoes
console.count(`O valor de x eh: ${x}, contagem`);
console.count(`O valor de x eh: ${x}, contagem`);
console.count(`O valor de x eh: ${x}, contagem`);
console.count(`O valor de x eh: ${x}, contagem`);

// Variavel entre string
console.log("O nome eh %s, ele eh programdor", y);

// Limpar o console
setTimeout(() => {
    console.clear();
}, 2000)