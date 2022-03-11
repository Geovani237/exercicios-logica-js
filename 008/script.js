function salario(ganha=0,hora=0){
    

    let total
	ganha = parseFloat(ganha)
	hora = parseFloat(hora)
    document.querySelector("#resultado").innerHTML="Digite quanto você ganha por hora?" + ganha
	
   
	
   document.querySelector("#resultado").innerHTML="Qual o número de horas você trabalha no mês" + hora
	
    total = ganha * hora

   document.querySelector("#resultado").innerHTML="O seu salário nesse mês é de R$" + total
}
