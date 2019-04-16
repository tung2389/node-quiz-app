
let fetch = require('node-fetch');
let { URL, URLSearchParams } = require('url');
let find_number = require('./get_number');

function create_url(number_of_question, number_category){
    let url = new URL("https://opentdb.com/api.php");
    let params = {
        amount: number_of_question,
        category: number_category
    };
    url.search = new URLSearchParams(params);
    return url;
}

function get_question(number_of_question, quiz_category){
    let number_category = find_number(quiz_category);
    let url = create_url(number_of_question, number_category);
    return fetch(url);
}

module.exports = get_question;