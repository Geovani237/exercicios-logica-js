function altura(h){
	//Texto genero;
	//Fracionário h;
	//Fracionário peso_ideal;
    let peso_homem
    let peso_mulher
    //Escreva("Vamos calcular seu peso ideal");
    console.log("Vamos calcular seu peso ideal")
	//Escreva("Digite se você é (homem/mulher)");
	//Escreva(genero);
    console.log("Digite se você é (homem/mulher)")
	//Escreva("Digite sua altura");
    console.log("Digite sua altura:")
	//Leia(h);
	//Se genero = "homem" Então 
	//Início Se
	    //peso_ideal = (72.7 * h) - 58;
	//Fim Se   
        peso_ideal = (72.7 * h) - 58
	//Se genero = "mulher" Então 
	//Início Se
		//peso_ideal = (62.1 * h) - 44.7;
	//Fim Se
        peso_idael =  (62.1 * h) - 44.7
	//Escreva("O peso ideal para você é :" , peso_ideal);
    console.log("O peso ideal para você é =", peso_ideal)
}
altura(1.77)