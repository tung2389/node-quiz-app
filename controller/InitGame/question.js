let validation = require('./validation');
let quiz_categories_arr = require('./quiz_categories_arr');

let info = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your name ?',
        validate: validation.validate_string
    },
    {
        type: 'input',
        name: 'number_of_question',
        message: 'Number of question ?',
        validate: validation.validate_number
    },
    {
        type: 'input',
        name: 'time_per_question',
        message: 'Time for each question (unit is second) ?',
        validate: validation.validate_number
    },
    {
        type: 'list',
        name: 'quiz_category',
        message: "Enter your question's category",
        choices: quiz_categories_arr
    }
];

module.exports = info;