function soma(num1=0, num2=0){
        //Inteiro num1;
        //Inteiro num2;
        //Inteiro soma;
        num1 = parseFloat(num1)
        num2 = parseFloat(num2)
        let soma
        //Escreva("Digite qualquel número");
        document.querySelector("#resultado").innerHTML ="Digite qual quer número:" + num1
        //Leia(num1);
        

        //Escreva("Mais um número");
        document.querySelector("#resultado").innerHTML ="Digite mais um número:" + num2
        //Leia(num2);
        
        
        //soma = num1 + num 2;
        soma = num1 + num2
        //Escreva("A soma dos dois número é =", soma);
        document.querySelector("#resultado").innerHTML ="A soma dos dois números é =" + soma
 }
