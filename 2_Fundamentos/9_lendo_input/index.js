const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('Qual a sua linguagem preferida? ', (language) => {
    if (language === 'Java') {
        console.log('Apenas a melhor de todas');
    }else {
        console.log(`A minha linguagem preferida eh: ${language}`);
    }
    
    readline.close();
});