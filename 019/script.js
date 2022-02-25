function maiorNumero(n1=0, n2=0 , n3=0){
    if(n1 > n2 && n1 > n3){
        console.log("O maior número é n1 =",n1)
    }else if(n2 > n1 && n2 > n3){
        console.log("O maior número é n2 =",n2)

    }else if(n3 > n1 && n3 > n2){
        console.log("O maior número é n3 =",n3)
    }
}
maiorNumero(7,6,10)
function soma(n1=0 , n2=0){
    let total
    total = n1 + n2
    console.log(total)
}
soma(5,10)