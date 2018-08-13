var numeros = [];
for (var i = 0; i < 10; i++) {
    numeros.push(i + 1);
}

for (var i = 0; i < 10; i++) {
    console.log(numeros[i]);
}

console.log("--------------")

var n = 0;
var n2 = 0;
for (var i = 0; i < 10; i++) {
    n = Math.random() * 10;
    n2 = Math.floor(n);
    numeros[Math.floor(Math.random() * 10)] = n2;
}

for (var i = 0; i < 10; i++) {
    console.log(numeros[i]);
}

