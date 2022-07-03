
//Area de Mensagens:
const _campoNomeObrigatorio = 'Campo Nome Obrigatório';
const _campoCpfObrigatorio = 'Campo CPF Obrigatório';
const _campoDtNascObrigatorio = 'Campo Data de Nascimento Obrigatório';
const _campoLogradouroObrigatorio = 'Campo Logradouro Obrigatório';
const _campoNumeroObrigatorio = 'Campo Numero Obrigatório';
const _campoCidadeObrigatorio = 'Campo Cidade Obrigatório';
//faltou bairro (campo não obrigatório)
const _campoEmailObrigatorio = 'Campo Email Obrigatório';
const _campoSenhaObrigatorio = 'Campo Senha Obrigatório';
const _campoConfSenhaObrigatorio = 'Campo Confirme sua Senha Obrigatório';
const _SenhasDiferentes = 'Campo Senha e Confirme sua Senha estão diferentes';
const _campoNumeroInvalido = 'Campo Número Inválido';
const _campoCpfInvalido = 'Campo CPF Inválido';

window.addEventListener('load', function(){

    document.querySelector('#btnEnviar').addEventListener('click', function(){

        if (ValidaCadastro()){
            //envia o form
            document.querySelector('#formCadastro').submit();
        };

    });//Fim do evento de click do botão enviar

    let arrElem = document.querySelectorAll('input');
    //console.log(arrElem);
    for(i=0; i < (arrElem.length-1); i++){
        //console.log(arrElem[i]);

        arrElem[i].addEventListener('focus', function(){
            DestacaFocus(this.id);
        });
        arrElem[i].addEventListener('blur', function(){
            DestacaSaida(this.id);
        });
    

    }

    //document.querySelector('#nome').addEventListener('focus', function(){
    //    DestacaFocus('nome');
    //});
    //document.querySelector('#nome').addEventListener('blur', function(){
    //    DestacaSaida('nome');
    //});



});//Fim do evento de load da página


function DestacaSaida(id){
    //document.querySelector('#'+id).style.backgroundColor = '#FFF';
    let elem = document.querySelector('#'+id);
    if(elem.value == '' && elem.id != 'bairro'){
        elem.className = 'destacaErro';
    }else{
        elem.className = 'destacaNormal';
    }
}//Fim do DestacaSaida()


function DestacaFocus(id){
    //document.querySelector('#'+id).style.backgroundColor = 'yellow';
    document.querySelector('#'+id).className = 'destacaFocus';

}//Fim do DestacaFocus()




function ValidaCadastro(){

    //console.log('Clicou no btnEnviar');

    let erroAlert = '', erroHtml = '';

    let nome = document.querySelector('#nome').value;
    if(nome == ''){
        erroAlert += _campoNomeObrigatorio + '\n';
        erroHtml += _campoNomeObrigatorio + '<br>';
    }
    let cpf = document.querySelector('#cpf').value;
    if(cpf == ''){
        erroAlert += _campoCpfObrigatorio + '\n';
        erroHtml += _campoCpfObrigatorio + '<br>';
    } else if(!ValidaCpf(cpf)){
        erroAlert += _campoCpfInvalido + '\n';
        erroHtml += _campoCpfInvalido + '<br>';
    }
    let dtnasc = document.querySelector('#dtnasc').value;
    if(dtnasc == '') {
        erroAlert += _campoDtNascObrigatorio + '\n';
        erroHtml += _campoDtNascObrigatorio + '<br/>';
    }
    let logradouro = document.querySelector('#logradouro').value;
    if(logradouro == '') {
        erroAlert += _campoLogradouroObrigatorio + '\n';
        erroHtml += _campoLogradouroObrigatorio + '<br/>';
    }
    let numero = document.querySelector('#numero').value;
    if (numero == ''){
        erroAlert += _campoNumeroObrigatorio + '\n';
        erroHtml += _campoNumeroObrigatorio + '<br/>';
    } else if (isNaN(numero)){
        erroAlert += _campoNumeroInvalido + '\n';
        erroHtml += _campoNumeroInvalido + '<br/>';
    }
    let cidade = document.querySelector('#cidade').value;
    if(cidade == '') {
        erroAlert += _campoCidadeObrigatorio + '\n';
        erroHtml += _campoCidadeObrigatorio + '<br/>';
    }
    let email = document.querySelector('#email').value;
    if(email == '') {
        erroAlert += _campoEmailObrigatorio + '\n';
        erroHtml += _campoEmailObrigatorio + '<br/>';
    }
    let senha = document.querySelector('#senha').value;
    if(senha == '') {
        erroAlert += _campoSenhaObrigatorio + '\n';
        erroHtml += _campoSenhaObrigatorio + '<br/>';
    }
    let confSenha = document.querySelector('#confSenha').value;
    if (confSenha == '') {
        erroAlert += _campoConfSenhaObrigatorio + '\n';
        erroHtml += _campoConfSenhaObrigatorio + '<br/>';
    }else if(senha != confSenha){
        erroAlert += _SenhasDiferentes + '\n';
        erroHtml += _SenhasDiferentes + '<br/>';
    }

    if(erroAlert != ''){
        alert(erroAlert);
        document.querySelector('#divRetornoMsg').innerHTML = erroHtml;
        return false;
    }

    //Passou pelas validações
    return true;


}//Fim do ValidaCadastro()

function ValidaCpf(pCpf){
    //Criar variaveis
    let soma, resto, dv1, dv2, i, j;

    //Testo se o CPF tem 11 caracteres:
    if(pCpf.length != 11){
        return false;
    }

    //Testo se o numero de CPF é igual aos numeros inválidos:
    if(
        pCpf == 12345678909 ||
        pCpf == 00000000000 ||
        pCpf == 11111111111 ||
        pCpf == 22222222222 ||
        pCpf == 33333333333 ||
        pCpf == 44444444444 ||
        pCpf == 55555555555 ||
        pCpf == 66666666666 ||
        pCpf == 77777777777 ||
        pCpf == 88888888888 ||
        pCpf == 99999999999 ||){
        return false;
    }
    
    //Calculo do 1o Digito Verificador (forma manual):
    //012345678910 (posições do CPF)
    //08458188724 (ex. CPF)
    soma = (pCpf.chartAt(0)*10) +
                (pCpf.chartAt(1)*9) +
                (pCpf.chartAt(2)*8) +
                (pCpf.chartAt(3)*7) +
                (pCpf.charAt(4)*6) + 
                (pCpf.charAt(5)*5) + 
                (pCpf.charAt(6)*4) + 
                (pCpf.charAt(7)*3) + 
                (pCpf.charAt(8)*2);
    
    resto = soma % 11;

    if(resto <= 1){
        dv1=0;
    }else{
        dv1=11-resto;
    }

    //Testar se dv1 digitado é igual ao dv1 encontrado
    if(pCpf.charAt(9) != dv1){
        return false;
    }

    //Calculo do 2o Digito Verificador (automatizado):
    soma = 0, j = 11;
    for(i=0; i<10; i++){
        soma += (pCpf.charAt(i)*j);
        j--;
    }
    resto = soma % 11;
    dv2 = (resto <= 1) ? 0 : 11-resto;

    //testo se dv2 digitado é igual ao dv2 encontrado:
    if(pCpf.charAt(10) != dv2){
        return false;
    }

    //passou pela validação:
    return true;
    

    

}//Fim do ValidaCpf()