let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let message = document.getElementById("message");

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

//implement new functions here
function setHiddenFields(){

    answer = Math.floor(Math.random() * 9999).toString();
    if(answer.length <4){
        for(let i = 0; i<answer.length; i++){
            answer = "0"+ answer;
        }
    }
    attempt.value = 0;

}

function setMessage(message){
 message.innerHTML = message;
}