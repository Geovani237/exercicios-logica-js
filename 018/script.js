function aprovadorReprovado(nota1,nota2){
    let media
    console.log("Informer a 1 nota") 
    console.log("Informe a 2 nota")
    media = (nota1 + nota2) / 2
    if(media < 5){
        console.log("Reprovado!")
    }
    if(media >= 5){
        console.log("Aprovado!")
    }   
    console.log(media)
}
aprovadorReprovado(5,9)
