let quiz_categories_arr = require('../InitGame/quiz_categories_arr');

function find_number(quiz_category){
    for(let i=0;i<quiz_categories_arr.length;i++){
        if(quiz_categories_arr[i] === quiz_category){
            // corret number of opentdb is the real number plus 9
            let correct_number = i + 9;
            return correct_number;
        }
    }
}

module.exports = find_number;