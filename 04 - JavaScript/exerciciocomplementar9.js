var numeros = [];
for (var i = 0; i < 10; i++) {
    numeros.push(Math.floor(Math.random() * 10));
}

for (var i = 0; i < 10; i++) {
    console.log(numeros[i]);
}

console.log("--------------")
numeros.sort();

for (var i = 0; i < 10; i++) {
    console.log(numeros[i]);
}

