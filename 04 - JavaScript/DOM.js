var titulo = document.getElementById("titulo");
console.log(titulo.tagName = ": " + titulo.innerHTML);

var array = document.getElementsByName("categoria");
for (var i = 0; i < array.length; i++) {
    console.log(array[i].tagName + ": " + array[i].id);
}

array = document.getElementsByTagName("label");
for (var i = 0; i < array.length; i++) {
    console.log(array[i].tagName + ": " + array[i].getAttribute("for"));
}

array = document.getElementsByClassName("centralizado");
for (var i = 0; i < array.length; i++) {
    console.log(array[i].tagName + ": " + array[i].id);
}

var formulario = document.querySelector("body > form");
console.log(formulario.tagName + ": " + formulario.getAttribute("action"));

array = document.querySelectorAll("label");
for (var i = 0; i < array.length; i++) {
    console.log(array[i].tagName + ": " + array[i].getAttribute("for"));
}