let init_game = require('./controller/InitGame/init_game');
let play_game = require('./controller/PlayGame/play_game');
let save_game = require('./controller/SaveGame/save_game');
let fs = require('fs');

init_game().then(async function(info){

    console.log("Welcome to quiz game " + info.username + '\n');
    
    let play_game_process = await play_game(info.number_of_questions, info.quiz_category);

    play_game_process.ask.then(function(all_answers){
        save_game(info, play_game_process.all_data, all_answers);
    });
});
// function check_exist(file_name){
//     return new Promise(function(resolve,reject){
//         fs.stat(file_name,function(err){
//             resolve(err);
//         });
//     })
// }
// check_exist('random.json').then(function(err){
//     if(err){
//         console.log("a");
//     }
//     else{
//         console.log("b");
//     }
// })