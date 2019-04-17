let fs = require('fs');
let caculate_result = require('./caculate_result');

function generate_info(info, all_data, all_answers){
    let result = caculate_result(all_data, all_answers);
    let all_info = {
        username: info.username,
        number_of_questions: info.number_of_questions,
        quiz_category: info.quiz_category,
        time_per_question: info.time_per_question,
        true_answers: result.true_answers,
        wrong_answers: result.wrong_answers,
        total_score: result.total_score
    };
    let file_data = JSON.stringify(all_info);
    return file_data
}

module.exports = generate_info;