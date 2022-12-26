let idade = 19
console.log(`Você tem ${idade} anos.`)
if( idade < 16){ //Se a idade for menor que 16 anos, mostrar a mensagem abaixo
    console.log('Não vota')
} else if( idade < 18 || idade >= 65){ //Agora, se ela for menor que 18 OU mair que 65, mostrar a mensagem abaixo
    console.log('Voto opcional')
} else{ //Se as anteriores forem falsas, mostrar a ultima mensagem.
    console.log("Voto obrigatorio")
}