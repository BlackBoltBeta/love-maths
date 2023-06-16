
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute('dara-type') === 'submit') {
                alert('You clicked submit');
            } else {
                let gameType = this.getAttribute('data-type');
                alert(`You clicked ${gameType}`);
            }
        });
    }
});

function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWongAnswer() {

}

function displayAditionQuestion() {

}

function displaySubtractQuestion() {
    
}

function displayMultiplyQuestion() {
    
}