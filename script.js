var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

css.textContent = "linear-gradient(to right, rgb(18, 180, 18) , rgb(180, 27, 248))" + ";";

var handlers = {
    setGradient: function() {
        body.style.background = 
            "linear-gradient(to right, " 
                + color1.value 
                + ", " 
                + color2.value 
                + ")";
    
        css.textContent = body.style.background + ";";
    },
    randomGradient: function() {
        body.style.background = 
            "linear-gradient(to right, rgb(18, 180, 18) , rgb(180, 27, 248))";
        color1.value = "#12B412";
        color2.value = "#B41BF8";
        css.textContent = body.style.background + ";";
    }
}

function runWithDebugger(myFunction) {
    debugger;
    myFunction();
}