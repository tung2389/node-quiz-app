let fs = require('fs');
let generate_info = require('./generate_info');

function check_exist(file_name){
    return new Promise(function(resolve,reject){
        fs.stat(file_name,function(err){
            resolve(err);
        });
    })
}

async function save_game(info, all_data, all_answers){
    let file_data = generate_info(info, all_data, all_answers);
    let i = 0;
    let ok = false;
    while(ok === false){
        let file_name;

        if(i === 0){
            file_name = 'result.json';
        }

        else{
            file_name = 'result' + i + '.json';
        }

        await check_exist(file_name).then(function(err){
            //If file doesn't exist
            if(err){
                fs.writeFile(file_name,file_data,function(err){
                    if(err){
                        console.log(err);
                    }
                    else{
                        console.log('\n Your result has been saved in ' + file_name);
                    }
                });
                ok= true;
            }
        });

        i++;
    }
}

module.exports = save_game;