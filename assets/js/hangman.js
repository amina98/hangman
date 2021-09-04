const words = [
    "frame",
    "anything",
    "filled",
    "castle",
    "demand",
    "force",
    "itself",
    "english",
    "already",
];
let randomWord = "";
let selectedLetter = [];
let word = [];
let text="";
let mistake = 0;
function selectRandomWord() {
    randomWord = words[Math.floor(Math.random() * words.length)];
    console.log(randomWord);
    const letters = document.querySelectorAll(".letter");
    letters.forEach((item) => {
        item.addEventListener("click", clickHandler);
        window.addEventListener("keydown",keyHandler);
    });
}
function setDash() {
    const spilitedWord = randomWord.split("");
    let mapedWord = spilitedWord.map(item => {
        if(selectedLetter.indexOf(item)>=0){
            return item;
        }else{
            return "-";
        }
    }
    );
    text = mapedWord.join("");
    document.querySelector(".word").querySelector("p").innerText = text;
}
function wordHandler(event) {
    if (selectedLetter.indexOf(event) === -1) {
        selectedLetter.push((event).toLowerCase());
    }
    document.getElementById(event).className = "used";
    if(randomWord.indexOf(event.toLowerCase())>=0){
        setDash()
        checkWin(text);

    }else{
        mistake++;
        changeHangmanImage(mistake);
        checkLose(mistake)
    }
    
}
function changeHangmanImage(mistake){
    if(mistake<=6)
        document.querySelector(".hangmanImg").querySelector("img").src = `img/hangman/hangman${mistake}.png`;
}
function checkLose(mistake){
    const loseDisplay = document.querySelector(".lose-bg");
    const wordDisplay = document.querySelector(".lose").querySelector("p");
    if (mistake ==6){
        loseDisplay.style.display = "block";
        wordDisplay.innerText = randomWord;
    }
}
function checkWin(text){
    const winDisplay = document.querySelector(".win-bg");
    text == randomWord ? winDisplay.style.display = "block":null;
}
function clickHandler(event){
    wordHandler(event.target.id);
}
function keyHandler(event){
    wordHandler(event.key)
}
selectRandomWord();
setDash();
