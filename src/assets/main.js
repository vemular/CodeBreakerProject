let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let message = document.getElementById("message");
function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

//implement new functions here
function setHiddenFields(){
        answer.value = Math.floor(Math.random() * 9999);
        attempt.value = 0;

}

function setMessage(input){
 message.innerHTML = input;
}