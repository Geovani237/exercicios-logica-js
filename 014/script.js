/*
Fracionário salario_hora, salario_bruto, valor_sindicato, sindicato, valor_inss, inss, valor_ir, ir, salario_liquido;
	Inteiro horas_mes;

	Escreva("Vamos saber quando você ganha no mês");
	Escreva("Informe quanto você ganha por hora:");
	Leia(salario_hora);
	Escreva("Quantas horas você trabalha no mês:");
	Leia(horas_mes);
						
	ir = 11;
	inss = 8;
	sindicato = 5;
	
	salario_bruto = salario_hora * horas_mes ;
	
	valor_ir = ir / 100 * salario_bruto;
	valor_inss = inss / 100 * salario_bruto;
	valor_sindicato = sindicato / 100 * salario_bruto;
	
	salario_liquido = salario_bruto - valor_ir - valor_inss - valor_sindicato;

	Escreva("+ Salário Bruto : R$ ", salario_bruto);
	Escreva("- IR (11%) : R$ ", valor_ir);
	Escreva("- INSS (8%) : R$ ", valor_inss);
	Escreva("- Sindicato (5%) : R$ ", valor_sindicato);
	Escreva("= Salário Liquido : R$ ", salario_liquido);
Fim
*/
