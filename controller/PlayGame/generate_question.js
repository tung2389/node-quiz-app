let shuffle_question = require('./shuffle_question');
let entities = require("entities");

function generate_question(all_data){
    let all_questions = [];
    for(let i = 0; i < all_data.length ; i++){

    let data = all_data[i];
    let all_choices = data.incorrect_answers.concat(data.correct_answer).map(
        value => entities.decodeHTML(value)
    );

    shuffle_question(all_choices);
    
    let question_number = i + 1;

    let single_question = {
        type: 'list',
        name: 'question ' + question_number,
        message: entities.decodeHTML(data.question),
        choices: all_choices
    };
    
    all_questions.push(single_question);
    }
    return all_questions;
}

module.exports = generate_question;