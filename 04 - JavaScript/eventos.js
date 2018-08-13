window.onload = function(event) {
    console.log("dcoumento carregado");
    var input = document.getElementById("campo-nome");
    input.onfocus = function(){
        console.log("focus");
    };

    input.addEventListener("change",function(){
        console.log("change");
    });

    input.onblur = function(){
        console.log("blur");
    };

    input.onselect = function(){
        console.log("select");
    };

    input.onkeydown = function(){
        console.log("keydown");
    };

    input.onkeypress = function(){
        console.log("keypress");
    };

    input.onkeyup = function(){
        console.log("keyup");
    };

    var div = document.querySelector("div");

    div.onmousedown = function(){
        console.log("mousedown");
    };

    div.onmouseup = function(){
        console.log("mouseup");
    };

    div.onclick = function(){
        console.log("click");
    };

    div.ondblclick = function(){
        console.log("dblclick");
    };

    div.onmousemove = function(event){
        var x = event.clientX;
        var y = event.clientY;
        console.log("mousemove: (" + x + ", " + y + ")");
    };

    div.onmouseover = function(){
        console.log("mouseover");
    };

    div.onmouseout = function(){
        console.log("onmouseout");
    };

};    

function resize(){
    var w = window.outerWidth;
    var h = window.outerHeight;

    console.log("resize(" + w + "), " + h + ")");
}

function scroll(){
    var x = window.pageXOffset;
    var y = window.pageYOffset;

    console.log("scroll(" + x + ", " + y + ")");
}




