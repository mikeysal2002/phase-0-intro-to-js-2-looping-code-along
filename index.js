// Code your solutions in this file


function writeCards(name, event){
const messages = [];

    for (let i = 0; i < name.length; i++) {
       const message = (`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
        messages.push(message);
    }
    return messages;
}

function countDown(i){
    var ret = i;
    while (i >= 0){
        console.log(i)
        --i;
    }

    return ret;

}


