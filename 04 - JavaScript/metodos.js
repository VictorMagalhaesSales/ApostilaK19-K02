var conta = {
    saldo: 0,
    deposita: function(valor){
        this.saldo += valor;
    }
}
conta.deposita(550);

console.log(conta.saldo);