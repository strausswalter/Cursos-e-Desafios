//Area de Mensagens:
const _campoNomeObrigatorio = 'Campo Nome Obrigatório';
const _campoCpfObrigatorio = 'Campo CPF Obrigatório';
const _campoDtNascObrigatorio = 'Campo Data de Nascimento Obrigatório';
const _campoLogradouroObrigatorio 'Campo Logradouro Obrigatório';
const _campoNumeroObrigatorio = 'Campo Numero Obrigatório';
const _campoCidadeObrigatorio = 'Campo Cidade Obrigatório';
const _campoEmailObrigatorio = 'Campo Email Obrigatório';
const _campoSenhaObrigatorio = 'Campo Senha Obrigatório';
const _campoConfSenhaObrigatorio 'Campo Confirme sua Senha Obrigatório';


window.addEventListener('load', function(){
    document.querySelector('#btnEnviar').addEventListener('click', function(){
        ValidaCadastro();
    })//Fim do evento de click do botão enviar
});//Fim do evento de load da página

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
    }

    if(erroAlert != ''){
        alert(erroAlert);
        document.querySelector('#divRetornoMsg').innerHTML = erroHtml;
        return false;
    }

    //Passou pelas validações
    return true;


}//Fim do ValidaCadastro()