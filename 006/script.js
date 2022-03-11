function area(raio = 0){
 
    let area
    raio = parseFloat(raio)

    document.querySelector("#resultado").innerHTML="Vamos descobrir a área de um circulo, digite seu raio" + raio
    
    area = (3.14 * raio * raio)
    
    document.querySelector("#resultado").innerHTML ="A área do circulo é =" + area
}
