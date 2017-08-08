var input = document.querySelector("input");
var error = document.querySelector(".error-message");
var generateField = document.querySelector(".generateField");
var startGame = document.querySelector(".startGame");
var mainGame = document.querySelector(".mainGame");
var field = document.querySelector('.field');
var button = document.querySelector(".startNewGame");
var message = document.querySelector(".winner-message");
var step = 0;
var n = input.value;
var state = {
    n: 0,
    x: [],
    o: []
};

// клик по кнопке "Создать поле"

generateField.addEventListener("click", function() {
    var n = input.value; 
    n = +n;
    if(n < 5 || n > 15 || !Number.isInteger(n)) {
        error.innerText = "Вы ввели некорректное число";
    } else {
        startGame.style.display = "none";
        mainGame.style.display = "block";
        state.n = n;
        localStorage.setItem("data", JSON.stringify(state));
        generate(n);
    }
    
});


var cells = document.querySelectorAll(".cell");

// код игры

field.addEventListener("click", function(e) {
    if(e.target.classList.contains("cell") && !e.target.classList.contains("x") && !e.target.classList.contains("o") && !getWinner()) {
        step++;
        if(step & 1) {
            e.target.classList.add("x");
            state.x.push(e.target);
            localStorage.setItem("data", JSON.stringify(state));
        } else {
            e.target.classList.add("o");
            state.o.push(e.target);
        }

        var win = getWinner();
        if(win) {
            if(win === "x") {
                message.innerText = "Крестик победил";
            } else {
                message.innerText = "Нолик победил";
            }
        }

        if(step == n*n) {
            message.innerText = "Ничья";
        }
    }
});

// функция генерации поля игры

function generate(num) {
    
    for(var h = 0; h < num; h++) {
        var row = document.createElement("div");
        field.appendChild(row);
        row.classList.add("row");

        for(var j = 0; j < num; j++) {
            var cell = document.createElement("div");
            row.appendChild(cell);
            cell.classList.add("cell");
        } 
    } 
}

// клик по кнопке "Новая игра"

button.addEventListener("click", function newGame(){
    startGame.style.display = "block";
    mainGame.style.display = "none";
    for(var i = 0; i < cells.length; i++){
        cells[i].classList.remove("x");
        cells[i].classList.remove("o");
    }
    message.innerText = "";
    step = 0;
    state = {
        n: 0,
        x: [],
        o: []
    };
    localStorage.setItem("data", JSON.stringify(state));
});


// функция запускающая функцию update() при перезагрузке страницы

window.onload = function() {
    var loaded = sessionStorage.getItem('loaded');
    if(loaded) {
        update();
    } else {
        sessionStorage.setItem('loaded', true);
    }
}

// функция восстановления предыдущего состояния игры

var data = localStorage.getItem("data");
if(data) {
    state = JSON.parse(data);
}

function update() {
    startGame.style.display = "none";
    mainGame.style.display = "block";
    generate(state.n);
    
    for(var m = 0; m < state.x.length; m++) {
        state.x[m].classList.add("x");
    }
    
    for(var n = 0; m < state.o.length; n++) {
        state.o[n].classList.add("o");
    }
}