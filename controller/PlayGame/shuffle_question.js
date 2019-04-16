
//Pass array as reference to modify
function swap(question_arr,index1,index2){
    let temp = question_arr[index1];
    question_arr[index1] = question_arr[index2];
    question_arr[index2] = temp;
}

function shuffle_question(question_arr){
    let current_index = question_arr.length;
    while(current_index !== 0){
        //Randomly pick a remaing element
        let random_index = Math.floor(Math.random() * current_index);
        current_index--;
        swap(question_arr,current_index,random_index);
    }
}

module.exports = shuffle_question;

