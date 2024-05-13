var preco = prompt("Digite o preço do produto:")
var idade = prompt("Digite sua idade:")
var desconto = preco - preco*0.1

if(idade < 18){
  console.log(`O preço do produto é ${desconto}`)
}
else{
  console.log(`O preço do produto é ${preco}`)
}
