var curso = {sigla: "k11", nome: "Orientação a Objetos em Java"};

var novo_curso = Object.create(curso);

console.log(novo_curso.sigla);
console.log(novo_curso.nome);