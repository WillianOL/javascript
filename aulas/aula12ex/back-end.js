function checar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var conteiner = document.getElementById('conteiner')
    var caixahr = document.getElementById('caixahr')
    var horas = Number(caixahr.value)
    msg.innerHTML = `Agora são <strong>${horas} horas</strong>`



    if (horas > 0 && horas <= 12){
        img.src = 'imagens/manhã.jpg'
        img.style.display = 'block'
        conteiner.style.backgroundColor = 'rgb(235, 218, 53)'
    } else if (horas > 12 && horas <= 18){
        img.src = 'imagens/tarde.jpg'
        conteiner.style.backgroundColor = 'rgb(252, 175, 59)'
        img.style.display = 'block'
    } else if(horas > 24){
        img.style.display = 'none'
        msg.innerHTML = 'Opa, essa hora não existe... Tente novamente!'
    } else{
        img.src = 'imagens/noite.jpg'
        conteiner.style.backgroundColor = 'rgb(34, 28, 36)'
        conteiner.style.color = 'white'
        msg.style.color = 'white'
        img.style.display = 'block'
    }
}


