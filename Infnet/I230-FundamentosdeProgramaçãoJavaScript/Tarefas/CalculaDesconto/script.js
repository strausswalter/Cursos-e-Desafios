//Area de Mensagens:
const _SalarioInvalido = 'Salário Inválido';



window.addEventListener('load', function(){
    document.querySelector('#btnCalcula').addEventListener('click', function(){
        CalculaDesconto();
    })
});

function CalculaDesconto(){
    //crio a variavel desconto:
    let desconto;

    //pego o valor do salario:
    let salario = parseFloat(document.querySelector('#salario').value);

    //testo se o valor do salario é menor ou igual a 0 ou se não é um número:
    if ((salario <= 0) || (isNaN(salario))){
        alert(_SalarioInvalido);
        return false;
    }
    if (salario <= 1000){
        desconto = salario * 0.10;
    } else if (salario <= 2000){
        desconto = salario * 0.15;
    } else if (salario <= 3000){
        desconto = salario * 0.20;
    } else {
        desconto = salario * 0.25;
    }
    let msg = 'O valor do salário é de R$' + salario + ', o valor do desconto calculado foi R$ ' + desconto + ', o valor líquido é de R$ ' + (salario - desconto);

    alert(msg);
    document.querySelector('#divResultado').innerHTML = msg;
}
