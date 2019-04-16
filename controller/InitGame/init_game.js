let inquirer = require('inquirer');
let info = require('./question');

function init_game(){
    return inquirer.prompt(info);
}

module.exports = init_game;
