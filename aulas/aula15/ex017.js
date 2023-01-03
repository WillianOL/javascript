let num = [ 5, 3, 2, 6, 9, 10 ]

//Sintaxe sinplificada do for para arrays e objetos
for(let p in num){
    console.log(`O indicie ${p} tem o número ${num[p]}`)
}

//Forma tradicional de exibir um vetor
/*
console.log(num)
for( let posição = 0; posição < num.length; posição++){
    console.log(`O indície ${posição} tem o número ${num[posição]}`)
}
*/