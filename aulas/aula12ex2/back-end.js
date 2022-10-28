function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var box_ano = document.querySelector('#box-ano')
    var res = document.querySelector('#res')

    if (box_ano.value == 0 || box_ano.value < 1750 || box_ano.value > 2023){
        res.innerHTML = ('OPA! Os dados inseridos estão incorretos. Tente novamente...')

    } else{
        var radsex = document.getElementsByName('textrad')
        var idade = ano - Number(box_ano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'imagem')

        if(radsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade < 12){
                img.setAttribute('src', 'imagens/criança-menino.jpg')
            } else if(idade <= 18){
                img.setAttribute('src', 'imagens/adolecente.jpg')
            } else if( idade <= 60){
                img.setAttribute('src', 'imagens/homem-adulto.jpg')
            } else{
                img.setAttribute('src', 'imagens/idoso.jpg')
            }

        } else if(radsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 12){
                img.setAttribute('src', 'imagens/criança-menina.jpg')
            } else if(idade < 18){
                img.setAttribute('src', 'imagens/adolecente-mulher.jpg')
            } else if( idade < 60){
                img.setAttribute('src', 'imagens/mulher-adulta.jpg')
            } else{
                img.setAttribute('src', 'imagens/idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }

}