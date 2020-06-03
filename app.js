//letter constructor
function Letter(letterName) {
    this.name = letterName;
}

Letter.prototype.view = function () {
    var div = document.createElement('div');
    div.classList.add('letterName');
    div.textContent = this.name;
    var audio = new Audio(`audio/${this.name}.m4a`);
    document.getElementById('letters').innerHTML = "";
    document.getElementById('letters').appendChild(div);
    audio.play();
}


let names = ["Aa", "Bb", "Cc", "Dd", "Ee", "Ff", "Gg", "Hh", "Ii", "Jj", "Kk", "Ll", "Mm", "Nn", "Oo", "Pp", "Qq", "Rr", "Ss", "Tt", "Uu", "Vv", "Ww", "Xx", "Yy", "Zz"];
var letterName;
let counter = 0;
let lettersArr = [];

function createArray() {
    for (var i = 0; i < 26; i++) {
        letterName = names[i];
        var obj = new Letter(letterName);
        lettersArr[i] = obj;
    }
    lettersArr[counter].view();
}


document.addEventListener('keydown', prevOrNext);

function prevOrNext(e) {
    if (e.code === 'ArrowRight') {
        showNext();
    } else if (e.code === 'ArrowLeft') {
        showPrev();
    }
}

function showNext() {
    if (counter !== 25) {
        counter++;
    }
    lettersArr[counter].view();
}

function showPrev() {
    if (counter !== 0) {
        counter--;
    }
    lettersArr[counter].view();
}


function playAudio() {
    var audio = new Audio(`audio/${names[counter]}.m4a`);
    audio.play();
}

createLinks();
function createLinks() {
    for (var i = 0; i < 26; i++) {
        var button = document.createElement('button');
        button.type = "button";
        button.id = `btn${names[i]}`;
        button.classList.add('letterBtn');
        button.innerText = names[i];
        button.addEventListener('click', goToLetter);
        document.getElementById('links').appendChild(button); 
    }
}

function goToLetter(e) {
    for (var i = 0; i < 26; i++) {
        if (e.target.innerText === names[i]) {
            lettersArr[i].view();
        }
    }
}