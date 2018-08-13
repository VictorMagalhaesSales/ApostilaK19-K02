var nAnt = 0;
var soma = 1;
console.log(0);
for (var i = 0; i < 30; i++) {
    console.log(soma);
    aux = soma;
    soma += nAnt;
    nAnt = aux;
}