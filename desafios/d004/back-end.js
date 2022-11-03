function clicar(){
    var produto = prompt('Qual o nome do produto que você deseja comprar? ')
    var preço = Number(prompt('Quanto esse produto custa? '))
    var dinheiro = Number(prompt('Quanto você deu para pagar? '))
    var res = preço - dinheiro
    
    prompt(`O produto que você vai comprar é um(a) ${produto}. Ele custa $${preço}, e você pagou $${dinheiro}. Esse é o seu troco: ${res}`)
}