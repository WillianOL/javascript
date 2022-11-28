var num = [1, 4, 2, 8, 6, 5]

/*
for(var n1 = 0; n1 < num.length; n1++){
    console.log(`A posição ${n1} tem o valor ${num[n1]}`)
} //Vai mostrar os valores dos vetores na tela atrávez da estrutura de repedição com vareavel de controle.
*/

for(var n1 in num){
    console.log(`A posição ${n1} do vetor é ${num[n1]}`)
}