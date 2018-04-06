let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let message = document.getElementById("message");
let result = document.getElementById("result");
let guessNum = document.getElementById('guess')

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(!validateInput(input)){
        return false;
    } else{attempt++;}
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

function setMessage(input){
 message.innerHTML = input;
}

function validateInput(input){
    if(input.length = 4){
        return true;
    } else{
        setMessage("Guesses must be exactly 4 characters long.");
        return false;
    }
}

function getResults(input){
result.innerHTML ='<span class="col-md-6" id ="result"> + input + </span>';

}