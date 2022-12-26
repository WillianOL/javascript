let dia = new Date() //Comando para pegar o dia da semana, armazenado na vareavel.
let diaSem = dia.getDay() //Pegando o dia da semana, de 0 a 6 == (Domingo, segunda, terça, quarta ...)

//Usando o switch, se o dia da semana corresponder a um dos cases abaixo, ele ira executar as linhas de código do case, depois dando o break e seguindo o fluxo do código
switch( diaSem ){
    case 0:
        console.log(`Olá, hoje é Domingo.`)
        break
    case 1:
        console.log(`Olá, hoje é Segunda.`)
        break
    case 2:
        console.log(`Olá, hoje é Terça.`)
        break
    case 3:
        console.log(`Olá, hoje é Quarta.`)
        break
    case 4:
        console.log(`Olá, hoje é Quinta.`)
        break
    case 5:
        console.log(`Olá, hoje é Sexta.`)
        break
    case 6:
        console.log(`Olá, hoje é Sabado.`)
        break
    default:
        console.log('Dia INVALIDO.') //Se nenhum dos case for executado, irá executar o default
}