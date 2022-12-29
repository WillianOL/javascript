let agora = new Date()
let hora = agora.getHours()
console.log(`Agora são ${hora} horas`)
if( hora <= 12){
    console.log(`Bom dia!`)
} else if( hora <= 17){
    console.log(`Boa tarde!`)
} else if( hora <= 24){
    console.log(`Boa noite!`)
} else{
    console.log("Opa! Parece que este horário está incorreto. Tente novamente")
}
