const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer.prompt([
    {
        name: 'nome',
        message: 'Qual o seu nome?'
    },
    {
        name: 'idade',
        message: 'Qual a sua idade?'
    }
])
.then((respostas) => {
    const nome = respostas.nome;
    const idade = respostas.idade;

    if (!nome || !idade) {
        throw new Error('Você esqueceu de inserir o nome ou a idade');
    }

    console.log(chalk.bgYellow.black.bold(`O nome é ${nome} e a idade é ${idade}`));
})
.catch(err => console.log(err))