const userScore = 0;
const cpuScore = 0;

const userScore_span = document.getElementById('user-score');
const cpuScore_span = document.getElementById('cpu-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');

const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

const rock_img = document.getElementById('r');
const paper_img = document.getElementById('p');
const scissors_img = document.getElementById('s');


rock_div.onmouseover = () => {
    rock_img.style.visibility = 'hidden';
};
paper_div.onmouseover = () => {
    paper_img.style.visibility = 'hidden';
};
scissors_div.onmouseover = () => {
    scissors_img.style.visibility = 'hidden';
};
rock_div.onmouseout = () => {
    rock_img.style.visibility = 'visible';
};
paper_div.onmouseout = () => {
    paper_img.style.visibility = 'visible';
};
scissors_div.onmouseout = () => {
    scissors_img.style.visibility = 'visible';
};

function main() {
    rock_div.addEventListener('click', function() {
    game('rock');
    });
    paper_div.addEventListener('click', function() {
    game('paper');
    });
    scissors_div.addEventListener('click', function() {
    game('scissors');
    });
}



