var numero = prompt("Escolha um número")
var divisor = 2
while(numero%divisor != 0)
    divisor++

if(numero == divisor)
    console.log("O número escolhido é primo");
else
    console.log("O número escolhido não é primo");