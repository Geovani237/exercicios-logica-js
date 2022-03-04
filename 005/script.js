function centimetros(metros=0){
    //Fracionario metros
	//Fracionario centimetros
    metros =parseFloat (metros)
    let centimetros
	//Escreva("Quantos metros você quer tranformar em centimetros ?");
   document.querySelector("#resultado").innerHTML="Quantos metros você quer transformar em centimetros ?" + metros
	//Leia(metros);
    
	//centimetros = metros * 100;
    centimetros = metros * 100
	//Escreva(metros, " é igual a ", centimetros);
   document.querySelector("#resultado").innerHTML ="metros é igual a "+ centimetros + " centimetros" 
}
