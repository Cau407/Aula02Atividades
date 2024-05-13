var numero = promp("Digite um número de 1 à 7")
let semana = {
  dom: "Domingo",
  seg: "Segunda",
  ter: "Terça",
  qua: "Quarta",
  qui: "Quinta",
  sex: "Sexta",
  sab: "Sábado",
}

switch(numero){
  case 1:
    console.log(semana.dom)
    break
  case 2:
    console.log(semana.seg)
    break
  case 3:
    console.log(semana.ter)
    break
  case 4:
    console.log(semana.qua)
    break
  case 5:
    console.log(semana.qui)
    break
  case 6:
    console.log(semana.sex)
    break
  case 7:
    console.log(semana.sab)
    break
  default:
    console.log("Digitou errado")
}