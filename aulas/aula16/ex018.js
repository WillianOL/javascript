function CalNota(nota){ //Função para verificar nota, com o parâmetro 'nota'
    if(nota < 6){ //Se a nota for menor que 6, retornar REPROVADO para a chamada
        return 'REPROVADO'
    }else if(nota >= 6 && nota < 10){
        return 'APROVADO' //Se ela for maior que 6 e menor que 10, retortar APROVADO para a chamada
    }
}

console.log(CalNota(10)) //Chamada para a ação acontecer.