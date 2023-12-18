const inquirer = require('inquirer');

inquirer.prompt([
    {
        name: 'p1',
        message: 'Qual a primeira nota?'
    },
    {
        name: 'p2',
        message: 'Qual a segunda nota?'
    },
])
.then((answers) => {
    const nota1 = parseInt(answers.p1);
    const nota2 = parseInt(answers.p2);

    if (isNaN(nota1) || isNaN(nota2)) {
        console.log('Voce nao digitou numeros validos');
    }else {
        const media = (nota1 + nota2) / 2;
        console.log(`A media eh: ${media}`);
    }
})
.catch(err => console.log(err))