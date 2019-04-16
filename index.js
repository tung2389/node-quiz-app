let init_game = require('./controller/InitGame/init_game');
let play_game = require('./controller/PlayGame/play_game');

// init_game().then(answer => {
//     console.log("Welcome to quiz game " + answer.username);
// });
play_game(10,"General Knowledge");