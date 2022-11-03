function clicar(){
    var temp = prompt('Digite uma temperatura desejada (Celsius) :')
    var res = document.querySelector('#res')
    var t = Number(temp)

    if(t == 0){
        res.innerHTML = '<strong>Os dados estão incompletos, preencha novamente!</strong>'
    } else {
        var kelvin = t + 273
        res.innerHTML = `A temperatura de ${t}C° é:   `
        res.innerHTML += `${kelvin} Kelvins.`
    }
}