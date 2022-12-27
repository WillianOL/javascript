let fundo = document.getElementById('fundo')//Pegando o body para trocar a cor de fundo.
let imagem = document.getElementById('img')//Seleciona a imagem para fazer a troca.
let ImgFoto = document.getElementById('Imagem')//Pegando a div da imagem para adicionar os estilos.
let texto = document.getElementById('TxtHora')//Texto onde a mensagem irá aparecer 

//Cria o evento de click para a fução do botão.
let FunHora = document.getElementById('BtnVerificar')
FunHora.addEventListener('click', ClicarVerHora)

function ClicarVerHora(){
    ImgFoto.classList.add('imagemSt')//Adicionando a class para fazer a imagem aparecer e aplicar os estilos.
    
     //Pega o valor digitado no input e trasforma em número(number).
    let txtHora = document.getElementById('TxtHorario')
    let hora = Number(txtHora.value)

    if( hora == 0 || hora < 1 ){
        ImgFoto.style.display = "none"
        texto.innerHTML = '[ERRO] Parece que você não digitou nada. Tente novamente!' //Mensagem de erro caso nenhum dos calores seja correspondido.
        fundo.style.backgroundImage = 'linear-gradient(120deg, rgb(148, 8, 8), black)'
    }else if( hora <= 12){
        ImgFoto.style.display = "flex"
        imagem.src = '../imagens/Manhã.jpg'
        fundo.style.background = 'rgb(255, 217, 0)'
        texto.innerHTML = (`Agora são ${hora}, bom dia!`)
    }else if( hora <= 18 ){
        ImgFoto.style.display = "flex"
        imagem.src = '../imagens/Tarde.jpg'
        fundo.style.background = 'rgb(224, 123, 6)'
        texto.innerHTML = (`Agora são ${hora}, boa tarde!`)
    } else if( hora <= 24){
        ImgFoto.style.display = "flex"
        imagem.src = '../imagens/Noite.jpg'
        fundo.style.background = 'rgb(4, 4, 14)'
        texto.innerHTML = (`Agora são ${hora}, boa noite!`)
    } else{
        ImgFoto.style.display = 'none'
        texto.innerHTML = ('[ERRO] O horario que você digitou esta INCORRETO! Tente novamamente.') //Mensagem de erro ao não preencher o input
    }
}