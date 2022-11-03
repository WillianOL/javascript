function clicar(){
    var ini = document.querySelector('#numInicial')
    var fim = document.querySelector('#numFinal')
    var passo = document.querySelector('#numVezes')
    var res = document.querySelector('#res')

    if( ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Os dados estão incompletos. Preencha e tente novamente!')
    }else {
        res.innerHTML = ('Contando: ')
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        //Contagem crecente.
        if( i < f) {
            for(var c = i; c <= f; c += p) {
            res.innerHTML += (`${c} `)
            }
        //Contagem decrecente
        }else {
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += (`${c} `)
            }
        }   

    }
}