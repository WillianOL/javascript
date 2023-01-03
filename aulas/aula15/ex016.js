//Vareavel composta (Arrays)
let caixa01 = [ 5, 3, 4, 6, 8, 2, 1 ] //Declarando um array com 4 valores.
caixa01[7] = 9 //Adicionando o valor 9 no indicie 4
caixa01.push(7) //Vai adicionar o valor 7 na ultima posição do array

caixa01.sort() //Vai organizar os elementos em ordem crescente
console.log(`O vetor tem os valores ${caixa01}, com ${caixa01.length} valores`)
console.log(`O primeiro valor é ${caixa01[0]}`);
console.log(`O ultimo valor é o ${caixa01[8]}`);

