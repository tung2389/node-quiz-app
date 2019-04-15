let init_game = require('./controller/InitGame/init_game');

init_game().then(answer => {
    console.log("Welcome to quiz game " + answer.username);
    
});