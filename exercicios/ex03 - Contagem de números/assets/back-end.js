let EventClick = document.getElementById('BtnContar');
EventClick.addEventListener('click', ContarNumber);

function ContarNumber(){
    let resultado = document.getElementById('resultado')
    let NumbInicio = document.getElementById('NumberInicio')
    let NumbFim = document.getElementById('NumberFim')
    let NumbPasso = document.getElementById('NumberPasso')

    if( NumbPasso.value == 0  ){
        alert('Como o passo não foi definido, considera-se passo: 1')
        NumbPasso = 1
    } else{
        let i = Number(NumbInicio.value)
        let f = Number(NumbFim.value)
        let p = Number(NumbPasso.value)
        resultado.innerHTML = 'Contando...'
        if( i < f){
            for(let c = i; c <= f; c += p){
                resultado.innerHTML += ` ${c} \u{1F449}`
            }
        } else if( i > f){
            for(let c = i; c >= f; c -= p){
                resultado.innerHTML += `${c} \u{1F449}`
            }
        }
    }
}