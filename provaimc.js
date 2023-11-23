function calcularimc(){
    var usuario = 1 //começando no 1 para nao se referir ao primeiro como"usuario 0"
    var terminou = false
    while(terminou == false){
        var peso = prompt("Informar peso (em kg) do usuario " + usuario + ": ");
        var altura = prompt("Informar altura(em m) do usuario " + usuario + ": ")
        var imc = peso / (altura * altura)
        var soma = 0
    if(imc < 18.5){
        alert("O usuario "+usuario+" está Abaixo do Normal");
    }
    if (imc > 18.5 && imc < 24.9){
        alert("O usuario "+usuario+" está no Peso Normal");
    }
    if (imc > 25 && imc < 29.9){
        alert("O usuario "+usuario+" está com Excesso de Peso");
    }
    if (imc > 30 && imc < 34.9){
        alert("O usuario "+usuario+" está com Obesidade Classe I");
    }
    if (imc > 35 && imc < 39.9){
        alert("O usuario "+usuario+" está com Obesidade Classe II");
    }
    if (imc > 40){
        alert("O usuario "+usuario+" está com Obesidade Classe III");
    }

    var deseja_terminar = prompt("Deseja terminar? (S/s para SIM, N/n para NÃO): ")
    if(deseja_terminar == 'S' || deseja_terminar == 's'){
        soma += imc
        var media = parseFloat(soma / usuario).toFixed(2)
        var maior = parseFloat(Math.max(imc)).toFixed(2)

        alert("Foi calculado o IMC de " + usuario + " usuarios.");
        alert("O maior imc foi " + maior);
        alert("A media dos imc foi "+ media);
        alert("O programa terminou ")
        terminou = true;
    }
    if(deseja_terminar == 'N' || deseja_terminar == 'n'){
        usuario = usuario + 1;
        terminou = false;
    }
    }
}
