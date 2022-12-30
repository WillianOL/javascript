let FuncBotão = document.getElementById('BtnVerificar');
FuncBotão.addEventListener('click', VerificarIdade); //Criando o evento de click para fazer a função do botão.

function VerificarIdade(){
    let data = new Date()
    let AnoAtual = data.getFullYear() //Comando para pegar o ano atual automaticamente
    let Resultado = document.getElementById('res') //Selecionando a Div onde vai ficar o texto de resultado.
    let ResERRO = document.getElementById('resErro') //Div para a mensagem de erro/tirar a mensagem se ouver uma na tela
    let txtIdade = document.getElementById('txtNascimento') //Vai pegar a idade que o usuário digitar no input

    //Mensagens de possiveis problemas que o usuário possa faze, se não ouver nenhum erro, irá executar o código normalmente
    if( txtIdade.value.length == 0 || txtIdade.value <= 0 || txtIdade.value > AnoAtual){
        ResERRO.innerHTML = "[ERRO] Ouve um problema com a data de nascimento. Tente novamente."
    } else{ 
        let Idade = AnoAtual - Number(txtIdade.value) //Vai calcular a idade da pessoa
        let Tsex = document.getElementsByName('sexo') //Pegando os radioInputs do sexo da pessoa
        let Imagem = document.getElementsByTagName('img')[0] //Selecionado a tag de IMG para colocar as imagens das pessoas
        let gênero = '' //Gênero que sera colocado aqui se for homem ou mulher
        if( Tsex[0].checked){ //Se for homem, executar esse bloco
            gênero = 'Homem'
            if( Idade <= 12 ){
                Imagem.src = '../imagens/criança-homem.jpg'
            } else if( Idade <= 18){
                Imagem.src = '../imagens/adolescente-homem.jpg'
            } else if( Idade < 60){
                Imagem.src = '../imagens/adulto-homem.jpg'
            } else{
                Imagem.src = '../imagens/idoso-homem.jpg'
            }
        } else{ //Se for mulher, executar esse bloco
            gênero = 'Mulher'
            if( Idade <= 12 ){
                Imagem.src = '../imagens/criança-mulher.jpg'
            } else if( Idade <= 18){
                Imagem.src = '../imagens/adolescente-mulher.jpg'
            } else if( Idade < 60){
                Imagem.src = '../imagens/adulta-mulher.jpg'
            } else{
                Imagem.src = '../imagens/idoso-mulher.jpg'
            }
        }
        Resultado.innerHTML = `Detectamos um(a) ${gênero} com ${Idade} anos` //Texto que será exibido com a idade e o gênero da pessoa
    }
    
}
