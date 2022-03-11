function areaDobro(lados=0){
    
    let area
    let area_dobro
    area = parseFloat(area)
    area_dobro = parseFloat(area_dobro)
    lados = parseFloat(lados)
   
  
    area = lados * lados
  
    area_dobro = area * 2
   
    document.querySelector("#resultado").innerHTML+= "A área é = " + area
    document.querySelector("#resultado").innerHTML+= "<br>"
    document.querySelector("#resultado").innerHTML+="O dobro da área do quadrado é = " + area_dobro
}

    