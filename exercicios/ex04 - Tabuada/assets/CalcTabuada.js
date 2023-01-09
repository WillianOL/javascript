let BtnCalc = document.getElementById('BtnCaluclar')
BtnCalc.addEventListener('click', CalcularTabuada)

function CalcularTabuada(){
    let resultado = document.getElementsByClassName('tabuada')[0]
    let NumberT = document.getElementById('TxtNumber')
    let n = Number(NumberT.value)

    if( NumberT.value == ''){
        alert('[ERRO] Digite um número para gerar a tabuada!')
    } else{
        resultado.innerHTML = `Tabuada do ${n} <br>`
        for( let c = 1; c <= 10; c++ ){
            let res = n * c
            resultado.innerHTML += `${n} x ${c} = <strong>${res}</strong> <br>`
        }
    }
}