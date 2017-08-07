var list = document.querySelector("ul");
var input = document.querySelector("input");
var button = document.querySelector("button");
var state = {
    items: []
};

input.focus();

var tasks = localStorage.getItem("tasks");
if(tasks) {
    state = JSON.parse(tasks);
}

update();

function update(){
    list.innerHTML = "";
    for(var i = 0; i < state.items.length; i++) {
        var li = document.createElement("li");
        li.innerText = state.items[i];
        list.appendChild(li);  
    }
}

button.addEventListener("click", function() {
    if(input.value !== "") {
        var l = input.value;
        input.value = "";
        input.focus();
        state.items.push(l);
        state.items.sort();
        localStorage.setItem("tasks", JSON.stringify(state));
        update();
    }
});

window.addEventListener("keydown", function(event){
    if(event.keyCode == 13 && input.value !== "") {
        var l = input.value;
        input.value = "";
        input.focus();
        state.items.push(l);
        state.items.sort();
        localStorage.setItem("tasks", JSON.stringify(state));
        update();
    }
});