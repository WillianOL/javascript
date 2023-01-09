let pessoa = {
    nome:'Willian',
    idade: 18,
    peso: 55,
    sexo: 'M',
    engordou(p=0){
        console.log('Engordou!')
        this.peso += p
    }
}

pessoa.engordou(2)

console.log(`Seu nome é ${pessoa.nome} e ele engordou ${pessoa.peso} `)