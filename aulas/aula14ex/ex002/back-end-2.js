function gerar(){
    var num = document.querySelector('#txtnum')
    var res = document.querySelector('#res')

    if(num.value.length == 0) {
        alert('Os dados estão INCOMPLETOS')
    }else {
        res.innerHTML = '<strong>Resultado:</strong> <br>'
        var n = Number(num.value)
        for( var c = 1; c <= 10; c++){
            var mul = n * c
            res.innerHTML += `${n} x ${c} = ${mul}<br>`
        }
    }
}