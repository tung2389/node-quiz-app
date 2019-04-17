let entities = require("entities");

let true_answers = [];
let wrong_answers = [];
let total_score = 0;

function caculate_result(all_data,all_answers){
    for( let i = 0; i < all_data.length; i++){
        let data = all_data[i];
        let question_number = i + 1;
        if(entities.decodeHTML(data.correct_answer) === all_answers['question' + question_number]){
            true_answers.push(i);
            total_score++;
        }
        else{
            wrong_answers.push(i);
        }
    }
    return {
        true_answers: true_answers,
        wrong_answers: wrong_answers,
        total_score: total_score
    };
}

module.exports = caculate_result;