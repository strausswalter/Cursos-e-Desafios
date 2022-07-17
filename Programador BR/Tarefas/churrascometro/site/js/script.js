// Carne - 400 gr por pessoa + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml
// Crianças valem por 0,5


let inputAdultos = document.querySelector('#adultos');
let inputCriancas = document.querySelector('#criancas');
let inputDuracao = document.querySelector('#duracao');


let resultado = document.querySelector('#resultado');

function calcular(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    let qtdTotalCarne = 0;
    let qtdTotalCervejaLata = 0;
    let qtdTotalRefrigerante = 0;



    
    if (duracao < 6){
        qtdTotalCarne = ((parseInt(adultos) * 400) + (parseInt(criancas) * 400 / 2)) / 1000;
        qtdTotalCervejaLata = Math.ceil((parseInt(adultos) * 1200) / 355);
        qtdTotalRefrigerante = ((parseInt(adultos) * 1000) + (parseInt(criancas) * 1000 / 2)) / 1000;
    } else {
        qtdTotalCarne = ((parseInt(adultos) * 650) + (parseInt(criancas) * 650 / 2)) / 1000;
        qtdTotalCervejaLata = Math.ceil((parseInt(adultos) * 2000) / 355);
        qtdTotalRefrigerante = ((parseInt(adultos) * 1500) + (parseInt(criancas) * 1500 / 2)) / 1000;
        console.log('passou no else');
    };
    resultado.innerHTML = "<p>Total de carne: " + qtdTotalCarne + " kg</p><p>Total de cerveja: " + qtdTotalCervejaLata + " latas</p>" +
                            "<p>Total de refrigerantes: " + qtdTotalRefrigerante + " litros</p>";

};


