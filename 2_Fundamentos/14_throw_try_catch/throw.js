const x = '10';

// Check if x is a number
if (!Number.isInteger(x)) {
    throw new Error('O valor de x nao eh um numero inteiro!');
}

console.log('COntinuando o codigo....');