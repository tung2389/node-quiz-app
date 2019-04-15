function validate_string(value){
    if(value !== '')
    return true
    else
    return 'Please enter your name'
}

function validate_number(value){
    if(Number.isInteger(Number(value)) && value !== '')
    return true;
    else
    return 'Please enter a valid number'
}

module.exports = { validate_string, validate_number};