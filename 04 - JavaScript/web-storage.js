function atualizaSaudacao(){
    var saudacao = document.getElementById("saudacao");
    if(localStorage.nome){
        saudacao.innerHTML = "Olá " + localStorage.nome;
    }else{
        saudacao.innerHTML = null;
    }
};

window.onload = function(){
    var botaoEnviar = document.getElementById("botaoEnviar");
    botaoEnviar.onclick = function(){
        var campoNome = document.getElementById("campoNome");
        localStorage.nome = campoNome.value;
        atualizaSaudacao();
    }

    var botaoLimpar = document.getElementById("botaoLimpar");
    botaoLimpar.onclick = function(){
        localStorage.removeItem("nome");
        atualiazSaudacao();
    };

    atualizaSaudacao();
}
