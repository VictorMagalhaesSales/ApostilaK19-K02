var curso = {sigla: "K11", nome: "Orientação a Objetos em Java"};

var novo_curso = Object.create(curso);

novo_curso.sigla = "K12";
novo_curso.nome = "Desenvolvimento Web com JSF2 e JPA2";

console.log(novo_curso.sigla);

console.log(novo_curso.nome);

curso.sigla = "K21";
curso.nome = "Persistência com JPA2 e Hibernate";

console.log(novo_curso.sigla);

console.log(novo_curso.nome);