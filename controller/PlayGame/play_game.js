let inquirer = require('inquirer');
let get_question = require('./get_question');
let generate_question = require('./generate_question');

async function play_game(number_of_question, quiz_category){
    let res = await get_question(number_of_question, quiz_category);
    let response = await res.json();

    let all_questions = await generate_question(response.results);
    
    inquirer.prompt(all_questions);
}

module.exports = play_game;