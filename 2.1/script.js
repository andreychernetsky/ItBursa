var input1 = document.createElement("input");
var input2 = document.createElement("input");
var button = document.createElement("button");
var body = document.querySelector("body");
var error1 = document.createElement("div");
var error2 = document.createElement("div");
var result = document.createElement("div");

button.innerText = "Посчитать";
body.appendChild(input1); 
body.appendChild(error1);
body.appendChild(input2); 
body.appendChild(error2);
body.appendChild(button); 
body.appendChild(result); 



button.addEventListener("click", function() {
    var num1 = input1.value;
    if(!isNumeric(num1)) {        
        error1.classList.add("error-message")
        error1.innerText = "Это не число";
        result.innerText = "";
    } else if(isNumeric(num1)) {
        num1 = +num1; 
        error1.innerText = "";
    }  
    
    var num2 = input2.value;
    if(!isNumeric(num2)) {        
        error2.classList.add("error-message")
        error2.innerText = "Это не число";
        result.innerText = "";
    } else if(isNumeric(num2)) {
        num2 = +num2; 
        error2.innerText = "";
    } 
    
    if(isNumeric(num1) && isNumeric(num2)) {
        result.classList.add("result");
        result.innerText = num1 + num2;
    }
});


function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

