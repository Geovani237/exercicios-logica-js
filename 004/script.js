function media(nota1=0,nota2=0,nota3=0,nota4=0){
    //Fracionario nota1;
	//Fracionario nota2;
	//Fracionario nota3;
	//Fracionario media;
	nota1 = parseFloat (nota1)
	nota2 = parseFloat (nota2)
	nota3 = parseFloat (nota3)
	nota4 = parseFloat (nota4)
    let media
	//Escreva("Digite a 1 Nota");
   document.querySelector("#resultado").innerHTML="Digite a 1 nota " + nota1
	//Leia(nota1); 
	//Escreva("Digite a 2 nota");
   document.querySelector("#resultado").innerHTML="Digite a 2 nota " + nota2
	//Leia(nota2);
	//Escreva("Digite a 3 nota");
    document.querySelector("#resultado").innerHTML="Digite a 3 nota " + nota3
	//Leia(nota3); 
    document.querySelector("#resultado").innerHTML="Digite a 4 nota " + nota4
	//media= (nota1+nota2+nota3) / 3;
    media = (nota1 + nota2 + nota3 + nota4) /4
    document.querySelector("#resultado").innerHTML="A media do aluno é " + media 
//	 Se media < 6 Entao
	//Início Se 
	//	Escreva(media);
	//	Escreva(" Aluno foi reprovado, esta de recuperação!");
//	Fim Se
//	Senão
//	Início Senão
//		Escreva(media);
//		Escreva("Aluno aprovado!");
//	Fim Senão
}