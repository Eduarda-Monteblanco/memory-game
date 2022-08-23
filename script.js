const moves = document.getElementById("moves-count");
const timeValue = document.getElementById('time');
const startButton = document.getElementById("start");
const stopButton = document.getElementById('stop');
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container")

let cards;
let interval;
let firstCard = false;
let secondCard = false;

// items array

const items = [
    { name: "bee", image: "./images/bee.png" },
    { name: "crocodile", image: "./images/crocodile.png" },
    { name: "macaw", image: "./images/macaw.png" },
    { name: "gorilla", image: "./images/gorilla.png" },
    { name: "tiger", image: "./images/tiger.png" },
    { name: "monkey", image: "./images/monkey.png" },
    { name: "chameleon", image: "./images/chameleon.png" },
    { name: "piranha", image: "./images/piranha.png" },
    { name: "anaconda", image: "./images/anaconda.png" },
    { name: "sloth", image: "./images/sloth.png" },
    { name: "cockatoo", image: "./images/cockatoo.png" },
    { name: "toucan", image: "./images/toucan.png" },
  ];

  let second = 0, minutes = 0;

let movesCount = 0, winCount = 0;

const timeGenerator = () => {
    seconds += 1;

    if(seconds >= 60) {
        minutes += 1;
        seconds = 0
    }

    let secondsValue = seconds < 10 ? `0${seconds}` : seconds;

    let minutesValue = minnutes < 10 ? `0${minutes}` : minutes;

    timeValue.innerHTML = `<span>Time:<span> ${minutesValue}:${secondsValue}`; 
}

const movesCounter = () => {
    movesCount += 1;
    moves.innerHTML = `<span>Moves:<span>${movesCount}`;
}

const generateRandom = (size = 4) => {
    let tempArray = [ ...items];
    let cardValues = [];
    size = (size*size)/2;
    for(let i = 0; i < size; i++) {
        const randomIndex = Math.floor(Math.random() * tempArray.length)
        cardValues.push(tempArray[randomIndex])
        tempArray.splice(randomIndex, 1)
    }
    return cardValues;
};

const matrixGenerator = (cardValues, size = 4) => {
    gameContainer.innerHTML = "";
    cardValues = [...cardValues, ...cardValues]
    cardValues.sort(() => Math.random() - 0.5)

    for(let i = 0; i < size*size; i++) {
        gameContainer.innerHTML += `<div class="card-container" data-card-value="${cardValues[i].name}">
            <div class="card-before">?</div>
            <div class="card-after">
            <img src="${cardValues[i].image}" class="image"/> </div>
        </div>`
    }

    gameContainer.style.gridTemplateColumns = `repeat(${size}, auto)`
}

const initializer = () => {
    result.innerText = "";
    winCount = 0
    let cardValues = generateRandom();
    console.log(cardValues)
    matrixGenerator(cardValues);
}

initializer();