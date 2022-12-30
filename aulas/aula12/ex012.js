let agora = new Date()
let hora = agora.getHours() //Pega a hora exata do usuário

console.log(`Agora são ${hora} horas`)
if( hora <= 12){ //Se a hora for menor ou igual a 12, mostrar essa mensagem
    console.log(`Bom dia!`)
} else if( hora <= 17){ //Se a hora for menor ou igual a 17, mostrar essa mensagem
    console.log(`Boa tarde!`)
} else if( hora <= 24){ //Se a hora for menor ou igual a 24, mostrar esssa mensagem
    console.log(`Boa noite!`)
} else{
    console.log("Opa! Parece que este horário está incorreto. Tente novamente") //Mensagem para caso a hora seja invalida ou não preenchida
}
