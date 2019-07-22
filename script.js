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

let rockBack_img = document.createElement('img');
rockBack_img.src = "./img/rock-back.png";
let paperBack_img = document.createElement('img');
paperBack_img.src = "./img/paper-back.png";
let scissorsBack_img = document.createElement('img');
scissorsBack_img.src = "./img/scissors-back.png";

rockBack_img.style.visibility = 'hidden';
paperBack_img.style.visibility = 'hidden';
scissorsBack_img.style.visibility = 'hidden';

rockBack_img.style.zindex = -1;
paperBack_img.style.zindex = -1;
scissorsBack_img.style.zindex = -1;
rockBack_img.style.position = 'absolute';
paperBack_img.style.position = 'absolute';
scissorsBack_img.style.position = 'absolute';
rockBack_img.style.right = 0;
paperBack_img.style.right = 0;
scissorsBack_img.style.right = 0;
rockBack_img.style.top = 0;
paperBack_img.style.top = 0;
scissorsBack_img.style.top = 0;


rock_div.appendChild(rockBack_img);
paper_div.appendChild(paperBack_img);
scissors_div.appendChild(scissorsBack_img);


rock_div.onmouseover = () => {
    rock_img.style.visibility = 'hidden';
    rockBack_img.style.visibility = 'visible';
};
paper_div.onmouseover = () => {
    paper_img.style.visibility = 'hidden';
    paperBack_img.style.visibility = 'visible';
};
scissors_div.onmouseover = () => {
    scissors_img.style.visibility = 'hidden';
    scissorsBack_img.style.visibility = 'visible';
};
rock_div.onmouseout = () => {
    rock_img.style.visibility = 'visible';
    rockBack_img.style.visibility = 'hidden';
};
paper_div.onmouseout = () => {
    paper_img.style.visibility = 'visible';
    paperBack_img.style.visibility = 'hidden';
};
scissors_div.onmouseout = () => {
    scissors_img.style.visibility = 'visible';
    scissorsBack_img.style.visibility = 'hidden';
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



