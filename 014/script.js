function salario(hora,horas_trabalhadas){
let salario
let ir
let inss
let sindicato
let salario_liquido

console.log("Quanto você ganha por hora")
console.log("Quantas horas você trabalha por mês")


salario = hora * horas_trabalhadas
ir = salario * (11/100)
inss = salario * (8/100)
sindicato = salario * (5/100)
salario_liquido = salario - ir - inss - sindicato

console.log("+ Salário Bruto : R$", salario)
console.log("- IR (11%) : R$" , ir)
console.log("- INSS (8%) : R$", inss)
console.log("- Sindicato ( 5%) : R$" , sindicato)
console.log("= Salário Liquido : R$" , salario_liquido)

}
salario(13,120)

