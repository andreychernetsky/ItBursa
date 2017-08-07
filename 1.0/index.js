var button = document.querySelector("button");
var cells = document.querySelectorAll(".cell");
var message = document.querySelector(".winner-message");
var step = 0;

button.addEventListener("click", function(){
    for(var i = 0; i < cells.length; i++){
        cells[i].classList.remove("x");
        cells[i].classList.remove("o");
    }
    message.innerText = "";
    step = 0;
})

for(var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function(){
        if(!this.classList.contains("x") && !this.classList.contains("o") && !getWinner()) {
            step++;
            if(step & 1) {
                this.classList.add("x"); 
            } else {
                this.classList.add("o");
            }
            
            var win = getWinner();
            if(win) {
                if(win === "x") {
                    message.innerText = "Крестик победил";
                } else {
                    message.innerText = "Нолик победил";
                }

            }
            
            if(step == 9) {
                message.innerText = "Ничья";
            }
         }
    }) 
}