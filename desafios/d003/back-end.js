function clicar(){
    var n = Number(prompt('Digite um número: '))
    var sucess = n + 1
    var antece = n - 1
    prompt(`Depois de ${n} é ${sucess}. Antes de ${n} é ${antece}.`)
}