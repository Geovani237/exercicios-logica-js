function celsius(f=0){
  
    let c
	f=parseFloat(f)

   document.querySelector("#resultado").innerHTML="Escreva os graus em Fahrenheit para transformar em Celsius" + f
	
    c = 5 * ((f-32) / 9)
	
    console.log("A conversão de Fahrenheit para Celsius é de:", c)
}
