let inquirer = require('inquirer');
let get_question = require('./get_question');
let generate_question = require('./generate_question');

async function play_game(number_of_question, quiz_category){
    let res = await get_question(number_of_question, quiz_category);
    let response = await res.json();

    let all_questions = await generate_question(response.results);
    
    return {
        ask: inquirer.prompt(all_questions),
        all_data: response.results
    };
}

module.exports = play_game;