var cursos = ["K11","K12","K21","K22","K23"];

var curso = cursos.shift();

console.log("Elemento removido: " + curso);

for (var i = 0; i < cursos.length; i++) {
    console.log(cursos[i]);
    
}